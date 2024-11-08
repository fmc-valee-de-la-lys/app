<script lang="ts" setup>
const appConfig = useAppConfig()
const inputFocused = ref(false)
</script>

<template>
  <form class="w-full flex flex-col box-border gap-4 items-center lg:max-w-100"
    @submit="(e) => { e.preventDefault(); console.log('in submit'); }">
    <label for="souscrire" :aria-label="appConfig?.index?.champ?.placeholder"
      class="w-full flex rounded-md border border-solid-1  border-gray-400 transition-shadow duration-200 outline-none box-border py-1"
      :class="[inputFocused ? 'shadow-[0_0_0_2px] shadow-blue-800' : 'shadow-[0_0_0_1px] shadow-gray-400']">
      <input id="souscrire" name="souscrire" type="text" :placeholder="appConfig?.index?.champ?.placeholder"
        class="flex-1 h-10 px-2 text-lg rounded-md border-none outline-none box-border" @focus="inputFocused = true"
        @blur="inputFocused = false" />

    </label>
    <button
      class="border-none mr-1 rounded-full text-lg bg-yellow-300 active:bg-yellow-500 text-gray-700 flex items-center w-fit h-12 px-6 font-bold transition-all duration-200 flex gap-2 cursor-pointer">
      <p>S'inscrire</p>
      <Icon name="tabler:send-2" size="20" />
    </button>

  </form>
</template>