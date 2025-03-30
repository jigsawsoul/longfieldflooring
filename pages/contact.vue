<template>
  <div class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Get in touch with us for a free consultation and estimate. We're here to help with all your flooring needs.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div>
          <div class="bg-gray-50 rounded-lg p-8">
            <h2 class="text-2xl font-semibold mb-6">Get in Touch</h2>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">Phone</h3>
                  <p class="mt-1 text-gray-600">
                    <a href="tel:07807613063" class="hover:text-gray-900">07807 613063</a>
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">Email</h3>
                  <p class="mt-1 text-gray-600">
                    <a href="mailto:info@longfieldflooring.com" class="hover:text-gray-900">info@longfieldflooring.com</a>
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">Address</h3>
                  <p class="mt-1 text-gray-600">
                    123 Floor Street<br />
                    City, State 12345
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">Business Hours</h3>
                  <p class="mt-1 text-gray-600">
                    Monday - Friday: 7:00 AM - 5:00 PM<br />
                    Saturday: Closed<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
</template> 
