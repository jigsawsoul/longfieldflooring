// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/google-fonts', '@pinia/nuxt'],
  googleFonts: {
    families: {
      'Poppins': [400, 500, 600, 700],
      'Playfair Display': [400, 500, 600, 700]
    }
  },
  app: {
    head: {
      title: 'Kent Electrical Solutions - Professional Electrical Services',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professional electrical services in Kent. Expert electricians providing installation, repair, and maintenance for residential and commercial properties.' },
        { name: 'keywords', content: 'electrician kent, electrical services, electrical installation, electrical repairs, commercial electrician, domestic electrician, electrical safety inspection' }
      ]
    }
  }
})