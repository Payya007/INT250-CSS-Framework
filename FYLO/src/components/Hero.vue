<script setup>
import { ref, computed } from 'vue'
import illustrationIntro from '../Assets/illustration-intro.png'
import bgCurvyDarkMode from '../Assets/bg-curvy-dark-mode.svg'
import bgCurvyLightMode from '../Assets/bg-curvy-light-mode.svg'

const isDarkMode = ref(document.documentElement.classList.contains('dark'))

const bgImage = computed(() => {
  return isDarkMode.value ? bgCurvyDarkMode : bgCurvyLightMode
})
</script>

<template>
  <!-- กำหนด Layout ให้อยู่ตรงกลางหน้าจอ และเว้นระยะห่าง (Padding) -->
  <section id="hero" class="container mx-auto px-6 pt-24 pb-12 text-center bg-no-repeat bg-bottom relative">
    
    <!-- ส่วนรูปภาพหลัก (อยู่ตรงกลาง) -->
    <div class="flex justify-center mb-8 w-full">
      <img
        :src="illustrationIntro"
        alt="Illustration of people organizing files"
        class="w-full max-w-2xl h-auto"
      />
    </div>

    <!-- ส่วนข้อความ -->
    <div class="max-w-3xl mx-auto space-y-6">
      <h1 class="text-3xl md:text-5xl font-bold leading-tight font-sans">
        All your files in one secure location, accessible anywhere.
      </h1>
      
      <p class="text-sm md:text-lg text-gray-800 dark:text-gray-200">
        Fylo stores all your most important files in one secure location. 
        Access them wherever you need, share and collaborate with friends family, and co-workers.
      </p>
      
      <!-- ปุ่ม Get Started (ใช้ class .btn-primary จาก style.css) -->
      <button class="btn-primary w-full md:w-auto mt-6">
        Get Started
      </button>
    </div>
  </section>
</template>

<style scoped>
#hero {
  background-image: v-bind('`url(${bgImage})`');
  background-position: bottom;
  background-repeat: no-repeat;
}
</style>
