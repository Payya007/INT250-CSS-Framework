<script setup>
</script>
<template>
    <div class="flex items-center justify-center min-h-screen bg-zinc-700 p-4">
        <div class="bg-zinc-800 p-4 rounded-2xl shadow-2xl">
            <div class="flex flex-col md:flex-row items-center">
                <img src="../assets/pic.webp" alt="food"
                    class="object-cover rounded-xl h-64 w-full md:w-64 transform hover:scale-105 duration-300">

                <div class="text-white p-6 md:max-w-md">
                    <h2 class="text-xl font-semibold text-center md:text-left">Get diet and fitness tips</h2>
                    <p class="text-sm text-zinc-400 mt-4 text-center md:text-left">
                        Sign up for the Diet & Fitness newsletter.
                    </p>

                    <div class="flex flex-col mt-6 space-y-3 md:space-y-0 md:flex-row md:space-x-2">
                        <input type="text" placeholder="Enter email address"
                            class="flex-1 min-w-0 p-2 px-3 text-white bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:border-lime-500 text-sm">

                        <button
                            class="px-4 py-2 text-zinc-900 bg-lime-500 rounded-md font-bold hover:bg-lime-600 duration-300 whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>