<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg fixed w-full z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <NuxtLink to="/" class="text-2xl font-bold text-gray-800">
              Longfield Flooring
            </NuxtLink>
          </div>
          <div class="hidden md:flex items-center space-x-8">
            <NuxtLink to="/" class="text-gray-600 hover:text-gray-900">Home</NuxtLink>
            <NuxtLink to="/gallery" class="text-gray-600 hover:text-gray-900">Gallery</NuxtLink>
            <NuxtLink to="/testimonials" class="text-gray-600 hover:text-gray-900">Testimonials</NuxtLink>
            <NuxtLink to="/contact" class="text-gray-600 hover:text-gray-900">Contact</NuxtLink>
            <a href="https://www.facebook.com/longfieldflooringltd/" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900">
              <span class="sr-only">Facebook</span>
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
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
      <div v-show="isMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NuxtLink to="/" class="block px-3 py-2 text-gray-600 hover:text-gray-900">Home</NuxtLink>
          <NuxtLink to="/gallery" class="block px-3 py-2 text-gray-600 hover:text-gray-900">Gallery</NuxtLink>
          <NuxtLink to="/testimonials" class="block px-3 py-2 text-gray-600 hover:text-gray-900">Testimonials</NuxtLink>
          <NuxtLink to="/contact" class="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</NuxtLink>
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
            <h3 class="text-lg font-semibold mb-4">Longfield Flooring</h3>
            <p class="text-gray-300">Professional flooring services for your home and business.</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
            <p class="text-gray-300">Phone: <a href="tel:07807613063" class="hover:text-white">07807 613063</a></p>
            <p class="text-gray-300">Email: info@longfieldflooring.com</p>
            <p class="text-gray-300">Address: 123 Floor Street, City, State 12345</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Business Hours</h3>
            <p class="text-gray-300">Monday - Friday: 7:00 AM - 5:00 PM</p>
            <p class="text-gray-300">Saturday: Closed</p>
            <p class="text-gray-300">Sunday: Closed</p>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {{ new Date().getFullYear() }} Longfield Flooring. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const isMenuOpen = ref(false)
</script> 
