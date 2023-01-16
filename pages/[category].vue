<script lang="ts" setup>
import { IProduct } from '../types';
interface PProduct extends IProduct { }

const formatTitle = (title: string) => title.replace(/^[a-z]/, w => w.toUpperCase());
const { name, params } = useRoute();
const category = params[name as string] as string;
const categoryTitle = formatTitle(category);

const { public: { storyHost } } = useRuntimeConfig();
const { error, data: products, pending } = useAsyncData<PProduct[]>('products', () => $fetch(storyHost + '/products/category/' + category), { lazy: !process.server });
const metaProps = useForMetaProps();
if (products.value) {
  metaProps.value = {
    keywords: [category, categoryTitle],
    description: category,
    img: '/scarlet_nexus.jpg',
    title: category
  };
}

</script>

<template>
  <div>
    <TheMetaTags />
    <TheLoader v-show="pending" />

    <h1 class="text-xl text-red-500" v-if="error">{{ error?.name }} - {{ error?.message }}</h1>

    <div v-if="products?.length" class="w-4/5 mx-auto grid grid-cols-5 gap-8">
      <TheProduct v-for="product of products" :prop="product" :key="product.id" role="button"
        class="transition-shadow rounded shadow-2xl bg-white hover:shadow flex flex-col items-center justify-between" />
    </div>
  </div>
</template>

<style scoped>

</style>
