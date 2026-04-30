<script setup>
defineProps({
  course: Object
});
defineEmits(['view-detail', 'submit-assignment']);
</script>

<template>
  <div class="group relative flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
    <div class="mb-4 flex items-center justify-between">
      <span class="inline-block rounded-full bg-indigo-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
        {{ course.code }}
      </span>
      <span class="rounded-full bg-orange-100 px-3 py-1 text-[10px] font-bold text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
        {{ course.status }}
      </span>
    </div>

    <h3 class="mb-2 text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">
      {{ course.title }}
    </h3>
    <p class="mb-6 flex-grow text-sm leading-relaxed text-slate-500 dark:text-slate-400">
      {{ course.shortDescription }}
    </p>

    <div class="mb-6">
      <div class="mb-2 flex justify-between text-xs font-medium">
        <span class="text-slate-500">Progress</span>
        <span class="text-slate-900 dark:text-white font-bold">{{ course.progress }}%</span>
      </div>
      <div class="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
        <div class="h-full bg-indigo-600 transition-all duration-500" :style="{ width: course.progress + '%' }"></div>
      </div>
    </div>

    <div class="flex gap-3">
      <button 
        @click="$emit('view-detail', course)"
        class="flex-1 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-indigo-700 shadow-sm shadow-indigo-100 dark:shadow-none"
      >
        View Course Details
      </button>
      <button 
        @click="$emit('submit-assignment', course)"
        class="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
      >
        Submit Assignment
      </button>
    </div>
  </div>
</template>
