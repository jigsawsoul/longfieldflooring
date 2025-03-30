<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[70vh]">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&auto=format&fit=crop&q=60"
          alt="Beautiful flooring"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div class="relative h-full flex items-center justify-center text-center px-4">
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Expert Flooring Services in Kent
          </h1>
          <p class="text-lg md:text-xl text-white mb-6">
            Professional flooring installation, repair, and maintenance services for your home or business
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:07807613063"
              class="bg-white text-gray-900 px-8 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call Now
            </a>
            <NuxtLink
              to="/contact"
              class="bg-transparent border-2 border-white text-white px-8 py-2.5 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Get a Quote
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Why Choose Longfield Flooring?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center p-6">
            <div class="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Expert Installation</h3>
            <p class="text-gray-600">Specialists in carpet fitting, vinyl, laminate, LVT, and subfloor preparation for both residential and commercial properties.</p>
          </div>
          <div class="text-center p-6">
            <div class="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Quality Craftsmanship</h3>
            <p class="text-gray-600">Committed to delivering durable and stylish results that stand the test of time with our attention to detail.</p>
          </div>
          <div class="text-center p-6">
            <div class="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Competitive Pricing</h3>
            <p class="text-gray-600">Offering competitive rates and free consultations to help you achieve your flooring vision within budget.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Recent Projects</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our recent flooring installations and transformations.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(project, index) in projects.slice(0, 6)" 
            :key="index" 
            class="group relative cursor-pointer"
            @click="openModal(index)"
          >
            <div class="relative h-64 rounded-lg overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <div class="text-center text-white p-4">
                <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
                <p class="text-sm">{{ project.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <NuxtLink
            to="/gallery"
            class="inline-flex items-center text-gray-900 font-semibold hover:text-gray-700"
          >
            View All Projects
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Image Modal -->
    <ImageModal
      :is-open="isModalOpen"
      :images="projects"
      :initial-index="selectedImageIndex"
      @close="closeModal"
    />

    <!-- Testimonials Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Read testimonials from our satisfied customers who have experienced our professional flooring services.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(testimonial, index) in testimonials.slice(0, 3)" :key="index" class="bg-white rounded-lg shadow-lg p-6">
            <div class="flex items-center mb-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                  <span class="text-xl font-semibold text-white">{{ testimonial.name[0] }}</span>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-gray-900">{{ testimonial.name }}</h3>
                <p class="text-gray-600">{{ testimonial.location }}</p>
              </div>
            </div>
            
            <div class="flex mb-4">
              <svg v-for="star in 5" :key="star" class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>

            <p class="text-gray-600 italic">"{{ testimonial.content }}"</p>
            
            <div class="mt-4 text-sm text-gray-500">
              {{ testimonial.project }}
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <NuxtLink
            to="/testimonials"
            class="inline-flex items-center text-gray-900 font-semibold hover:text-gray-700"
          >
            View All Testimonials
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-6">Ready to Transform Your Space?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today for a free consultation. We're here to help bring your flooring vision to life with our expert services across Kent.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:07807613063"
            class="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Call 07807 613063
          </a>
          <NuxtLink
            to="/contact"
            class="bg-transparent border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors"
          >
            Contact Form
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isModalOpen = ref(false)
const selectedImageIndex = ref(0)

const openModal = (index) => {
  selectedImageIndex.value = index
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Residential Client',
    content: 'The team at Longfield Flooring did an exceptional job installing hardwood floors in our home. Their attention to detail and professionalism was outstanding.',
    project: 'Hardwood Floor Installation'
  },
  {
    name: 'Michael Chen',
    location: 'Commercial Client',
    content: 'We hired Longfield Flooring for our office renovation, and they exceeded our expectations. The project was completed on time and within budget.',
    project: 'Commercial Office Renovation'
  },
  {
    name: 'Emily Rodriguez',
    location: 'Residential Client',
    content: 'The quality of work and customer service was excellent. They helped us choose the perfect flooring for our kitchen renovation.',
    project: 'Kitchen Tile Installation'
  }
]

const projects = [
  {
    title: 'Modern Hardwood Installation',
    description: 'Luxury hardwood flooring in a contemporary home',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=60'
  },
  {
    title: 'Kitchen Tile Renovation',
    description: 'Elegant ceramic tile installation in a modern kitchen',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=60'
  },
  {
    title: 'Laminate Living Room',
    description: 'Durable laminate flooring in a family home',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=60'
  },
  {
    title: 'Bathroom Vinyl',
    description: 'Waterproof vinyl flooring in a master bathroom',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=60'
  },
  {
    title: 'Commercial Office Space',
    description: 'Professional flooring installation in a corporate office',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=60'
  },
  {
    title: 'Outdoor Decking',
    description: 'Composite decking installation for outdoor living space',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=60'
  }
]
</script> 
