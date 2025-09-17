<template>
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
                    
                    <p class="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl">I am a passionate web developer skilled in Laravel and Vue.js. I enjoy building user-friendly applications, learning new technologies, and growing as a full stack developer.</p>

                    <div class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
                        <button class="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
                            <span class="absolute inset-0 rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out bg-gradient-to-r from-[#A3D921] to-[#046425] border-2 border-transparent"></span>
                            <span class=" relative flex items-center justify-center text-white">Hire Me</span>
                        </button>
                        <button class="border border-[#A3D921] px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
                            <div class="hover:scale-105 transition-all ease-in-out flex justify-center items-center relative">
                                <div class="svg-container text-[#A3D921]">
                                    <i class="fa-solid fa-download"></i>
                                    <div class="download-loader text-white hidden"></div>
                                </div>
                                <a href="/resume.pdf" download="resume.pdf" class="pl-2 text-[#A3D921]">Download Resume</a>
                            </div>
                        </button>
                    </div>
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
</template>

<script setup>

</script>

<style>

</style>