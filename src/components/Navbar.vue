<template>
  <header
    id="nav-section"
    class="flex justify-between items-center p-6 bg-[#111827] text-white fixed top-0 left-0 w-full shadow-md z-50"
  >
    <div class="flex items-center space-x-3">
      <img src="/img/logo.png" alt="Logo" class="w-10 h-10" />
      <div class="text-white text-3xl font-bold uppercase">
        SAMIM<span class="text-sm">-HOSSEN</span>
      </div>
    </div>

    <!-- Mobile Toggle Button -->
    <div class="md:hidden z-30" @click="isMenuOpen = !isMenuOpen">
      <button type="button" class="block focus:outline-none">
        <span class="text-3xl text-white">
          <i :class="isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
        </span>
      </button>
    </div>

    <!-- Navigation Links -->
    <nav
      :class="[
        'fixed inset-0 flex flex-col items-center justify-center bg-[#111827] transition-all duration-300 md:static md:flex md:flex-row md:bg-transparent',
        isMenuOpen ? 'block' : 'hidden md:flex'
      ]"
    >
      <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
        <li v-for="item in Menu" :key="item.name">          
          <router-link
            :to="item.to"
            class="cursor-pointer hover:text-[#046425] transition-colors"
            @click="closeMenu"
            active-class="text-[#96CD24] font-semibold"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const Menu = ref([
  { name: "Home", to: "/" },
  // { name: "Services", to: "/services" },
  { name: "About", to: "/about" },
  // { name: "Skills", to: "/skills" },
  { name: "Projects", to: "/projects" },
  { name: "Contact", to: "/contact" },
  // { name: "Testimonials", to: "/testimonials" },
   { name: "Login", to: "/login" },
]);

function closeMenu() {
  isMenuOpen.value = false;
}
</script>