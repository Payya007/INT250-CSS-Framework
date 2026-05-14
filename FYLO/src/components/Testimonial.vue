<script setup>
import { ref, computed } from 'vue'
import bgQuotes from '../Assets/bg-quotes.png'
import bgCurvyDarkMode from '../Assets/bg-curvy-dark-mode.svg'
import bgCurvyLightMode from '../Assets/bg-curvy-light-mode.svg'
import profile1 from '../Assets/profile-1.jpg'
import profile2 from '../Assets/profile-2.jpg'
import profile3 from '../Assets/profile-3.jpg'

const isDarkMode = ref(document.documentElement.classList.contains('dark'))

const bgImage = computed(() => {
  return isDarkMode.value ? bgCurvyDarkMode : bgCurvyLightMode
})

const testimonials = ref([
  {
    name: 'Satish Patel',
    title: 'Founder & CEO, Huddle',
    quote: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    image: profile1
  },
  {
    name: 'Bruce McKenzie',
    title: 'Founder & CEO, Huddle',
    quote: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    image: profile2
  },
  {
    name: 'Iva Boyd',
    title: 'Founder & CEO, Huddle',
    quote: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    image: profile3
  }
])
</script>

<template>
  <section id="testimonials" class="py-24 bg-white dark:bg-darkBlue relative bg-no-repeat bg-bottom">
    <div class="container mx-auto px-6">
     
      <img :src="bgQuotes" alt="Quotes" class="absolute left-6 md:left-24 top-16 w-10 md:w-auto" />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        <div 
          v-for="testimonial in testimonials" 
          :key="testimonial.name"
          class="testimonial-card"
        >
          <p class="testimonial-quote">
            {{ testimonial.quote }}
          </p>
          <div class="flex items-center space-x-4">
            <img :src="testimonial.image" :alt="testimonial.name" class="w-10 h-10 rounded-full object-cover" />
            <div>
              <h4 class="testimonial-author-name">{{ testimonial.name }}</h4>
              <p class="testimonial-author-title">{{ testimonial.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#testimonials {
  background-image: v-bind('`url(${bgImage})`');
  background-position: bottom;
  background-repeat: no-repeat;
}
</style>
