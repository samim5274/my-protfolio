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
import Navbar from './Navbar.vue';
import HeroSection from './HeroSection.vue';
import Services from './Services.vue';
import AboutSection from './AboutSection.vue';
import ExperienceAndSkills from './ExperienceAndSkills.vue';
import Contact from './Contact.vue';
import Testimonial from './Testimonial.vue';
import Footer from './Footer.vue';
import BackToTop from './BackToTop.vue';
import LatestProject from './LatestProject.vue';
</script>

<style>

</style>