<script setup>
import { ref, computed } from 'vue'
import illustrationStayProductive from '../Assets/illustration-stay-productive.png'
import iconArrow from '../Assets/icon-arrow.svg'
import bgCurvyDarkMode from '../Assets/bg-curvy-dark-mode.svg'
import bgCurvyLightMode from '../Assets/bg-curvy-light-mode.svg'

const isDarkMode = ref(document.documentElement.classList.contains('dark'))

const bgImage = computed(() => {
  return isDarkMode.value ? bgCurvyDarkMode : bgCurvyLightMode
})
</script>

<template>
  <section id="productive" class="py-24 bg-white dark:bg-darkBlue bg-no-repeat bg-bottom relative">
    <div class="container mx-auto px-6 flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-12">
      <!-- Image -->
      <div class="md:w-1/2">
        <img :src="illustrationStayProductive" alt="Stay productive" class="w-full h-auto object-cover" />
      </div>

      <!-- Text -->
      <div class="md:w-1/2 space-y-6">
        <h2 class="text-3xl md:text-4xl font-bold leading-tight max-w-md">
          Stay productive, wherever you are
        </h2>
        <div class="space-y-4 text-gray-800 dark:text-gray-200">
          <p>
            Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
          </p>
        </div>

        <!-- Link -->
        <a href="#" class="inline-flex items-center space-x-2 text-accent-cyan border-b border-accent-cyan pb-1 hover:text-accent-blue hover:border-accent-blue transition-colors">
          <span>See how Fylo works</span>
          <img :src="iconArrow" alt="Arrow" class="w-5 h-5" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
#productive {
  background-image: v-bind('`url(${bgImage})`');
  background-position: bottom;
  background-repeat: no-repeat;
}
</style>
