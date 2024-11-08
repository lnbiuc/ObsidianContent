// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content'],

  routeRules: {
    '/': { prerender: true }
  },

  content: {
    sources: {
      github: {
        prefix: '/blog', // Prefix for routes used to query contents
        driver: 'github', // Driver used to fetch contents (view unstorage documentation)
        repo: "lnbiuc/ObsidianNote",
        branch: "main",
        token: process.env.GITHUB_TOKEN,
      },
    }
  },


  compatibilityDate: '2024-11-08'
})
