<script setup>
defineProps(["imgSrc"]);
</script>

<template><nuxt-img sizes="sm:100vw md:50vw lg:350px" format="webp" loading="lazy" :src="imgSrc" /></template>