<template>
  <section :class="['py-20 scroll-mt-[40px]', $attrs.class]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Areas We Service</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide professional electrical services throughout {{ site?.location }} and surrounding areas in {{ site?.county }}.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Map -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe 
              :src="`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19919.999999999996!2d0.5166666666666667!3d51.266666666666666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df2f6c1d8c9f9f%3A0x1c1c1c1c1c1c1c1c!2s${site?.location}!5e0!3m2!1sen!2suk!4v1621905251189!5m2!1sen!2suk`" 
              width="100%" 
              height="450" 
              style="border:0;" 
              allowfullscreen
              loading="lazy"
              class="w-full h-full"
            ></iframe>
          </div>

          <!-- Areas List -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">Our Service Areas</h3>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="area in site?.serviceAreas || []" :key="area" class="flex items-center">
                <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700">{{ area }}</span>
              </div>
            </div>
            <p class="mt-6 text-gray-600">
              Don't see your area listed? Contact us to check if we can service your location.
            </p>
          </div>
        </div>
      </div>
    </section>
</template>

<script lang="ts" setup>
import { useSite } from '~/stores/site'
const site = useSite().site
</script>
