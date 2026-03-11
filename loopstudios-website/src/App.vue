<script setup>
import Navbar from './components/Navbar.vue';
import {ref} from "vue";

const menuItems = ref([
  { name: "About", link: "#" },
  { name: "Careers", link: "#" },
  { name: "Events", link: "#" },
  { name: "Products", link: "#" },
  { name: "Supports", link: "#" },
])
</script>

<template>
  
  <Navbar :menu-items="menuItems"/>
</template>

<style scoped></style>
