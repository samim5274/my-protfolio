<template>
    <section class="text-white mt-20 container mx-auto" id="service">
        <div class="px-4 xl:pl-16">
            <h2 class=" text-4xl font-bold text-white mb-4">My Service</h2>
        </div>
        <div class="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
            <div v-for="service in services" :key="service.id" data-aos="fade-up" class="px-8 py-12 rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]">
                <div class="mx-auto h-24 text-center xl:h-28 xl:w-28">
                    <div>
                        <i :class="service.icon + ' text-6xl mb-3'"></i>
                    </div>
                </div>
                <div class="text-center">
                    <h3 class="pt-8 text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-green-500 lg:text-xl">{{ service.name }}</h3>
                    <p class=" text-gray-50 pt-4 text-sm group-hover:text-white md:text-base">{{ service.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {ref} from 'vue'
const services = ref([
    {
        id:1,
        icon: 'fa-solid fa-code',
        name: 'Web Developement',
        description: 'Web development is creating, building, and maintaining websites or web applications using frontend and backend technologies.',
    },
    {
        id:2,
        icon: 'fa-solid fa-screwdriver-wrench',
        name: 'Software Development',
        description: 'Software development is the process of designing, coding, testing, and maintaining programs or applications for computers.',
    },
    {
        id:3,
        icon: 'fa-solid fa-database',
        name: 'Database Engineer',
        description: 'A database is an organized collection of data stored electronically, allowing efficient storage, retrieval, and management.',
    },
    {
        id:4,
        icon: 'fa-solid fa-pen-nib',
        name: 'Graphic Design',
        description: 'Graphics refers to visual images or designs created digitally or manually to communicate information or enhance visual appeal.',
    },
    {
        id:5,
        icon: 'fa-brands fa-edge',
        name: 'Web Design',
        description: 'Web design is the process of planning and creating the visual layout, user interface, and overall look of websites.',
    },
    {
        id:6,
        icon: 'fa-solid fa-user-secret',
        name: 'Cyber Security',
        description: 'Cybersecurity is the practice of protecting computers, networks, and data from unauthorized access, attacks, or damage.',
    },
]);
</script>

<style>

</style>