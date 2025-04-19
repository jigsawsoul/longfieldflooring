<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg fixed w-full z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <NuxtLink to="/" class="text-2xl font-bold text-gray-800">
              {{ site?.name }}
            </NuxtLink>
          </div>
          <div class="hidden lg:flex items-center space-x-8">
            <NuxtLink to="#" class="text-gray-600 hover:text-gray-900">Home</NuxtLink>
            <a href="#services" class="text-gray-600 hover:text-gray-900" @click="scrollToSection">Services</a>
            <a href="#testimonials" class="text-gray-600 hover:text-gray-900" @click="scrollToSection">Testimonials</a>
            <a href="#areas" class="text-gray-600 hover:text-gray-900" @click="scrollToSection">Areas</a>
            <a href="#contact-form" class="text-gray-600 hover:text-gray-900" @click="scrollToSection">Contact</a>
            <div class="flex items-center space-x-4">
              <a href="https://www.facebook.com/kentelectricalsolutions/" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900">
                <span class="sr-only">Facebook</span>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                </svg>
              </a>
              <a href="https://www.instagram.com/kentelectricalsolutions/" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900">
                <span class="sr-only">Instagram</span>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/kent-electrical-solutions" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900">
                <span class="sr-only">LinkedIn</span>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          <!-- Mobile menu button -->
          <div class="lg:hidden flex items-center">
            <button @click="isMenuOpen = !isMenuOpen" class="text-gray-600 hover:text-gray-900">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!-- Mobile menu -->
      <div v-if="isMenuOpen" class="absolute top-16 left-0 right-0 bg-white shadow-lg rounded-b-lg">
        <div class="px-4 py-2">
          <NuxtLink to="/" class="block px-3 py-2 text-gray-600 hover:text-gray-900" @click="isMenuOpen = false">Home</NuxtLink>
          <a href="/#services" class="block px-3 py-2 text-gray-600 hover:text-gray-900" @click="(e) => { scrollToSection(e); isMenuOpen = false }">Services</a>
          <a href="/#testimonials" class="block px-3 py-2 text-gray-600 hover:text-gray-900" @click="(e) => { scrollToSection(e); isMenuOpen = false }">Testimonials</a>
          <a href="/#areas" class="block px-3 py-2 text-gray-600 hover:text-gray-900" @click="(e) => { scrollToSection(e); isMenuOpen = false }">Areas</a>
          <a href="/#contact-form" class="block px-3 py-2 text-gray-600 hover:text-gray-900" @click="(e) => { scrollToSection(e); isMenuOpen = false }">Contact</a>
          <div class="flex items-center space-x-4 px-3 py-2">
            <a href="https://www.facebook.com/kentelectricalsolutions/" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900" @click="isMenuOpen = false">
              Facebook
            </a>
            <a href="https://www.instagram.com/kentelectricalsolutions/" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900" @click="isMenuOpen = false">
              Instagram
            </a>
            <a href="https://www.linkedin.com/company/kent-electrical-solutions" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900" @click="isMenuOpen = false">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main content -->
    <main class="flex-grow pt-16">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">{{ site?.name }}</h3>
            <p class="text-gray-300">Trusted electrical contractor serving the entire {{ site?.county }} area. Services for both residential and commercial properties.</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
            <p class="text-gray-300">Phone: <a :href="`tel:${site?.contact.phone}`" class="hover:text-white">{{ site?.contact.phone }}</a></p>
            <p class="text-gray-300">Email: <a :href="`mailto:${site?.contact.email}`" class="hover:text-white">{{ site?.contact.email }}</a></p>
            <p class="text-gray-300">Address: {{ site?.contact.address }}</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Business Hours</h3>
            <p class="text-gray-300" v-for="hour in site?.hours" :key="hour">{{ hour }}</p>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {{ new Date().getFullYear() }} {{ site?.name }}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSite } from '~/stores/site'

const site = useSite().site
const isMenuOpen = ref(false);

const scrollToSection = (event: MouseEvent) => {
  const target = event.currentTarget as HTMLAnchorElement;
  const href = target.getAttribute('href')
  if (href?.startsWith('#')) {
    event.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const headerOffset = 80 // Height of fixed header
      const scrollMargin = 0 // Additional margin for better spacing
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset - scrollMargin

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style> 
