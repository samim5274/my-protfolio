<template>
    <section id="skills" class="container mx-auto text-white mt-18">
        <div class="absolute right-0 to-[110rem] h-full w-full justify-end">
            <span class="flex opacity-20">
                <span class="w-16 h-32 rounded-l-full flex bg-[#A3D921] blur-2xl"></span>
                <span class="w-16 h-32 rounded-r-full flex bg-[#046425] blur-2xl mt-14"></span>
            </span>
        </div>
        <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16">
            <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full w-[80%]">
                <h2 class="text-4xl font-bold text-white text-left mb-4"> My
                    <span class=" text-transparent bg-clip-text bg-gradient-to-br from-[#A3D921] to-[#046425]">Skills</span>
                </h2>
                <div class=" mt-8" v-for="skill in skills" :key="skill.id">
                    <div class="flex items-end justify-between" data-aos="fade-right">
                        <h4 class="font-semibold uppercase text-white">
                            {{ skill.name }}
                        </h4>
                        <h3 class="text-2xl font-bold text-white">{{ skill.width }}</h3>
                    </div>
                    <div class=" mt-2 h-1 w-full bg-[#131d30] rounded-full" data-aos="fade-right">
                        <div class="h-1 rounded-full bg-[#A3D921]" :style="`width: ${skill.width}`"></div>
                    </div>
                </div>
            </div>
            <div data-aos="flip-left">
                <h2 class="text-4xl font-bold text-white text-left mb-8 md:text-center md:mt-0 mt-8">Experience</h2>
                <div v-for="val in experience" :key="val.id" class="flex items-center rounded-xl p-4 my-4 bg-[#111a3e] shadow-lg border-[#A3D921]">
                    <div class=" w-1/4">
                        <img src="https://img.icons8.com/ios-filled/100/ffffff/lawyer.png" alt="Lawyer">
                    </div>
                    <div class=" w-3/4 pl-4">
                        <h3 class=" text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-br from-[#A3D921] to-[#046425]">{{ val.role }}</h3>
                        <p class="text-white">{{ val.company }}</p>
                        <p class="text-white">{{ val.date }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {ref} from 'vue'
const skills=ref([
    {
        id:1,
        name: 'HTML & CSS',
        width: '85%'
    },
    {
        id:2,
        name: 'C#',
        width: '75%'
    },
    {
        id:2,
        name: 'PHP (Laravel 10)',
        width: '90%'
    },
    {
        id:4,
        name: 'Database',
        width: '98%'
    },
]);

const experience = ref([
    {
        id:1,
        role: 'Software Engineer',
        company: 'BGMIT',
        date: 'Augest-2024 to Till now',
    },
    {
        id:2,
        role: 'Jr.Software Developer',
        company: 'Deegau Textile PLC.',
        date: 'Augest-2022 to September-2024',
    },
    {
        id:3,
        role: 'Assis. Engineer',
        company: 'Dream Software Technology',
        date: 'November-2020 to September-2022',
    },
]);
</script>

<style>

</style>