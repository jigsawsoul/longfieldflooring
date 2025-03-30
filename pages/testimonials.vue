<template>
  <div class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Read testimonials from our satisfied customers who have experienced our professional flooring services.
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-white rounded-lg shadow-lg p-6">
          <div class="flex items-center mb-4">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span class="text-xl font-semibold text-gray-600">{{ testimonial.name[0] }}</span>
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

      <!-- CTA Section -->
      <div class="mt-16 text-center">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Space?</h2>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join our satisfied customers and experience the difference of professional flooring services.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:5551234567"
            class="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Call Now
          </a>
          <NuxtLink
            to="/contact"
            class="bg-transparent border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors"
          >
            Get a Quote
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
  },
  {
    name: 'David Thompson',
    location: 'Residential Client',
    content: 'Professional, punctual, and perfect execution. The team was very knowledgeable and helped us make informed decisions.',
    project: 'Laminate Flooring Installation'
  },
  {
    name: 'Lisa Anderson',
    location: 'Residential Client',
    content: 'Outstanding service from start to finish. The team was courteous, clean, and completed the work ahead of schedule.',
    project: 'Bathroom Vinyl Installation'
  },
  {
    name: 'Robert Wilson',
    location: 'Commercial Client',
    content: 'Longfield Flooring transformed our retail space with beautiful flooring. Their expertise and attention to detail made all the difference.',
    project: 'Retail Store Renovation'
  }
]
</script> 
