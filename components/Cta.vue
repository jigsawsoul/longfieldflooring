<template>
  <section :class="['py-20 scroll-mt-[40px]', $attrs.class]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-6">Ready to Transform Your Space?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today for a free consultation. We're here to help bring your electrical vision to life with our expert services across {{ site.county }}.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:07807613063"
            class="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Call 07807 613063
          </a>
          <a 
            href="#contact"
            class="bg-transparent border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors"
          >
            Contact Form
          </a>
        </div>
      </div>
    </section>
</template>

<script lang="ts" setup>
import { useSite } from '~/stores/site'
const site = useSite().site
</script>

<style>

</style>
