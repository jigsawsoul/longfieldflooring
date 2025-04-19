<template>
  <section :class="['py-20 bg-gray-50 scroll-mt-[40px]', $attrs.class]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Electrical Services</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive electrical solutions for both residential and commercial properties across {{ site?.county }}.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden group">
            <div class="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop&q=60"
                alt="Electrical Installation"
                class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="text-center text-white p-4">
                  <h3 class="text-xl font-semibold mb-2">Electrical Installation</h3>
                  <p class="text-sm">Professional installation of new electrical systems and components</p>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Electrical Installation</h3>
              <p class="text-gray-600">Expert installation of new electrical systems, including wiring, lighting, and power outlets for both residential and commercial properties.</p>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-lg overflow-hidden group">
            <div class="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1565608438257-fac3c27beb36?w=800&auto=format&fit=crop&q=60"
                alt="Electrical Repairs"
                class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="text-center text-white p-4">
                  <h3 class="text-xl font-semibold mb-2">Electrical Repairs</h3>
                  <p class="text-sm">24/7 emergency electrical repair services</p>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Electrical Repairs</h3>
              <p class="text-gray-600">24/7 emergency electrical repair services for both residential and commercial properties. Fast response times and reliable solutions.</p>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-lg overflow-hidden group">
            <div class="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=60"
                alt="EV Charger Installation"
                class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="text-center text-white p-4">
                  <h3 class="text-xl font-semibold mb-2">EV Charger Installation</h3>
                  <p class="text-sm">Professional installation of electric vehicle charging points</p>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">EV Charger Installation</h3>
              <p class="text-gray-600">Expert installation of electric vehicle charging points for homes and businesses, ensuring safe and efficient charging solutions.</p>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-lg overflow-hidden group">
            <div class="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&auto=format&fit=crop&q=60"
                alt="Smart Home Solutions"
                class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="text-center text-white p-4">
                  <h3 class="text-xl font-semibold mb-2">Smart Home Solutions</h3>
                  <p class="text-sm">Modern smart home electrical systems and automation</p>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Smart Home Solutions</h3>
              <p class="text-gray-600">Installation of modern smart home systems, including lighting control, security systems, and home automation solutions.</p>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-lg overflow-hidden group">
            <div class="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop&q=60"
                alt="Commercial Electrical"
                class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="text-center text-white p-4">
                  <h3 class="text-xl font-semibold mb-2">Commercial Electrical</h3>
                  <p class="text-sm">Professional electrical services for businesses</p>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Commercial Electrical</h3>
              <p class="text-gray-600">Comprehensive electrical services for businesses, including office fit-outs, retail spaces, and industrial electrical solutions.</p>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-lg overflow-hidden group">
            <div class="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=60"
                alt="Electrical Safety Inspections"
                class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div class="text-center text-white p-4">
                  <h3 class="text-xl font-semibold mb-2">Safety Inspections</h3>
                  <p class="text-sm">Professional electrical safety inspections and testing</p>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Electrical Safety Inspections</h3>
              <p class="text-gray-600">Comprehensive electrical safety inspections and testing for both residential and commercial properties, ensuring compliance with regulations.</p>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <a
            href="#contact"
            class="inline-flex items-center text-gray-900 font-semibold hover:text-gray-700"
          >
            Get a Free Quote
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
</template>

<script lang="ts" setup>
import { useSite } from '~/stores/site'
const site = useSite().site
</script>
