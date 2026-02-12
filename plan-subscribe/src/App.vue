<script setup>
import Plan from './components/Plan.vue'
</script>

<template>
  <div class="flex gap-6 pt-20 max-w-5xl  ml-auto  mr-auto items-center justify-center">
  <Plan planName="BASIC" Size="100GB" Price="$1.99/month" storage="100GB"/>
  <Plan planName="STANDARD" Size="200GB" Price="$3.99/month" storage="200GB"/>
  <Plan planName="PREMIUM" Size="2TB" Price="$8.99/month" storage="200GB"/>
  </div>
</template>

<style scoped></style>
