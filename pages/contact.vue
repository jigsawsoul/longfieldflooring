<template>
  <div class="min-h-screen bg-white relative overflow-hidden">
    <!-- Content -->
    <div class="container mx-auto px-6 py-24 relative z-10">
      <div class="max-w-3xl mx-auto">
        <!-- Hero Section -->
        <div class="text-center mb-24">
          <h1 ref="title" class="text-7xl md:text-8xl font-bold mb-8 tracking-tight text-gray-900 opacity-0 transform scale-95">
            Russ Digital
          </h1>
          <p ref="subtitle" class="max-w-xl text-xl md:text-2xl text-gray-600 mb-16 leading-relaxed max-w-2xl mx-auto opacity-0 transform translate-y-4 font-light tracking-wide">
            We craft <span class="font-medium text-gray-800">exceptional digital experiences</span> that <span class="font-medium text-gray-800">transform your online presence</span>
          </p>
        </div>

        <!-- Contact Section -->
        <div class="mt-12 text-center">
          <h3 ref="cta" class="text-3xl font-medium mb-12 text-gray-800 opacity-0 transform translate-y-4">Ready to elevate your digital presence?</h3>
          <div class="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
            <a ref="phoneBtn" href="tel:+441234567890" class="group px-10 py-5 bg-gray-900 rounded-full text-white font-medium hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 flex items-center space-x-4 opacity-0 transform translate-y-4">
              <svg class="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span class="text-lg">+44 1234 567 890</span>
            </a>
            <a ref="emailBtn" href="mailto:contact@russdigital.com" class="group px-10 py-5 bg-white rounded-full text-gray-900 font-medium hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 flex items-center space-x-4 opacity-0 transform translate-y-4 border border-gray-200">
              <svg class="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="text-lg">contact@russdigital.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const title = ref(null)
const subtitle = ref(null)
const cta = ref(null)
const phoneBtn = ref(null)
const emailBtn = ref(null)

onMounted(() => {
  // Create timeline for content animations
  const tl = gsap.timeline({
    defaults: {
      ease: 'power3.out',
      duration: 1.2
    }
  })

  tl.to(title.value, {
    opacity: 1,
    scale: 1,
    duration: 1.4
  })
  .to(subtitle.value, {
    opacity: 1,
    y: 0,
    duration: 1
  }, '-=0.8')
  .to(cta.value, {
    opacity: 1,
    y: 0,
    duration: 1
  }, '-=0.6')
  .to([phoneBtn.value, emailBtn.value], {
    opacity: 1,
    y: 0,
    stagger: 0.15,
    duration: 0.8
  }, '-=0.4')
})

definePageMeta({
  layout: 'home'
})

useHead({
  title: 'Russ Digital - Contact Us'
})
</script> 
