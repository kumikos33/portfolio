import { defineNuxtConfig }  from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vue: {
    compilerOptions: {
      isCustomElement: (tag) => {
        // Return true for specific custom elements
        return tag === 'lite-youtube' || tag.startsWith('another-custom-element-prefix-'); 
      },
    },
  },
    experimental: {
      renderJsonPayloads: false
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
    build: {
       transpile: ['@nuxt/content']
     },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode", 
    "@nuxt/content"],
  colorMode: {
    classSuffix: "",
  },
});
