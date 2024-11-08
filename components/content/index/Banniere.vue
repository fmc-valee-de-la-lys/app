<template>
  <header class="banniere h-52 bg-blue-800 text-center text-2xl flex m-0 font-bold text-white tracking-wider justify-center lg:text-4xl px-8">
    <slot />
  </header>
</template>

<style>

.banniere>p {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>