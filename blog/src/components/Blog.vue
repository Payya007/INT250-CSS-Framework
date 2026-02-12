<template>
     <div class="max-w-5xl mx-auto px-6">         
        <div class="flex justify-end gap-6 p4 pr-0">
            <p>Vecter</p>
            <p>lllustrations</p>
            <p>images</p>
            <p>icons</p>
        </div>
        <div class="flex justify-between items-center mb-8 pt-10">
            <div class="relative w-1/3">
                <input type="text" placeholder="Search"
                    class="w-full border-b border-gray-200 py-2 pr-8 focus:outline-none placeholder-gray-400 pl-20">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-5 h-5 absolute right-0 top-1/2 -translate-y-1/2 text-gray-400">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>

            <button class="bg-black text-white px-8 py-2 rounded-md mr-0 " >Upload</button>
        </div>

       <div class="grid grid-cols-3 gap-3">
            <img src="../assets/pic1.png" class="w-full  object-cover " alt="">
            <img src="../assets/pic2.png" class="w-full object-cover" alt="">
            <img src="../assets/pic3.png" class="w-full object-cover" alt="">
            <img src="../assets/pic4.png" class="w-full  object-cover" alt="">
            <img src="../assets/pic5.png" class="w-full  object-cover" alt="">
            <img src="../assets/pic6.png" class="w-full  object-cover" alt="">
        </div>
    </div>
</template>