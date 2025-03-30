<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <!-- Background overlay -->
    <div class="fixed inset-0 bg-black bg-opacity-75 transition-opacity" @click="closeModal"></div>

    <!-- Modal panel -->
    <div class="flex min-h-full items-center justify-center p-4 text-center">
      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
        <!-- Close button -->
        <button
          @click="closeModal"
          class="absolute right-4 top-4 z-10 rounded-full bg-white p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
        >
          <span class="sr-only">Close</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Navigation buttons -->
        <button
          v-if="currentIndex > 0"
          @click="previousImage"
          class="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
        >
          <span class="sr-only">Previous</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          v-if="currentIndex < images.length - 1"
          @click="nextImage"
          class="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
        >
          <span class="sr-only">Next</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        <!-- Image container -->
        <div class="relative aspect-w-16 aspect-h-9">
          <img
            :src="currentImage.image"
            :alt="currentImage.title"
            class="w-full h-full object-contain"
          />
        </div>

        <!-- Image info -->
        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <h3 class="text-xl font-semibold leading-6 text-gray-900">{{ currentImage.title }}</h3>
              <p class="mt-2 text-sm text-gray-500">{{ currentImage.description }}</p>
              <p class="mt-2 text-sm text-gray-500">Image {{ currentIndex + 1 }} of {{ images.length }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  images: {
    type: Array,
    required: true
  },
  initialIndex: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['close'])

const currentIndex = ref(props.initialIndex)
const currentImage = computed(() => props.images[currentIndex.value])

const closeModal = () => {
  emit('close')
}

const nextImage = () => {
  if (currentIndex.value < props.images.length - 1) {
    currentIndex.value++
  }
}

const previousImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

// Handle keyboard navigation
const handleKeydown = (event) => {
  if (!props.isOpen) return

  if (event.key === 'ArrowRight') {
    nextImage()
  } else if (event.key === 'ArrowLeft') {
    previousImage()
  } else if (event.key === 'Escape') {
    closeModal()
  }
}

// Add and remove event listener
onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script> 
