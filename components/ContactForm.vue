<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
          placeholder="Your name"
        />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
          placeholder="your@email.com"
        />
      </div>
    </div>

    <div>
      <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
      <input
        id="phone"
        v-model="form.phone"
        type="tel"
        required
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
        placeholder="Your phone number"
      />
    </div>

    <div>
      <label for="service" class="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
      <select
        id="service"
        v-model="form.service"
        required
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors bg-white"
      >
        <option value="">Select a service</option>
        <option value="carpet">Carpet Fitting</option>
        <option value="vinyl">Vinyl Installation</option>
        <option value="laminate">Laminate Flooring</option>
        <option value="lvt">LVT Installation</option>
        <option value="subfloor">Subfloor Preparation</option>
        <option value="other">Other</option>
      </select>
    </div>

    <div>
      <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
      <textarea
        id="message"
        v-model="form.message"
        rows="4"
        required
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors resize-none"
        placeholder="Tell us about your project..."
      ></textarea>
    </div>

    <div>
      <button
        type="submit"
        class="w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
        :disabled="isSubmitting"
      >
        {{ isSubmitting ? 'Sending...' : 'Send Message' }}
      </button>
    </div>
  </form>

  <div v-if="submitStatus" :class="['mt-4 p-4 rounded-md', submitStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700']">
    {{ submitStatus.message }}
  </div>
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
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    })

    if (!response.ok) {
      throw new Error('Failed to send message')
    }

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
    console.error('Error:', error)
    submitStatus.value = {
      type: 'error',
      message: 'Sorry, there was an error sending your message. Please try again.'
    }
  } finally {
    isSubmitting.value = false
  }
}
</script> 
