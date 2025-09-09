<template>
  <header
    id="nav-section"
    class="flex justify-between items-center p-6 bg-[#111827] text-white fixed top-0 left-0 w-full shadow-md z-50">

    <div class="flex items-center space-x-3">
      <!-- logo image -->
      <img src="/img/logo.png" alt="Logo" class="w-10 h-10" />
      <!-- Logo -->
      <div class="text-white text-3xl font-bold uppercase">SAMIM<span class="text-sm">-HOSSEN</span></div>
    </div>

    <!-- Mobile Toggle Button -->
    <div class="md:hidden z-30" @click="isMenuOpen = !isMenuOpen">
      <button type="button" class="block focus:outline-none">
        <span v-if="!isMenuOpen" class="text-3xl text-white">
          <i class="fa-solid fa-bars"></i>
        </span>
        <span v-else class="text-3xl text-white">
          <i class="fa-solid fa-xmark"></i>
        </span>
      </button>
    </div>

    <!-- Navigation Links -->
    <nav
      :class="[
        'fixed inset-0 flex flex-col items-center justify-center bg-[#111827] transition-all duration-300 md:static md:flex md:flex-row md:bg-transparent',
        isMenuOpen ? 'block' : 'hidden md:flex'
      ]">
      <ul
        class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
        <li
          v-for="item in Menu"
          :key="item.name"
          class="cursor-pointer hover:text-gray-400 transition-colors"
          @click="scrollToSection(item.href)">
          {{ item.name }}
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import {ref} from 'vue'

const Menu =ref([
  {name:"Services", href:'#services'},
  {name:"About Me", href:'#about'},
  {name:"Skills", href:'#skills'},
  {name:"Projects", href:'#projects'},
  {name:"Testimonials", href:'#testimonials'},
  {name:"Contact", href:'#contact'},
]);

const isMenuOpen = ref(false)
const scrollToSection = (href)=>{
  isMenuOpen.value = false;
  const section = document.querySelector(href);
  if(section){
    section.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<style>

</style>