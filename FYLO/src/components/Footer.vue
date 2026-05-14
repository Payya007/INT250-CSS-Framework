<script setup>
import logoDarkMode from '../Assets/logo-dark-mode.svg'
import iconLocation from '../Assets/icon-location.svg'
import iconPhone from '../Assets/icon-phone.svg'
import iconEmail from '../Assets/icon-email.svg'
import facebook from '../Assets/facebook.svg'
import twitter from '../Assets/twitter.svg'
import instagram from '../Assets/instagram.svg'
</script>

<template>
  <footer class="bg-darkBlue-02 text-white pt-48 pb-12 px-6">
    <div class="container mx-auto">
      <!-- Logo -->
      <img :src="logoDarkMode" alt="Fylo" class="mb-10 w-32 md:w-40 h-auto" />

      <!-- Footer Content Row -->
      <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-12">

        <!-- Location Section -->
        <div class="flex items-start space-x-4 max-w-xs">
          <img :src="iconLocation" alt="Location" class="w-5 h-5 mt-1 flex-shrink-0" />
          <p class="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        <!-- Contact Info Section -->
        <div class="space-y-4 flex-shrink-0">
          <div class="flex items-center space-x-4">
            <img :src="iconPhone" alt="Phone" class="w-5 h-5 flex-shrink-0" />
            <p>+1-543-123-4567</p>
          </div>
          <div class="flex items-center space-x-4">
            <img :src="iconEmail" alt="Email" class="w-5 h-5 flex-shrink-0" />
            <p>example@fylo.com</p>
          </div>
        </div>

        <!-- Links Section -->
        <div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-12">
          <div class="flex flex-col space-y-4">
            <a href="#" class="hover:text-accent-cyan transition-colors">About Us</a>
            <a href="#" class="hover:text-accent-cyan transition-colors">Jobs</a>
            <a href="#" class="hover:text-accent-cyan transition-colors">Press</a>
            <a href="#" class="hover:text-accent-cyan transition-colors">Blog</a>
          </div>
          <div class="flex flex-col space-y-4">
            <a href="#" class="hover:text-accent-cyan transition-colors">Contact Us</a>
            <a href="#" class="hover:text-accent-cyan transition-colors">Terms</a>
            <a href="#" class="hover:text-accent-cyan transition-colors">Privacy</a>
          </div>
        </div>

        <!-- Social Icons -->
        <div class="flex space-x-4 md:justify-start">
          <a href="#" class="border border-white rounded-full p-2 hover:text-accent-cyan hover:border-accent-cyan transition-colors inline-flex items-center justify-center">
            <img :src="facebook" alt="Facebook" class="w-5 h-5" />
          </a>
          <a href="#" class="border border-white rounded-full p-2 hover:text-accent-cyan hover:border-accent-cyan transition-colors inline-flex items-center justify-center">
            <img :src="twitter" alt="Twitter" class="w-5 h-5" />
          </a>
          <a href="#" class="border border-white rounded-full p-2 hover:text-accent-cyan hover:border-accent-cyan transition-colors inline-flex items-center justify-center">
            <img :src="instagram" alt="Instagram" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
