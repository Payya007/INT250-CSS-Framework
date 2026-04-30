<script setup>
import { ref } from 'vue';
import AppNavbar from "./components/AppNavbar.vue";
import StarCard from "./components/StarCard.vue";
import CourseCard from "./components/CourseCard.vue";
import CourseModal from "./components/CourseModal.vue";
import ToastNotification from "./components/ToastNotification.vue";

const stats = [
  { label: 'Active Courses', value: '3' },
  { label: 'Pending Assignments', value: '2' },
  { label: 'Completed Tasks', value: '8' },
  { label: 'Overall Progress', value: '72%' }
];

const courses = [
  {
    id: 1,
    code: 'INT250',
    title: 'CSS Framework',
    shortDescription: 'Learn how to build responsive and interactive web applications using Vue.js and Tailwind CSS.',
    progress: 72,
    status: 'In Progress',
    description: 'This course covers the fundamentals of modern CSS frameworks, with a deep dive into Tailwind CSS and Vue.js integration. You will learn about utility-first CSS, component architecture, and responsive design principles.'
  },
  {
    id: 2,
    code: 'INT161',
    title: 'Object-Oriented Programming',
    shortDescription: 'Practice Java programming, object-oriented design, and software development principles.',
    progress: 58,
    status: 'In Progress',
    description: 'Focus on Java and OOP concepts such as Inheritance, Polymorphism, Abstraction, and Encapsulation. Ideal for building a strong foundation in software engineering.'
  }
];

const isModalOpen = ref(false);
const selectedCourse = ref(null);
const showToast = ref(false);
const toastMessage = ref("");

const openCourseDetail = (course) => {
  selectedCourse.value = course;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const handleSubmitAssignment = (course) => {
  toastMessage.value = `Assignment for ${course.code} submitted successfully!`;
  showToast.value = true;
  setTimeout(() => {
    showToast.value = false;
  }, 3000);
};
</script>

<template>
  <div class="min-h-screen bg-slate-50/50 dark:bg-slate-950">
    <AppNavbar />

    <main class="mx-auto max-w-7xl px-6 py-8">
      <section class="relative mb-12 overflow-hidden rounded-[2rem] bg-indigo-600 px-8 py-12 text-white shadow-xl shadow-indigo-100 dark:shadow-none">
        <div class="relative z-10 max-w-2xl">
          <p class="mb-4 text-indigo-100 font-medium">Welcome back, Student 👋</p>
          <h2 class="mb-4 text-4xl font-bold leading-tight md:text-5xl">
            Continue your learning journey today.
          </h2>
          <p class="mb-8 text-lg text-indigo-100/80">
            Track your courses, review assignments, and monitor your learning progress in one place.
          </p>
          <button class="rounded-2xl bg-white px-8 py-4 font-bold text-indigo-600 transition hover:bg-indigo-50 shadow-lg shadow-black/5">
            View My Courses
          </button>
        </div>
        <div class="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
        <div class="absolute -bottom-20 right-20 h-60 w-60 rounded-full bg-indigo-400/20 blur-2xl"></div>
      </section>

      <div class="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StarCard 
          v-for="stat in stats" 
          :key="stat.label"
          :label="stat.label"
          :value="stat.value"
        />
      </div>

      <section>
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white">My Courses</h2>
          <p class="text-slate-500 dark:text-slate-400">Review your course progress and assignment status.</p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <CourseCard 
            v-for="course in courses" 
            :key="course.id"
            :course="course"
            @view-detail="openCourseDetail"
            @submit-assignment="handleSubmitAssignment"
          />
        </div>
      </section>
    </main>

    <CourseModal 
      :is-open="isModalOpen" 
      :course="selectedCourse" 
      @close="closeModal" 
    />

    <ToastNotification 
      :show="showToast" 
      :message="toastMessage" 
    />

    <footer class="mt-20 border-t border-slate-100 py-8 text-center text-sm text-slate-400 dark:border-slate-800">
      <div class="flex justify-center max-w-7xl mx-auto px-6">
        <span>LearnSpace Dashboard</span>
      </div>
    </footer>
  </div>
</template>

<style>
@import "tailwindcss";

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}
</style>
