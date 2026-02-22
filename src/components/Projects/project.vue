<template>
  <div class="bg-[#111827] min-h-screen">
    <Navbar />

    <section id="projects" class="container mx-auto text-white mt-22">
      <div class="px-4 xl:pl-16">
        <div class="mb-4 md:flex md:justify-between xl:pr-16">
          <h2 class="text-4xl font-bold text-white">My Latest Project</h2>

          <!-- category button -->
          <div class="flex space-x-4 mb-4 mt-5 md:mt-0 relative items-center">
            <button
              v-for="category in categories"
              :key="category"
              @click="selectedCategory = category"
              :class="selectedCategory === category ? 'text-[#A3D921] font-bold' : 'hover:text-[#046425]'"
              class="relative"
              type="button"
            >
              {{ category }}
            </button>
          </div>
        </div>

        <!-- project cards -->
        <ul
          class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
          data-aos="fade-right"
        >
          <li v-for="project in filteredProjects" :key="project.id">
            <div
              :style="{
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }"
              class="bg-[#111827] h-52 md:h-[20rem] rounded-t-xl relative group overflow-hidden"
            >
              <div
                class="overlay flex items-center justify-center absolute inset-0
                bg-[#181818] opacity-0 scale-95 group-hover:opacity-80 group-hover:scale-100
                transition-all duration-500"
              >
                <a
                  v-if="project.webURL"
                  class="h-14 w-14 mr-2 border-2 flex items-center justify-center rounded-full border-[#ADB2BE] hover:border-white"
                  target="_blank"
                  rel="noopener"
                  :href="project.webURL"
                  title="Live Demo"
                >
                  <i class="fa-solid fa-code"></i>
                </a>

                <a
                  v-if="project.gitURL"
                  class="h-14 w-14 mr-2 border-2 flex items-center justify-center rounded-full border-[#ADB2BE] hover:border-white"
                  target="_blank"
                  rel="noopener"
                  :href="project.gitURL"
                  title="GitHub"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </div>

            <div class="text-white rounded-b-xl mt-3 bg-[#111A3E] shadow-lg border border-[#111A3E] py-6 px-4">
              <h3 class="text-lg font-semibold uppercase lg:text-xl">{{ project.title }}</h3>
              <p class="text-[#ADB7BE] text-sm mt-2 line-clamp-4">
                {{ project.description }}
              </p>

              <div class="flex flex-wrap gap-2 mt-4">
                <span
                  v-for="technology in project.technologies"
                  :key="technology"
                  class="text-xs px-3 py-1 rounded-full bg-[#181818] border border-[#111827]"
                >
                  {{ technology }}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <Footer />
    <BackToTop />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

import Navbar from '../Navbar.vue';
import Footer from "../Footer.vue";
import BackToTop from "../BackToTop.vue";

const router = useRouter();
const categories = ["All", "Web Development", "Software"];

const projects = ref([
    {
        id: 1,
        category: "Web Development",
        image: "/img/project/baker-shop.png",
        title: "Mr. Paul Bakers",
        description:
        "Mr Paul Bakers is a modern online bakery specializing in premium-quality baked goods and custom-designed cakes for all occasions...",
        technologies: ['Laravel 10', 'Blade', 'Vue','MySql DB'],
        gitURL: "https://github.com/samim5274/mr_paul_bekare",
        webURL: "https://mrpaulbakers.shop",
    },
    {
        id: 2,
        category: "Software",
        image: "/img/project/haac.png",
        title: "Hazi Abed Ali College",
        description:
        "Hazi Abed Ali College (haac.edu.bd) is a well-recognized non-government degree college located in East Brahmondi, Narsingdi...",
        technologies: ['Laravel 10', 'Blade', 'Vue','MySql DB'],
        gitURL: "https://github.com/samim5274/Hazi_Abid_Ali_College_LV10",
        webURL: "https://haac.edu.bd/",
    },
    {
        id: 3,
        category: "Web Development",
        image: "/img/project/dhcPharmacy.png",
        title: "Doctor Health Care & Pharmacy",
        description:
        "DHC Pharmacy is an online health and wellness store designed to offer a wide range of pharmaceutical products...",
        technologies: ['Laravel 10', 'Blade', 'Vue','MySql DB'],
        gitURL: "",
        webURL: "",
    },
    {
        id: 4,
        category: "Software",
        image: "/img/project/al-faruk-academy.png",
        title: "Al-Faruk Academy",
        description:
        "Al-Faruk Academy is a well-established non-government educational institution located in Purba Brahmandi, Narsingdi...",
        technologies: ['Laravel 10', 'Blade', 'Vue','MySql DB'],
        gitURL: "https://github.com/samim5274/Al_Faruk_Academy_Narshindhi",
        webURL: "https://alfarukacademy.edu.bd/",
    },
    {
        id: 5,
        category: "Software",
        image: "/img/project/hospital.png",
        title: "Bangladesh Diabetic & Diagnostic Care Ltd (BDDC)",
        description:
        "BDDC is a modern healthcare facility dedicated to providing reliable medical, diabetic, and diagnostic services...",
        technologies: ['Laravel 10', 'Blade', 'Vue','MySql DB'],
        gitURL: "https://github.com/samim5274/hospital_management_system_lv10",
        webURL: "",
    },
    {
        id: 6,
        category: "Web Development",
        image: "/img/project/nclub.jpg",
        title: "Narsingdi Club",
        description:
        "Narsingdi Club is a well-known social and recreational organization that serves as a gathering place for community members...",
        technologies: ['Laravel 10', 'Blade', 'Vue','MySql DB'],
        gitURL: "https://github.com/samim5274/Narshindhi_Club",
        webURL: "",
    },
    {
        id: 7,
        category: "Software",
        image: "/img/project/pos.jpg",
        title: "Pos System / Inventory System",
        description:
        "A modern POS and Inventory Management System that handles sales, stock tracking, invoicing, and reporting to improve business efficiency and reduce manual errors....",
        technologies: ['Laravel 10', 'Vue','MySql DB'],
        gitURL: "https://github.com/samim5274/Narshindhi_Club",
        webURL: "",
    },
]);

const selectedCategory = ref("All");

const filteredProjects = computed(() => {
    if (selectedCategory.value === "All") return projects.value;
    return projects.value.filter(
        (p) => p.category.toLowerCase() === selectedCategory.value.toLowerCase()
    );
});
</script>

<style>
.carousel__prev,
.carousel__next {
  color: white;
}
</style>