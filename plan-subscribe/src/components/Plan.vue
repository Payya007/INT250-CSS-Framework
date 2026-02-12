<script setup>
defineProps([
    "planName",
    "Size",
    "Price",
    "storage"
])
</script>

<template>
    <div class="bg-slate-800 border border-slate-600 rounded-2xl max-w-sm  bg-slate-800 border border-slate-600 rounded-2xl max-w-sm
         bg-slate-800 border border-slate-600 rounded-2xl max-w-sm
         transition-all duration-300
         hover:ring-8 hover:ring-purple-600">

        <div class="text-white flex flex-col items-center text-center px-8 pt-10 pb-8">

            <p class="text-sm tracking-widest text-gray-300 uppercase">
                {{ planName }}
            </p>

            <p class="text-5xl font-serif mt-6">
                {{ Size }}
            </p>

            <p class="text-gray-300 mt-2">
                {{ Price }}
            </p>

            <button
                class="mt-8 px-6 py-3 rounded-lg border border-purple-500 text-white hover:bg-purple-600 transition">
                Purchase
            </button>

        </div>

        <div class="border-t border-slate-600"></div>

        <div class="text-white px-8 py-8 space-y-4 text-sm">
            <p>✔ {{ storage }} storage</p>
            <p>✔ Option to add members</p>
            <p>✔ Extra member benefits</p>
        </div>

    </div>
</template>
