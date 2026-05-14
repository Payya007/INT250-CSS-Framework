<script setup>
import { ref, computed } from 'vue'
import iconAccessAnywhere from '../Assets/icon-access-anywhere.svg'
import iconSecurity from '../Assets/icon-security.svg'
import iconCollaboration from '../Assets/icon-collaboration.svg'
import iconAnyFile from '../Assets/icon-any-file.svg'
import bgCurvyDarkMode from '../Assets/bg-curvy-dark-mode.svg'
import bgCurvyLightMode from '../Assets/bg-curvy-light-mode.svg'

const isDarkMode = ref(document.documentElement.classList.contains('dark'))

const bgImage = computed(() => {
  return isDarkMode.value ? bgCurvyDarkMode : bgCurvyLightMode
})

const features = ref([
  {
    title: 'Access your files, anywhere',
    description: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
    icon: iconAccessAnywhere
  },
  {
    title: 'Security you can trust',
    description: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
    icon: iconSecurity
  },
  {
    title: 'Real-time collaboration',
    description: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
    icon: iconCollaboration
  },
  {
    title: 'Store any type of file',
    description: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    icon: iconAnyFile
  }
])
</script>

<template>
  <!-- ใช้ class .features-section จาก style.css -->
  <section id="features" class="features-section pb-24 bg-no-repeat bg-bottom relative">
    <div class="features-container">
      
      <!-- ใช้ class .features-grid จาก style.css (1 คอลัมน์บนมือถือ, 2 บน Desktop) -->
      <div class="features-grid">
        
        <!-- วนลูปข้อมูล features ด้วย v-for -->
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          
          <div class="feature-icon-wrapper">
            <img :src="feature.icon" :alt="feature.title" class="h-16 w-auto mb-4" />
          </div>

          <h3 class="feature-title text-2xl font-bold mb-2">{{ feature.title }}</h3>
          <p class="feature-description text-center max-w-sm mx-auto">
            {{ feature.description }}
          </p>
          
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
#features {
  background-image: v-bind('`url(${bgImage})`');
  background-position: bottom;
  background-repeat: no-repeat;
}
</style>
