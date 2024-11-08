<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <nav class="h-14 border-b border-b-solid border-gray-100 bg-white flex justify-items-center items-center gap-2 py-1 px-4 lg:gap-4">
    <Icon :name="appConfig?.navbar?.logoIcone" size="20"/>
    <h2 class="font-bold">{{ appConfig?.navbar?.titre }}</h2>
  </nav>
</template>