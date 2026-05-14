<script setup>
import { ref } from 'vue'

const props = defineProps({
  question: String,
  answer: String
})

const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="border-b border-gray-200 dark:border-gray-700">
    <button 
      @click="toggle"
      class="w-full py-6 flex justify-between items-center text-left focus:outline-none"
      :aria-expanded="isOpen"
    >
      <span class="text-lg font-bold">{{ question }}</span>
      <svg 
        class="w-6 h-6 transition-transform duration-300" 
        :class="{ 'rotate-180': isOpen }"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div 
      v-show="isOpen"
      class="pb-6 transition-all duration-300"
    >
      <p class="text-gray-600 dark:text-gray-400">
        {{ answer }}
      </p>
    </div>
  </div>
</template>
