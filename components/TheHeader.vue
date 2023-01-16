<script lang="ts" setup>
const { public: { storyHost } } = useRuntimeConfig();
const { data: products, pending: loading } = useAsyncData<string[]>('categories', () => $fetch(storyHost + '/products/categories'), { lazy: !process.server });

const showCartModal = useShowCartModal();
const cartModalOpen = () => { showCartModal.value = true; };
</script>

<template>
  <div class="sticky top-0 left-0 w-full h-20 flex justify-center items-center bg-white shadow-md mb-8">
    <TheLoader v-show="loading" />
    <div @click="() => navigateTo('/')" role="button">
      <TheImage class="w-20" url="/scarlet_nexus.jpg" alt="logo" />
    </div>
    <div v-if="products?.length" class="ml-10 flex justify-center items-center">
      <NuxtLink class="mx-2 p-2 text-teal-500 uppercase border-b-[1px] border-b-teal-500" active-class="border-b-[3px]"
        v-for="category of products" :key="category" :to="'/' + category">
        {{ category }}</NuxtLink>
    </div>
    <div class="ml-10 w-10 p-1 hover-cart" role="button" @click="cartModalOpen">
      <TheImage url="/cart.png" alt="cart" />
    </div>
    <TheCartModal />
  </div>
</template>

<style scoped>
.hover-cart {
  @apply duration-300
}

.hover-cart:hover {
  @apply rounded shadow-md shadow-teal-800
}

.hover-cart:active {
  @apply shadow
}
</style>
