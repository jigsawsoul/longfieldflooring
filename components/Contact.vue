<template>
  <section :class="['py-20 scroll-mt-[40px]', $attrs.class]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you as soon as possible to discuss your electrical needs.
          </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <ContactForm />
          </div>
          
          <!-- Business Information -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">Why Choose Us?</h3>
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-medium text-gray-900">Fully Qualified Electricians</h4>
                  <p class="mt-1 text-gray-600">All our electricians are NICEIC registered and fully insured for your peace of mind.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-medium text-gray-900">Free Quotes</h4>
                  <p class="mt-1 text-gray-600">We provide free, no-obligation quotes for all our electrical services.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-medium text-gray-900">24/7 Emergency Service</h4>
                  <p class="mt-1 text-gray-600">Available around the clock for emergency electrical repairs and urgent issues.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-medium text-gray-900">Guaranteed Work</h4>
                  <p class="mt-1 text-gray-600">All our work comes with a comprehensive guarantee for your complete satisfaction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
