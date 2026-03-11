<script setup>
defineProps({
  menuItems: {
    type: Array,
    required: true
  }
})
</script>


<template>
    <!-- Hero Section -->
    <section
        class="bg-[url(assets/mobile/image-hero.jpg)] bg-no-repeat bg-cover md:bg-[url(assets/desktop/image-hero.jpg)] md:bg-no-repeat md:bg-cover">

        <div class="container max-w-6xl mx-auto px-6 py-12">
            <nav class="flex items-center justify-between font-bold text-white">
                <img src="../assets/logo.svg" alt="Loopstudios Logo">
                <!-- Menu -->
                <div class="hidden h-10 font-sans md:flex md:space-x-8">
                    <div v-for="item in menuItems" :key="item.name" class="group">
                       <a :href="item.link">{{ item.name }}</a>
                        <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                    </div>
                </div>
            </nav>
        </div>
    </section>
</template>

<style scoped></style>