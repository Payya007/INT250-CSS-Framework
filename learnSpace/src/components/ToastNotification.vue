<script setup>
defineProps({
  show: Boolean,
  message: String
});
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out translate-y-10 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-10 opacity-0"
  >
    <div v-if="show" class="fixed bottom-6 right-6 z-[100]">
      <div class="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-2xl border border-emerald-100 dark:bg-slate-800 dark:border-emerald-900/30">
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p class="font-bold text-slate-900 dark:text-white">Success!</p>
          <p class="text-sm text-slate-500 dark:text-slate-400">{{ message }}</p>
        </div>
      </div>
    </div>
  </Transition>
</template>
