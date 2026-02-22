<template>
    <section class="text-white mt-20 container mx-auto" id="services">
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
        id: 1,
        icon: "fa-solid fa-code",
        name: "Web Application Development",
        description:
        "I develop scalable and high-performance web applications using modern technologies like Vue.js and Laravel. Each solution is built with clean architecture, responsive design, and optimized performance to meet real-world business needs.",
    },
    {
        id: 2,
        icon: "fa-solid fa-layer-group",
        name: "Full Stack Development",
        description:
        "From frontend to backend and database integration, I provide complete end-to-end web solutions. I ensure seamless communication between UI, API, and database for a smooth user experience.",
    },
    {
        id: 3,
        icon: "fa-solid fa-display",
        name: "Frontend Development",
        description:
        "I create modern, interactive, and fully responsive user interfaces using Vue.js, Tailwind CSS, and JavaScript. My focus is on performance, usability, and clean UI design.",
    },
    {
        id: 4,
        icon: "fa-solid fa-server",
        name: "Backend Development",
        description:
        "I build secure and efficient backend systems with RESTful APIs, authentication, role-based access control, and database management to ensure reliability and scalability.",
    },
    {
        id: 5,
        icon: "fa-solid fa-database",
        name: "Software Maintenance & Optimization",
        description:
        "I design structured and optimized database systems with proper indexing, query optimization, and secure data handling to maintain performance and stability.",
    },
    {
        id: 6,
        icon: "fa-solid fa-plug",
        name: "API Integration & Real-Time Systems",
        description:
        "I integrate third-party services such as payment gateways, email services, and WebSocket-based real-time features to enhance application functionality and user engagement.",
    },
]);
</script>

<style>

</style>