<script lang="ts" setup></script>

<template>
  <div class="flex items-center justify-around bg-gray-200 min-h-[30vh]">
    <div class="text-3xl">
      <a href="tel:+998 (XX) XXX XX XX">+998 (XX) XXX XX XX</a>
    </div>
    <div>
      <p class="uppercase text-teal-700 text-3xl">Online shop</p>
    </div>
    <div>
      <p class="text-3xl text-teal-700">{{ new Date().toLocaleDateString('en', { dateStyle: 'full' }) }}</p>
      <p class="text-3xl text-teal-700">{{ new Date().toLocaleDateString('ru', { dateStyle: 'full' }) }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
