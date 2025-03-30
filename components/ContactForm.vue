<template>
  <form @submit.prevent="handleSubmit" class="max-w-lg mx-auto">
    <div class="space-y-6">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
        />
      </div>

      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
        <input
          type="tel"
          id="phone"
          v-model="form.phone"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
        />
      </div>

      <div>
        <label for="service" class="block text-sm font-medium text-gray-700">Service Needed</label>
        <select
          id="service"
          v-model="form.service"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
        >
          <option value="">Select a service</option>
          <option value="installation">New Installation</option>
          <option value="repair">Repair</option>
          <option value="maintenance">Maintenance</option>
          <option value="consultation">Consultation</option>
        </select>
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          rows="4"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          :disabled="isSubmitting"
          class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-50"
        >
          {{ isSubmitting ? 'Sending...' : 'Send Message' }}
        </button>
      </div>
    </div>

    <div v-if="submitStatus" :class="['mt-4 p-4 rounded-md', submitStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700']">
      {{ submitStatus.message }}
    </div>
  </form>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref(null)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = null

  try {
    // Here you would typically send the form data to your backend
    // For now, we'll simulate a successful submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    submitStatus.value = {
      type: 'success',
      message: 'Thank you for your message! We will get back to you soon.'
    }
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    }
  } catch (error) {
    submitStatus.value = {
      type: 'error',
      message: 'Sorry, there was an error sending your message. Please try again.'
    }
  } finally {
    isSubmitting.value = false
  }
}
</script> 
