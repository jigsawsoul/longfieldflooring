<template>
  <div>
    <component
      v-for="(Component, index) in components"
      :is="Component"
      :key="index"
      :class="index % 2 === 0 ? 'bg-gray-50' : 'bg-white'"
    />
  </div>
</template>

<script setup>
import Hero from '~/components/Hero.vue'
import Features from '~/components/Features.vue'
import Services from '~/components/Services.vue'
import Testimonials from '~/components/Testimonials.vue'
import Areas from '~/components/Areas.vue'
import Contact from '~/components/Contact.vue'
import Cta from '~/components/Cta.vue'

const components = [
  Hero,
  Features,
  Services,
  Testimonials,
  Areas,
  Contact,
  Cta
]

definePageMeta({
  middleware: 'check-site-config'
})

onMounted(() => {
  const scrollToHash = () => {
    const hash = window.location.hash
    if (!hash) return
    setTimeout(() => {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 0)
  }

  scrollToHash()
  window.addEventListener('hashchange', scrollToHash)

  onBeforeUnmount(() => {
    window.removeEventListener('hashchange', scrollToHash)
  })
})
</script> 
