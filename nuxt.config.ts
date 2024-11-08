// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    '@nuxtjs/seo',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/image',
  ],
  fonts: {
    provider: 'google',
    defaults: {
      weights: [400, 500, 600, 700, 800, 900],
    }
  },
  routeRules: {
    '/': { prerender: true }
  },
  compatibilityDate: '2024-11-08',
  content: {
    markdown: {
      anchorLinks: false
    }
  },
})