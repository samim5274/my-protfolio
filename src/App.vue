<template>
  <div class="bg-[#111827] min-h-screen">
    <Navbar />
    <HeroSection />
    <Services />
    <AboutSection />
    <ExperinceAndSkills />
    <LatestProject />
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
import ExperinceAndSkills from './components/ExperinceAndSkills.vue';
import LatestProject from './components/LatestProject.vue';

onMounted(()=>{
  AOS.init();
});
</script>

<style>

</style>