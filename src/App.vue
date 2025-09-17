<template>
    <div class="bg-[#111827] min-h-screen">
        <Suspense>
            <template #default>
                <div>
                    <Navbar />
                    <HeroSection />
                    <Services />
                    <AboutSection />
                    <ExperienceAndSkills />
                    <LatestProject />
                    <Testimonial />
                    <Contact />
                    <Footer />
                    <BackToTop />                    
                </div>
            </template>
            <template #fallback>
                <div class="flex justify-center items-center min-h-screen">
                    <Spinner />
                </div>
            </template>
        </Suspense>
      <!-- <p>https://www.youtube.com/watch?v=U10h8rrPe6g</p> -->
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import Services from './components/Services.vue';
import AboutSection from './components/AboutSection.vue';
import ExperienceAndSkills from './components/ExperienceAndSkills.vue';
import Contact from './components/Contact.vue';
import Testimonial from './components/Testimonial.vue';
import Footer from './components/Footer.vue';
import BackToTop from './components/BackToTop.vue';
import Spinner from './components/Spinner.vue';

onMounted(()=>{
  AOS.init();
});
</script>

<style>

</style>