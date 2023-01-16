<template>
  <div>
    <div class="fixed top-0 left-0 w-full h-screen bg-black opacity-70"></div>
    <div class="loader"></div>
  </div>
</template>

<style scoped>
.loader {
  @apply fixed top-1/4 left-1/2 border-[16px] border-t-teal-300 border-b-teal-300 rounded-full h-40 w-40 animate-spin
}
</style>
