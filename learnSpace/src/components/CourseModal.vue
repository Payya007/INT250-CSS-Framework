<script setup>
import { onMounted, onUnmounted } from 'vue';

const props = defineProps({
  isOpen: Boolean,
  course: Object
});

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};

const handleKeyDown = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    closeModal();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div @click="closeModal" class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
      
      <div class="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl transition-all dark:bg-slate-800">
        <div class="flex items-center justify-between border-b border-slate-100 p-4 dark:border-slate-700">
          <h3 class="text-xl font-bold text-slate-900 dark:text-white">{{ course.title }}</h3>
          <button @click="closeModal" class="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="p-6">
          <div class="mb-4">
            <span class="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
              {{ course.code }}
            </span>
          </div>
          <p class="text-slate-600 dark:text-slate-300">
            {{ course.description || 'Learn how to build responsive and interactive web applications using Vue.js and Tailwind CSS.' }}
          </p>
          
          <div class="mt-6 space-y-4">
            <div>
              <div class="mb-2 flex justify-between text-sm">
                <span class="font-medium text-slate-700 dark:text-slate-300">Progress</span>
                <span class="text-indigo-600 dark:text-indigo-400 font-bold">{{ course.progress }}%</span>
              </div>
              <div class="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
                <div class="h-full bg-indigo-600 transition-all duration-500" :style="{ width: course.progress + '%' }"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-slate-50 p-4 flex justify-end gap-3 dark:bg-slate-800/50">
          <button @click="closeModal" class="rounded-xl px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-700">
            Close
          </button>
          <button class="rounded-xl bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700 shadow-md shadow-indigo-200 dark:shadow-none">
            Go to Course
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>
