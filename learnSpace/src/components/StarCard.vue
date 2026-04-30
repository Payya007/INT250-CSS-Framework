<script setup>
defineProps({
  label: String,
  value: [String, Number]
});
</script>

<template>
  <div class="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <p class="mb-2 text-sm font-medium text-slate-500 dark:text-slate-400">{{ label }}</p>
    <h3 class="text-3xl font-bold text-slate-900 dark:text-white">{{ value }}</h3>
  </div>
</template>
