<script setup>
import { ref, computed } from 'vue'
import FAQItem from './FAQItem.vue'
import bgCurvyDarkMode from '../Assets/bg-curvy-dark-mode.svg'
import bgCurvyLightMode from '../Assets/bg-curvy-light-mode.svg'

const isDarkMode = ref(document.documentElement.classList.contains('dark'))

const bgImage = computed(() => {
  return isDarkMode.value ? bgCurvyDarkMode : bgCurvyLightMode
})

const faqs = ref([
  {
    question: 'How can I access my files?',
    answer: 'You can access your files from any device with an internet connection by logging into your Fylo account.'
  },
  {
    question: 'Is my data secure with Fylo?',
    answer: 'Yes, we use 2-factor authentication and user-controlled encryption to ensure your data remains secure.'
  },
  {
    question: 'Can I share my files?',
    answer: 'Absolutely! You can securely share files and folders with anyone, and collaborate in real-time.'
  },
  {
    question: 'What types of files can I store?',
    answer: 'Fylo supports all file types, from photos and videos to documents and large work files.'
  }
])
</script>

<template>
  <section id="faq" class="py-24 bg-white dark:bg-darkBlue bg-no-repeat bg-bottom relative">
    <div class="container mx-auto px-6 max-w-4xl">
      <h2 class="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <div class="space-y-4">
        <FAQItem 
          v-for="faq in faqs" 
          :key="faq.question" 
          :question="faq.question" 
          :answer="faq.answer" 
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
#faq {
  background-image: v-bind('`url(${bgImage})`');
  background-position: bottom;
  background-repeat: no-repeat;
}
</style>
