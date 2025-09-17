<template>
    <section class="container mx-auto text-white mt-20" id="contact">
        <h2 class=" text-4xl font-bold text-white text-left mb-4 px-4 xl:pl-16">Let's Connect</h2>
        <div class=" grid md:grid-cols-2 gap-4 relative px-4 xl:px-16 mt-8" data-aos="zoom-in-up">
            <div>
                <p class="text-[#adb7be]">The contact section lets visitors easily reach me via email, phone, LinkedIn, or a simple form. It provides quick, professional, and reliable communication for inquiries, collaborations, or opportunities, ensuring seamless connection between me and interested individuals.</p>
                <div class="col-lg-4 col-md-4 mb-lg-0 mt-5">
                    <div class="space-y-8">
                        <!-- Email -->
                        <div class="flex items-center">
                            <div class="flex items-center justify-center w-12 h-12 rounded-full border border-[#111a3e] bg-[#111a3e] backdrop-blur-md">
                                <i class="fa-solid fa-envelope text-white text-lg"></i>
                            </div>
                            <div class="ml-5 text-white">
                                <h4 class="font-semibold">Email</h4>
                                <p class="text-sm">cse.shamim.cub@gmail.com</p>
                            </div>
                        </div>
                        <!-- Phone -->
                        <div class="flex items-center">
                            <div class="flex items-center justify-center w-12 h-12 rounded-full border border-[#111a3e] bg-[#111a3e] backdrop-blur-md">
                                <i class="fa-solid fa-phone text-white text-lg"></i>
                            </div>
                            <div class="ml-5 text-white">
                                <h4 class="font-semibold">Phone</h4>
                                <p class="text-sm">+880 1533-021557</p>
                            </div>
                        </div>
                        <!-- LinkedIn -->
                        <div class="flex items-center">
                            <div class="flex items-center justify-center w-12 h-12 rounded-full border border-[#111a3e] bg-[#111a3e] backdrop-blur-md">
                                <i class="fa-brands fa-linkedin text-white text-lg"></i>
                            </div>
                            <div class="ml-5 text-white">
                                <h4 class="font-semibold">LinkedIn</h4>
                                <a href="https://www.linkedin.com/in/samim-hossain-bc5274/" target="_blank" class="text-sm underline hover:text-[#A3D921]">SAMIM-HosseN</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
            <div class="flex items-center justify-center w-full h-full rounded-lg border border-[#111a3e] bg-[#111a3e] backdrop-blur-md p-6">
                <form action="" class="flex flex-col w-full max-w-lg" data-aso="zoom-in-up">
                    
                    <!-- Email -->
                    <div class="mb-6">
                    <label for="email" class="text-white block mb-2 text-sm font-medium">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        class="bg-[#111827] placeholder:text-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-[#046425]" 
                        placeholder="Enter your email">
                    </div>

                    <!-- Subject -->
                    <div class="mb-6">
                    <label for="subject" class="text-white block mb-2 text-sm font-medium">Subject</label>
                    <input 
                        type="text" 
                        id="subject" 
                        name="subject" 
                        class="bg-[#111827] placeholder:text-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-[#046425]" 
                        placeholder="Enter your subject">
                    </div>

                    <!-- Message -->
                    <div class="mb-6">
                    <label for="message" class="text-white block mb-2 text-sm font-medium">Message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        rows="4"
                        class="bg-[#111827] placeholder:text-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-[#046425]" 
                        placeholder="Let's talk about ..."></textarea>
                    </div>

                    <!-- Button -->
                    <button 
                    type="submit"
                    class="w-full px-6 py-3 rounded-full flex justify-center items-center text-white bg-[#046425] border-2 border-transparent hover:bg-transparent hover:border-[#A3D921] hover:text-[#A3D921] transition">
                    Send Message
                    </button>
                </form>
            </div>
            <div class="bg-gradient-to-br from-[#A3D921] to-[#046425] blur-2xl h-20 w-80 z-0 absolute -top-1/2 -left-4 transform -translate-x-2/3 -translate-1/2"></div>
        </div>
    </section>
</template>

<script lang="ts" setup>

</script>

<style>

</style>