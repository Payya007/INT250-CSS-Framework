<script setup>
import { computed, reactive, ref } from "vue";
// import BaseInput from "./Components/BaseInput.vue";
// import BaseSelect from "./Components/BaseSelect.vue";
// import BaseTextarea from "./Components/BaseTextarea.vue";
// import BaseRadioGroup from "./Components/BaseRadioGroup.vue";
// import BaseCheckbox from "./Components/BaseCheckbox.vue";

const form = reactive({
  fullName: "",
  studentId: "",
  email: "",
  password: "",
  program: "",
  yearLevel: "",
  bio: "",
  track: "",
  agree: false,
})

const submitted = ref(false)

const programOptions = [
  { label: "Computer Science", value: "CS" },
  { label: "Digital Service Innovation", value: "DSI" },
  { label: "Information Technology", value: "IT" },
  { label: "Software Engineering", value: "SE" },
]

const trackOptions = [
  { label: "Frontend UI Development", value: "frontend" },
  { label: "Backend API Design", value: "backend" },
  { label: "UX/UI Design", value: "ux" },
  { label: "AI for Productivity", value: "ai" },
]

const yearOptions = [
  { label: "Year 1", value: "1" },
  { label: "Year 2", value: "2" },
  { label: "Year 3", value: "3" },
  { label: "Year 4", value: "4" },
]

const errors = computed(() => {
  const e = {}

  if (!form.fullName.trim()) e.fullName = "Full name is required."

  if (!form.studentId.trim()) {
    e.studentId = "Student ID is required."
  } else if (!/^\d{11}$/.test(form.studentId)) {
    e.studentId = "Student ID must be 10 digits."
  }

  if (!form.email.trim()) {
    e.email = "Email is required."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    e.email = "Please enter a valid email address."
  }

  if (!form.password.trim()) {
    e.password = "Password is required."
  } else if (form.password.length < 8) {
    e.password = "Password must be at least 8 characters."
  }

  if (!form.program) e.program = "Please select your program."
  if (!form.yearLevel) e.yearLevel = "Please select your year level."
  if (!form.track) e.track = "Please choose a workshop track."
  if (!form.agree) e.agree = "You must accept the terms before submitting."

  return e
})

const isFormValid = computed(() => Object.keys(errors.value).length === 0)

function handleSubmit() {
  submitted.value = true

  if (!isFormValid.value) return

  alert("Registration submitted successfully!")

  form.fullName = ""
  form.studentId = ""
  form.email = ""
  form.password = ""
  form.program = ""
  form.yearLevel = ""
  form.bio = ""
  form.track = ""
  form.agree = false
  submitted.value = false
}
</script>
<template>
  <div class="min-h-screen bg-slate-100 py-10 px-4">
    <div class="mx-auto max-w-4xl">
      <div class="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200">
        <div class="border-b border-slate-200 bg-slate-50 px-6 py-5">
          <p class="text-sm font-medium text-blue-600">Hands-on Lab</p>
          <h1 class="mt-1 text-2xl font-bold text-slate-900">
            Student Workshop Registration Form
          </h1>
          <p class="mt-2 text-sm text-slate-600">
            Practice styling form controls, focus states, and validation
            feedback
            with Vue.js and Tailwind CSS
          </p>
        </div>

        <form class="p-6 md:p-8">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-1">
            <div class="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row ">
              <p class="text-sm text-slate-500">
                <span class="text-sm text-slate-500">Tip: </span>
                Try submitting with empy fields to test validation feedback.
              </p>

              <button type="submit" :disabled="!form.agree"
                class="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-slate-300">
                Submit Registration
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<style scoped></style>