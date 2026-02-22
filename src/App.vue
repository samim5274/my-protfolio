<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(()=>{
  AOS.init();
});
</script>

<style>

</style>