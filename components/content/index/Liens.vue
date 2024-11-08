<script lang="ts" setup>
const appConfig = useAppConfig()

const links = computed(() => appConfig?.index?.liens)
</script>

<template>
  <div class="flex flex-col gap-4 w-full p-2 rounded-md lg:flex-row lg:max-w-150 lg:bg-white">
    <NuxtLink v-for="link in links" :key="link?.texte" :href="link?.url"
      class="border border-solid border-gray-200 shadow box-border flex-1 flex px-2 py-3 rounded-md text-lg text-gray-700 font-bold bg-white items-center gap-2 lg:text-xl lg:shadow hover:bg-gray-50 hover:shadow-md transition-all">
      <Icon :name="link?.icone" size="20" />
      <p class="p-0 m-0 flex-1 text-left">{{ link?.texte }}</p>
      <Icon v-if="link?.externe" name="tabler:external-link" size="20" class="text-gray-500" />
    </NuxtLink>
  </div>
</template>

<style>
a {
  color: inherit;
  text-decoration: inherit;
}
</style>