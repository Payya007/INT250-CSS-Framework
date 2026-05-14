<script setup>
import { ref } from 'vue'

const email = ref('')
const error = ref('')

function validateEmail() {
  const re = /\S+@\S+\.\S+/
  if (!re.test(email.value)) {
    error.value = 'Please enter a valid email address'
  } else {
    error.value = ''
    alert('Success! Thank you for signing up.')
  }
}
</script>

<template>
  <section id="early-access" class="relative px-6 pb-56">
    <div class="container mx-auto max-w-4xl bg-gray-50 dark:bg-darkBlue-01 p-10 md:p-16 rounded-lg text-center shadow-xl translate-y-1/2 relative z-20">
      <h2 class="text-2xl md:text-3xl font-bold mb-6">Get early access today</h2>
      <p class="mb-10 max-w-2xl mx-auto">
        It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
      </p>
      
      <form @submit.prevent="validateEmail" class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div class="flex-1 text-left">
          <input 
            v-model="email"
            type="text" 
            placeholder="email@example.com" 
            class="w-full px-8 py-3 rounded-full text-black focus:outline-none"
            :class="{ 'border-2 border-lightRed': error }"
          />
          <p v-if="error" class="text-lightRed text-xs italic mt-2 ml-8">{{ error }}</p>
        </div>
        <button class="btn-primary md:h-12">
          Get Started For Free
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped></style>
