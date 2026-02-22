<template>
    <section id="about" class="text-white mt-18 container mx-auto">
        <div class="absolute z-0 to-[93rem] inset-x-0 h-64 flex items-start">
            <div class="h-24 w-64 bg-gradient-to-br from-[#A3D921] blur-2xl to-[#046425] opacity-20"></div>
        </div>
        <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-1">
            <div data-aos="flip-right">
                <h2 class="text-4xl font-bold text-white text-left mb-8">My Education</h2>
                <div class=" space-y-8 py-8">
                    <div v-for="element in education" :key="element.id" class="px-3 py-2 flex items-center md:w-[80%] w-full rounded-xl bg-[#111a3e] shadow-lg border border-[#2e5e20]">
                        <div class="w-1/4">
                            <img src="https://img.icons8.com/ios-glyphs/60/ffffff/graduation-cap--v1.png" alt="Graduation">
                        </div>
                        <div class=" w-3/4 pl-4">
                            <h3 class="text-2xl font-semibold uppercase text-transparent bg-gradient-to-r from-[#A3D921] to-[#046425] lg:text-xl bg-clip-text">
                                {{ element.School }}
                            </h3>
                            <p>{{ element.Program }}</p>
                            <p>{{ element.Year }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full" data-aos="flip-right">
                <h2 class=" text-4xl font-bold text-white md:text-center text-left mb-4"> More 
                    <span class=" text-transparent bg-clip-text bg-gradient-to-br from-[#A3D921] to-[#046425]">About </span> Me
                </h2>
                <p>Hi, I am <strong>SAMIM-HosseN</strong> a dedicated software engineering professional with strong problem-solving skills and a passion for building efficient, user-friendly applications. With a solid educational background in computer science and continuous learning, I aim to leverage technology to create impactful solutions while enhancing my expertise in modern development practices.</p>
                <div class="grid grid-cols-3 gap-4 max-w-lg pt-8">
                    <div class="text-center rounded-xl bg-[#111a3e] shadow-lg border-[#1f1641] p-3">
                        <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">20+</h3>
                        <p class="text-sm sm:text-base text-gray-300">Happy Client</p>
                    </div>
                    <div class="text-center rounded-xl bg-[#111a3e] shadow-lg border-[#1f1641] p-3">
                        <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">70+</h3>
                        <p class="text-sm sm:text-base text-gray-300">Project</p>
                    </div>
                    <div class="text-center rounded-xl bg-[#111a3e] shadow-lg border-[#1f1641] p-3">
                        <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">+6</h3>
                        <p class="text-sm sm:text-base text-gray-300">Experience</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {ref} from 'vue'
const education=ref([
    {
        id:1,
        School: 'City University',
        Program: 'Software Engineering',
        Year: '2025',
    },
    {
        id:2,
        School: 'Tangail Polytechnic Institute',
        Program: 'Computer Science Engineering',
        Year: '2021',
    },
    {
        id:3,
        School: 'Kaliakair Fazil Madrash',
        Program: 'Science',
        Year: '2017',
    },
]);
</script>

<style>

</style>