<script lang="ts" setup>
import { IProduct } from '../types';
interface PProduct extends IProduct { }

const { prop } = defineProps<{ prop: PProduct; }>();
const sliceTxt = (title: string, mustLen: number) => {
  let len = 0;
  return title.split(' ')
    .filter(({ length }) => (len + length) < mustLen ? len += length : 0)
    .join(' ') + '...';
};

//add product to cart
const tempItems = useTempItems();
const addProduct = () => {
  const { id, title, image, price } = prop;
  tempItems.value.push({ id, title, image, price });
};

const disabledAdd = (): boolean => {
  const { id } = prop;
  if (!tempItems.value?.length) return false;
  return tempItems.value.find(item => item.id == id) ? true : false;
};

const hrefTo = () => {
  navigateTo('/product/' + prop.id);
};
</script>

<template>
  <div>
    <div class="text-center py-2 px-9" @click="hrefTo">
      <div class="flex justify-center mb-6">
        <TheImage :url="prop.image" :alt="prop.title" class="h-36" />
      </div>
      <p class="text-lg uppercase mb-4 font-bold">{{ sliceTxt(prop.title, 10) }}</p>
      <p class="text-gray-700 text-sm mb-4"> {{ sliceTxt(prop.description, 50) }}</p>
      <p class="text-xl text-teal-400 font-semibold mb-4">${{ prop.price }}</p>
    </div>
    <button class="uppercase w-full bg-teal-400 text-white h-14 disabled:bg-teal-600 duration-200" @click="addProduct"
      :disabled="disabledAdd()">add to cart</button>
  </div>
</template>

<style scoped>
button:hover {
  @apply mx-auto w-4/5 rounded
}

button:disabled {
  @apply mx-auto w-4/5 rounded line-through
}
</style>
