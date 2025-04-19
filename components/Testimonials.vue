<template>
  <section :class="['py-20 scroll-mt-[40px]', $attrs.class]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Read testimonials from our satisfied customers who have experienced our professional electrical services.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(testimonial, index) in testimonials.slice(0, 3)" :key="index" class="bg-white rounded-lg shadow-lg p-6">
            <div class="flex items-center mb-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 rounded-full overflow-hidden">
                  <img :src="testimonial.image" :alt="testimonial.name" class="w-full h-full object-cover"/>
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
          <!-- Additional testimonial for tablet only -->
          <div class="bg-white rounded-lg shadow-lg p-6 md:block hidden lg:hidden">
            <div class="flex items-center mb-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 rounded-full overflow-hidden">
                  <img :src="testimonials[3].image"  :alt="testimonials[3].name" class="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-gray-900">{{ testimonials[3].name }}</h3>
                <p class="text-gray-600">{{ testimonials[3].location }}</p>
              </div>
            </div>
            
            <div class="flex mb-4">
              <svg v-for="star in 5" :key="star" class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>

            <p class="text-gray-600 italic">"{{ testimonials[3].content }}"</p>
            
            <div class="mt-4 text-sm text-gray-500">
              {{ testimonials[3].project }}
            </div>
          </div>
        </div>

        <!-- Trust Badges -->
        <div class="flex flex-col md:flex-row justify-center items-center gap-8 mt-12">
          <div class="bg-white rounded-lg shadow-lg p-6 flex items-center gap-4">
            <img src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg"  alt="Trustpilot 4.5 Stars" class="h-12" />
            <div>
              <p class="text-gray-600">Rated 4.5/5 on</p>
              <img 
                src="https://cdn.trustpilot.net/brand-assets/4.1.0/logo-black.svg" 
                alt="Trustpilot" 
                class="h-6"
              />
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-6 flex items-center gap-4">
            <img  src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Checkatrade_Logo_2023.svg/512px-Checkatrade_Logo_2023.svg.png?20231107125905" alt="Checkatrade" class="h-12" />
            <div>
              <p class="text-gray-600">Rated 9.8/10 on</p>
              <p class="font-semibold text-gray-900">Checkatrade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script lang="ts" setup>
import { useSite } from '~/stores/site'
const site = useSite().site

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Residential Client',
    content: `The team at ${site?.name} did an exceptional job upgrading our home electrical system. Their attention to safety and professionalism was outstanding.`,
    project: 'Home Electrical Upgrade',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=60'
  },
  {
    name: 'Michael Chen',
    location: 'Commercial Client',
    content: `We hired ${site?.name} for our office electrical needs, and they exceeded our expectations. The project was completed on time and within budget.`,
    project: 'Commercial Electrical Installation',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60'
  },
  {
    name: 'Emily Rodriguez',
    location: 'Residential Client',
    content: `The quality of work and customer service was excellent. ${site?.name} helped us install a new smart home system that works perfectly.`,
    project: 'Smart Home Installation',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=60'
  },
  {
    name: 'James Wilson',
    location: 'Residential Client',
    content: `${site?.name} provided a quick and efficient service for our emergency electrical repair. Their 24/7 availability was a lifesaver!`,
    project: 'Emergency Electrical Repair',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=60'
  }
]
</script>
