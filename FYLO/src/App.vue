<script setup>
import Navbar from "./components/Navbar.vue"
import Hero from "./components/Hero.vue"
import Features from "./components/Features.vue"
import Productive from "./components/Productive.vue"
import FAQ from "./components/FAQ.vue"
import Testimonial from "./components/Testimonial.vue"
import EarlyAccess from "./components/EarlyAccess.vue"
import Footer from "./components/Footer.vue"
</script>

<template>
  <div class="min-h-screen w-full dark:bg-darkBlue dark:text-white font-opensans transition-colors duration-300 overflow-x-hidden">  
    <Navbar />
    <main>
      <Hero />
      <Features />
      <Productive />
      <Testimonial />
      <FAQ />
      <EarlyAccess />
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
