<template>
    <div class="h-full w-full relative top-0 left-0">
        <TheMetaTags />
        <TheImage url="/scarlet_nexus.jpg" alt="background logo"
            class="-z-50 absolute top-0 left-0 w-[50vw] h-[70vh] xy" />
    </div>
</template>
<style scoped>
.xy {
    transform: translateY(calc(30vh / 2));
    transform: translateX(50vh);
}
</style>

<script setup lang="ts">
const metaProps = useForMetaProps();
metaProps.value = {
    title: 'Home - dream shop',
    description: 'online shop for clothes',
    keywords: ['clothes', 'online', 'top', 'buy'],
    img: '/scarlet_nexus.jpg'
};
</script>