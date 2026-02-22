<template>
    <div class="bg-[#111827] min-h-screen">
        <Navbar />

        <section id="home" class="relative w-full" data-aos="zoom-in-up" data-aos-dely="300">
            <div class="absolute top-0 inset-x-0 h-64 flex items-start">
                <div class="h-24 w-2/3 bg-gradient-to-br from-[#578cac] blur-2xl invisible opacity-40"></div>
                <div class="h-24 w-2/3 bg-gradient-to-r from-[#578cac] blur-2xl invisible opacity-40"></div>
            </div>
            <div class="w-full px-5 sm:px-8 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
                <div class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
                    <div class="lg:py-6">
                        <div class="text-center lg:text-left">
                            <h1 class="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                                Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#A3D921] to-[#046425]">SAMIM-HosseN</span>                            
                            </h1>
                        </div>
                        
                        <p class="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl">Hi, I am <strong>SAMIM-HosseN</strong> a dedicated software engineering professional with strong problem-solving skills and a passion for building efficient, user-friendly applications. With a solid educational background in computer science and continuous learning, I aim to leverage technology to create impactful solutions while enhancing my expertise in modern development practices.</p>

                        <!-- <div class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
                            <button class="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
                                <span class="absolute inset-0 rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out bg-gradient-to-r from-[#A3D921] to-[#046425] border-2 border-transparent"></span>
                                <span class="relative flex items-center justify-center text-white">Get In Touch</span>
                            </button>
                            <button class="border border-[#A3D921] px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
                                <div class="hover:scale-105 transition-all ease-in-out flex justify-center items-center relative">
                                    <div class="svg-container text-[#A3D921]">
                                        <i class="fa-solid fa-download"></i>
                                        <div class="download-loader text-white hidden"></div>
                                    </div>
                                    <a href="/resume.pdf" download="resume.pdf" class="pl-2 text-[#A3D921]">Resume</a>
                                </div>
                            </button>
                        </div> -->
                    </div>
                    <div class="lg:py-6 lg:h-full md:flex">
                        <div class="flex w-full h-96 min-h-[24rem] lg:min-h-[none] lg:w-full lg:h-full items-center relative">
                            <div class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-tr opacity-25 from-[#570cac] to-[#A3D921] blur-2xl"></div>
                            <div class="absolute h-full z-10 p-2 -translate-y-1/2 top-1/2 lg:right-3 md:right-40 sm:right-16 rounded-full shadow-lg border border-[#A3D921]">
                                <!-- <img src="/img/samim-2.png" alt="samim-hossen" width="500" height="auto" loading="lazy" class=" w-full h-full rounded-full object-cover"> -->
                                <img src="/img/samim.jpg" alt="samim-hossen" width="500" height="auto" loading="lazy" class=" w-full h-full rounded-full object-cover">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="container mx-auto text-white mt-16">
            <h2 class="text-4xl font-bold mb-8">
                Why <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#A3D921] to-[#046425]">Choose Me?</span>
            </h2>

            <div class="grid md:grid-cols-3 gap-6">
                <div class="bg-[#111a3e] p-6 rounded-xl">
                <h3 class="text-xl font-semibold mb-3">Clean & Scalable Code</h3>
                <p class="text-gray-300">I write maintainable and optimized code that ensures long-term stability.</p>
                </div>

                <div class="bg-[#111a3e] p-6 rounded-xl">
                <h3 class="text-xl font-semibold mb-3">On-Time Delivery</h3>
                <p class="text-gray-300">I respect deadlines and ensure timely project completion.</p>
                </div>

                <div class="bg-[#111a3e] p-6 rounded-xl">
                <h3 class="text-xl font-semibold mb-3">Client Communication</h3>
                <p class="text-gray-300">Clear communication and transparency in every stage of development.</p>
                </div>
            </div>
        </section>

        <section id="tech" class="container mx-auto text-white mt-18 px-4 xl:px-16">
            <h2 class="text-4xl font-bold mb-8">
                Tech
                <span class="text-transparent bg-clip-text bg-gradient-to-br from-[#A3D921] to-[#046425]">
                Stack
                </span>
            </h2>

            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                <div class="flex items-center gap-3 p-4 rounded-xl bg-[#111a3e] shadow-lg border border-[#2e5e20]">
                <img class="w-10 h-10" src="https://img.icons8.com/fluency/96/laravel.png" alt="Laravel" />
                <div>
                    <p class="font-semibold">Laravel</p>
                    <p class="text-sm text-gray-300">Backend</p>
                </div>
                </div>

                <div class="flex items-center gap-3 p-4 rounded-xl bg-[#111a3e] shadow-lg border border-[#2e5e20]">
                <img class="w-10 h-10" src="https://img.icons8.com/color/96/vue-js.png" alt="Vue" />
                <div>
                    <p class="font-semibold">Vue.js</p>
                    <p class="text-sm text-gray-300">Frontend</p>
                </div>
                </div>

                <div class="flex items-center gap-3 p-4 rounded-xl bg-[#111a3e] shadow-lg border border-[#2e5e20]">
                <img class="w-10 h-10" src="https://img.icons8.com/color/96/javascript--v1.png" alt="JavaScript" />
                <div>
                    <p class="font-semibold">JavaScript</p>
                    <p class="text-sm text-gray-300">Core</p>
                </div>
                </div>

                <div class="flex items-center gap-3 p-4 rounded-xl bg-[#111a3e] shadow-lg border border-[#2e5e20]">
                <img class="w-10 h-10" src="https://img.icons8.com/color/96/tailwind_css.png" alt="Tailwind" />
                <div>
                    <p class="font-semibold">Tailwind CSS</p>
                    <p class="text-sm text-gray-300">UI</p>
                </div>
                </div>

                <div class="flex items-center gap-3 p-4 rounded-xl bg-[#111a3e] shadow-lg border border-[#2e5e20]">
                <img class="w-10 h-10" src="https://img.icons8.com/color/96/mysql-logo.png" alt="MySQL" />
                <div>
                    <p class="font-semibold">MySQL</p>
                    <p class="text-sm text-gray-300">Database</p>
                </div>
                </div>

                <div class="flex items-center gap-3 p-4 rounded-xl bg-[#111a3e] shadow-lg border border-[#2e5e20]">
                <img class="w-10 h-10" src="https://img.icons8.com/color/96/git.png" alt="Git" />
                <div>
                    <p class="font-semibold">Git</p>
                    <p class="text-sm text-gray-300">Version Control</p>
                </div>
                </div>

                <div class="flex items-center gap-3 p-4 rounded-xl bg-[#111a3e] shadow-lg border border-[#2e5e20]">
                <img class="w-10 h-10" src="https://img.icons8.com/color/96/api.png" alt="REST API" />
                <div>
                    <p class="font-semibold">REST API</p>
                    <p class="text-sm text-gray-300">Integration</p>
                </div>
                </div>

                <div class="flex items-center gap-3 p-4 rounded-xl bg-[#111a3e] shadow-lg border border-[#2e5e20]">
                <img class="w-10 h-10" src="https://img.icons8.com/color/96/docker.png" alt="Docker" />
                <div>
                    <p class="font-semibold">Docker</p>
                    <p class="text-sm text-gray-300">DevOps (Optional)</p>
                </div>
                </div>
            </div>
        </section>

        <section id="process" class="container mx-auto text-white mt-18 px-4 xl:px-16">
            <h2 class="text-4xl font-bold mb-8">
                Work
                <span class="text-transparent bg-clip-text bg-gradient-to-br from-[#A3D921] to-[#046425]">
                Process
                </span>
            </h2>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="p-6 rounded-xl bg-[#111a3e] shadow-lg border border-[#2e5e20]">
                <p class="text-sm text-gray-400 mb-2">Step 01</p>
                <h3 class="text-xl font-semibold mb-2">Requirement</h3>
                <p class="text-gray-300">We discuss your goals, features, and timeline clearly.</p>
                </div>

                <div class="p-6 rounded-xl bg-[#111a3e] shadow-lg border border-[#2e5e20]">
                <p class="text-sm text-gray-400 mb-2">Step 02</p>
                <h3 class="text-xl font-semibold mb-2">Planning</h3>
                <p class="text-gray-300">I plan architecture, database, and UI flow before coding.</p>
                </div>

                <div class="p-6 rounded-xl bg-[#111a3e] shadow-lg border border-[#2e5e20]">
                <p class="text-sm text-gray-400 mb-2">Step 03</p>
                <h3 class="text-xl font-semibold mb-2">Development</h3>
                <p class="text-gray-300">Build features with clean code and regular updates.</p>
                </div>

                <div class="p-6 rounded-xl bg-[#111a3e] shadow-lg border border-[#2e5e20]">
                <p class="text-sm text-gray-400 mb-2">Step 04</p>
                <h3 class="text-xl font-semibold mb-2">Delivery</h3>
                <p class="text-gray-300">Testing, deployment, and support after delivery.</p>
                </div>
            </div>
        </section>

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

                    <p class="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl">I am a dedicated Full Stack Web Developer with expertise in Laravel and Vue.js. I build high-performance web applications, admin dashboards, and API-driven systems that are secure, scalable, and easy to maintain.</p>
                    <p class="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl">Whether you need a custom business system, real-time functionality, or a responsive modern interface, I ensure quality, efficiency, and reliability in every project.</p>
                    <p class="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl">I am committed to understanding your requirements and delivering solutions that help your business grow.</p>

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

        <section id="certifications" class="container mx-auto text-white mt-18 px-4 xl:px-16">
            <h2 class="text-4xl font-bold mb-8">
                Certifications /
                <span class="text-transparent bg-clip-text bg-gradient-to-br from-[#A3D921] to-[#046425]">
                Courses
                </span>
            </h2>

            <div class="grid md:grid-cols-2 gap-4">
                <div class="p-6 rounded-xl bg-[#111a3e] shadow-lg border border-[#2e5e20]">
                <div class="flex items-start gap-4">
                    <img class="w-10 h-10" src="/img/certificate/Certificate-1.jpg" alt="Certificate" />
                    <div>
                    <h3 class="text-xl font-semibold">PHP Laravel: Build Real Estate Management SYstem</h3>
                    <p class="text-gray-300">Online Course • udemy.com</p>
                    <p class="text-sm text-gray-400 mt-2">Year: 2025</p>
                    </div>
                </div>
                </div>

                <div class="p-6 rounded-xl bg-[#111a3e] shadow-lg border border-[#2e5e20]">
                <div class="flex items-start gap-4">
                    <img class="w-10 h-10" src="/img/certificate/Certificate-2.jpg" alt="Certificate" />
                    <div>
                    <h3 class="text-xl font-semibold">Build E-Commerce Cash On Delivery in laravel 11</h3>
                    <p class="text-gray-300">Online Course • udemy.com</p>
                    <p class="text-sm text-gray-400 mt-2">Year: 2025</p>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <section class="text-center py-16">
            <h2 class="text-3xl font-bold text-white mb-4">
                Let's Build Something Amazing Together
            </h2>
            <p class="text-gray-300 mb-6">
                Have a project in mind? Let’s discuss your idea and turn it into reality.
            </p>
            <button class="px-8 py-3 bg-gradient-to-r from-[#A3D921] to-[#046425] rounded-full text-white font-semibold">
                Get In Touch
            </button>
        </section>

        <!-- <Contact /> -->
        <Footer />
        <BackToTop />
    </div>
</template>

<script setup>
import {ref} from 'vue'
import Navbar from '../Navbar.vue';
import Footer from '../Footer.vue';
import BackToTop from '../BackToTop.vue';

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
        width: '85%'
    },
    {
        id:4,
        name: 'Database',
        width: '88%'
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