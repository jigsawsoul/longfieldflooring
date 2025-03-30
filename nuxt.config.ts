// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      'Poppins': [400, 500, 600, 700],
      'Playfair Display': [400, 500, 600, 700]
    }
  },
  app: {
    head: {
      title: 'Longfield Flooring - Professional Flooring Services',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professional flooring services by Longfield Flooring. Quality installation and expert craftsmanship for all your flooring needs.' }
      ]
    }
  }
})
