import Aura from '@primevue/themes/aura';
import { definePreset } from '@primevue/themes';


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@primevue/nuxt-module', '@nuxtjs/tailwindcss', '@nuxt/icon'],

  routeRules: {
    '/': { prerender: true }
  },

  primevue: {
    options: {
      theme: {
        preset: definePreset(Aura, {
          semantic: {
            primary: {
              50: '{indigo.50}',
              100: '{indigo.100}',
              200: '{indigo.200}',
              300: '{indigo.300}',
              400: '{indigo.400}',
              500: '{indigo.500}',
              600: '{indigo.600}',
              700: '{indigo.700}',
              800: '{indigo.800}',
              900: '{indigo.900}',
              950: '{indigo.950}'
            }
          }
        }),
        options: {
          cssLayer: {
            name: 'primevue',
            order: 'tailwind-base, primevue, tailwind-utilities'
          }
        }
      }
    }
  },

  content: {
    sources: {
      github: {
        prefix: '/', // Prefix for routes used to query contents
        driver: 'github', // Driver used to fetch contents (view unstorage documentation)
        repo: "lnbiuc/ObsidianNote",
        branch: "main",
        token: process.env.GITHUB_TOKEN,
      },
    }
  },

  compatibilityDate: '2024-11-08'
})