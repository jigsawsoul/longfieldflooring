<template>
  <div class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Our Work</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Browse through our portfolio of completed flooring projects. We take pride in delivering exceptional results for every client.
        </p>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(project, index) in projects" 
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
    </div>

    <!-- Image Modal -->
    <ImageModal
      :is-open="isModalOpen"
      :images="projects"
      :initial-index="selectedImageIndex"
      @close="closeModal"
    />
  </div>
</template>

<script setup>
const isModalOpen = ref(false)
const selectedImageIndex = ref(0)

const openModal = (index) => {
  selectedImageIndex.value = index
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

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
