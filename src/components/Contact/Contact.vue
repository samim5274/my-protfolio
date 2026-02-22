<template>
    <div class="bg-[#111827] min-h-screen">
        <Navbar />
        
        <section class="container mx-auto text-white mt-20" id="contact">            
            <div class="flex items-center mt-6">
                <h2 class=" text-4xl font-bold text-white text-left mb-4 px-4 xl:pl-16">Let's Connect</h2>
                <span class="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                <p class="text-sm text-gray-300">Available for Freelance Projects</p>
            </div>
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
                            <!-- Github -->
                            <div class="flex items-center">
                                <div class="flex items-center justify-center w-12 h-12 rounded-full border border-[#111a3e] bg-[#111a3e] backdrop-blur-md">
                                    <i class="fa-brands fa-github text-white text-lg"></i>
                                </div>
                                <div class="ml-5 text-white">
                                    <h4 class="font-semibold">Github</h4>
                                    <a href="https://github.com/samim5274" target="_blank" class="text-sm underline hover:text-[#A3D921]">Samim Hossen</a>
                                </div>
                            </div>

                            <a href="https://wa.me/+8801762164746" target="_blank"
                                class="inline-flex items-center gap-2 mt-6 px-5 py-2 rounded-full bg-green-600 hover:bg-green-700 transition">
                                <i class="fa-brands fa-whatsapp"></i>
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>        
                <div class="flex items-center justify-center w-full h-full rounded-lg border border-[#111a3e] bg-[#111a3e] backdrop-blur-md p-6">
                    <form @submit.prevent="sendEmail" class="flex flex-col w-full max-w-lg" data-aso="zoom-in-up">
                        
                        <!-- Email -->
                        <div class="mb-6">
                        <label for="email" class="text-white block mb-2 text-sm font-medium">Email</label>
                        <input 
                            v-model="email"
                            type="email"
                            id="email"
                            class="bg-[#111827] placeholder:text-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-[#046425]" 
                            placeholder="Enter your email">
                        </div>

                        <!-- Subject -->
                        <div class="mb-6">
                        <label for="subject" class="text-white block mb-2 text-sm font-medium">Subject</label>
                        <input 
                            v-model="subject"
                            type="text"
                            id="subject" 
                            class="bg-[#111827] placeholder:text-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-[#046425]" 
                            placeholder="Enter your subject">
                        </div>

                        <!-- Message -->
                        <div class="mb-6">
                        <label for="message" class="text-white block mb-2 text-sm font-medium">Message</label>
                        <textarea 
                            v-model="message"
                            id="message"
                            rows="4"
                            class="bg-[#111827] placeholder:text-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-[#046425]" 
                            placeholder="Let's talk about ..."></textarea>
                        </div>

                        <!-- Button -->
                        <button
                            type="submit"
                            :disabled="loading"
                            class="w-full px-6 py-3 rounded-full flex justify-center items-center text-white bg-[#046425] border-2 border-transparent hover:bg-transparent hover:border-[#A3D921] hover:text-[#A3D921] transition disabled:opacity-60 disabled:cursor-not-allowed">
                            {{ loading ? "Sending..." : "Send Message" }}
                        </button>
                        <p v-if="status" class="mt-4 text-sm text-white/80">
                            {{ status }}
                        </p>
                    </form>
                </div>
                <div class="bg-gradient-to-br from-[#A3D921] to-[#046425] blur-2xl h-20 w-80 z-0 absolute -top-1/2 -left-4 transform -translate-x-2/3 -translate-1/2"></div>
            </div>
        </section>

        <Footer />
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

import Navbar from '../Navbar.vue';
import Footer from '../Footer.vue';

// EmailJS credentials
const SERVICE_ID = "service_gmg9qn7";
const TEMPLATE_ID = "template_tqqq00s";
const PUBLIC_KEY = "wBPGwxVfbj1J_wfod";

const email = ref("");
const subject = ref("");
const message = ref("");

const loading = ref(false);
const status = ref<string | null>(null);

async function sendEmail() {
    status.value = null;

    // basic validation
    if (!email.value || !subject.value || !message.value) {
        status.value = "Fill input fileds.";
        return;
    }

    if (!email.value.includes("@")) {
        status.value = "Enter a valid email address.";
        return;
    }

    loading.value = true;

    try {
        await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
            name: "Website Visitor",
            from_email: email.value,
            title: subject.value,
            message: message.value,
        },
        { publicKey: PUBLIC_KEY }
        );

        status.value = "✅ Message sent successfully!";
        email.value = "";
        subject.value = "";
        message.value = "";
    } catch (err) {
        console.log(err);
        status.value = "❌ Failed to send. Try again.";
    } finally {
        loading.value = false;
    }
}
</script>

<style>

</style>