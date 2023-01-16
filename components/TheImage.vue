<script lang="ts" setup>
const prop = defineProps<{ url: string; sizes?: string; alt: string; class?: string; }>();
const sizes = prop.sizes || getImgSizes();
</script>

<template>
  <nuxt-img v-if="prop?.url" :src="prop.url" format="webp" :sizes="sizes" :alt="prop.alt" decoding="async"
    loading="lazy" :class="prop.class || ''" />
</template>

<style scoped>

</style>
