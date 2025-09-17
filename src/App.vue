<template>
    <div class="bg-[#111827] min-h-screen">
        <div>
            <Navbar />
            <HeroSection />
            <Services />
            <AboutSection />
            <ExperienceAndSkills />
            <LatestProject />
            <Contact />
            <Testimonial />
            <Footer />
            <BackToTop />                    
        </div>
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
import LatestProject from './components/LatestProject.vue';

onMounted(()=>{
  AOS.init();
});
</script>

<style>

</style>