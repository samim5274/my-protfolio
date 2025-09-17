<template>    
    <button v-if="isVisible" @click="scrollToTop" class="fixed bottom-4 right-10 bg-gradient-to-b from-[#A3D921] to-[#046425] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl cursor-pointer transition-opacity duration-300 hover:bg-blue-600"><i class="fa-solid fa-arrow-up"></i></button>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue';
const isVisible = ref(false);
const handleScroll = () =>{
    isVisible.value = window.scrollY > 300;
}
const scrollToTop = () => {
    window.scrollTo({top:0, behavior:'smooth'})
}
onMounted(()=>{
    window.addEventListener('scroll', handleScroll)
});
onUnmounted(()=>{
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style>

</style>