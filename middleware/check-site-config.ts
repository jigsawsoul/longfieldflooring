export default defineNuxtRouteMiddleware(async (to) => {
    const slug = Array.isArray(to.params.slug)
      ? to.params.slug.join('/')
      : to.params.slug
  
    const { data } = await useFetch(`/api/site-config`, {
      query: { slug },
      // Required to avoid shared fetch context error
      server: true,
      key: `site-config-${slug}`
    })
  
    if (!data.value?.config) {
      return navigateTo('/contact')
    }
  
    const siteStore = useSite()
    siteStore.setSite(data.value.config)
  })
  