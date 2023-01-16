<script lang="ts" setup>
import { IProduct } from '~~/types';

const productId = useRoute().params.id as string;
const { public: { storyHost } } = useRuntimeConfig();

const { data, pending } = useAsyncData<IProduct>('productById', () => $fetch(storyHost + '/products/' + productId), { lazy: !process.server });
const metaProps = useForMetaProps();
if (data.value) {
  metaProps.value = {
    keywords: [data.value.category, data.value.title.split(' '), data.value.description.split(' ')].flat(2),
    description: data.value.description,
    img: data.value.image,
    title: data.value.title
  };
}
</script>

<template>
  <div>
    <TheMetaTags />
    <TheLoader v-show="pending" />
    <!-- product -->
    <div v-if="data?.title" class="flex items-start justify-between px-40">
      <div class="relative top-0 left-0 w-1/2 h-[80vh] flex items-center justify-center rounded">
        <TheImage :url="data.image" :alt="data.title" class="rounded shadow w-96 -z-40" />
        <div
          class="absolute top-0 left-0 rounded flex items-center justify-center h-full w-full -z-50 bg-black opacity-20">
        </div>
      </div>
      <div class="flex flex-col justify-around items-center h-[80vh] w-[40%]">
        <div class="grid grid-cols-1 gap-16 text-center">
          <p class="text-2xl text-gray-400 uppercase">{{ data.title }}</p>
          <p class="text-gray-400 uppercase">{{ data.category }}</p>
          <p class="text-xl text-teal-500 font-bold">${{ data.price }}</p>
          <p>${{ data.description }}</p>
        </div>
        <div class="w-full">
          <button
            class="border border-solid border-teal-400 w-1/2 p-5 rounded hover:shadow-lg active:shadow duration-300">ADD
            TO
            CART</button>
          <button
            class="border border-solid border-teal-400 w-1/2 p-5 rounded hover:shadow-lg active:shadow duration-300">BUY
            NOW</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
