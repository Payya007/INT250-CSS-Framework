<script setup> 
defineProps([ 
    "profileimg",
    "background",
    "name",
    "subheading",
    "followers",
    "following",
    "projects",
    "instagram",
    "email",
    "github",
    
])
</script>

<template>
  <div class="bg-white shadow-lg rounded-2xl min-[320px] overflow-hidden text-center"> 
      
      <div class="relative min-h-32 bg-cover bg-center" :style="`background-image: url('${background}')`">
          <div class="absolute left-1/2 -bottom-12 -translate-x-1/2">
             <img :src="profileimg" class="w-24 h-24 rounded-full border-4 border-white object-cover">
          </div>
      </div>

      <div class="px-6 pt-16 pb-6">
          <h2 class="text-gray-800 text-2xl font-bold mb-2">{{ name || 'Name' }}</h2>
          <h3 class="text-gray-600 text-lg">{{ subheading || 'SubHeading' }}</h3>
      </div>
      <div class="flex justify-center gap-4 mb-2">
        <a v-if="instagram" :href="instagram" target="_blank" class="text-pink-600 hover:underline text-sm font-medium"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
        <a v-if="email" :href="`mailto:${email}`" class="text-red-500 hover:underline text-sm font-medium"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a>
        <a v-if="github" :href="github" target="_blank" class="text-gray-900 hover:underline text-sm font-medium"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>

      </div>
      <div class="p-6 border-t border-gray-200 flex items-center justify-center gap-6">
          <div>
              <h4 class="text-gray-600 text-sm">Followers</h4>
              <p class="font-bold text-gray-800 text-2xl">{{ followers }}</p>
          </div>
          <div>
              <h4 class="text-gray-600 text-sm">Following</h4>
              <p class="font-bold text-gray-800 text-2xl">{{ following }}</p>
          </div>
          <div>
              <h4 class="text-gray-600 text-sm">Project</h4>
              <p class="font-bold text-gray-800 text-2xl">{{ projects }}</p>
          </div>
      </div>
    

  </div> </template>