<template>
    <nav class="w-screen px-[80px] py-[26px] fixed flex justify-between bg-white z-50 border-b-2">
        <div class="flex items-center">
            <img src="/images/Logo-Ipsum.png" alt="">
        </div>
        <ul class="flex justify-center items-center mb-0 gap-20 text-lg font-semibold">
            <router-link to="/to-do">To Do</router-link>
            <router-link to="/pizza">Pizza</router-link>
        </ul>
        <div class="flex gap-4 items-center">
            <img class="rounded-full w-10 h-10" src="/images/bali-img.png" alt="">
            <p class="text-lg font-semibold">
                User 123456
            </p>
        </div>
    </nav>
</template>