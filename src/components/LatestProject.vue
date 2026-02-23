<template>
    <section id="projects" class="container mx-auto text-white mt-20">
        <div class="px-4 xl:pl-16">
            <div class="mb-4 md:flex md:justify-between xl:pr-16">
                <h2 class="text-4xl font-bold text-white">My Latest Project</h2>

                <!-- category button -->
                <div class="flex space-x-4 mb-4 mt-5 md:mt-0  relative">
                    <button
                        v-for="category in ['All', 'Web Development','Software']"
                        :key="category"
                        @click="selectedCategory = category"
                        :class="selectedCategory === category ? 'text-[#A3D921] font-bold' : 'hover:text-[#046425]'"
                        class="relative">
                        {{ category }}
                    </button>
                    <button @click="goAllProject">See All</button>
                </div>
            </div>

            <!-- project cards -->
            <ul class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3" 
                data-aos="fade-right">
                <li v-for="project in filteredProjects" 
                    :key="project.id">                    
                    <div 
                    :style="{backgroundImage:'url(' + project.image + ')', backgroundSize:'cover'}" 
                    class="bg-[#111827] h-52 md:h-[20rem] rounded-t-xl relative group">                        
                        <div 
                        class="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full 
                        bg-[#181818] opacity-0 scale-95 group-hover:opacity-80 group-hover:scale-100 
                        transition-all duration-500">
                            <a class="h-14 w-14 mr-2 border-2 flex items-center justify-center rounded-full border-[#ADB2BE] hover:border-white" target="_blank" :href="project.webURL">
                                <i class="fa-solid fa-code"></i>
                            </a>
                            <a class="h-14 w-14 mr-2 border-2 flex items-center justify-center rounded-full border-[#ADB2BE] hover:border-white" target="_blank" :href="project.gitURL">
                                <i class="fa-brands fa-github"></i>
                            </a>
                        </div>
                    </div>

                    <div class="text-white rounded-b-xl mt-3 bg-[#111A3E] shadow-lg border border-[#111A3E] py-6 px-4">
                        <h3 class="text-lg font-semibold uppercase lg:text-xl">{{ project.title }}</h3>
                        <p class="text-[#ADB7BE]">{{ project.description }}</p>
                        <div class="flex flex-wrap p-2.5">
                            <div v-for="technology in project.technologies" :key="technology" class="text-center ml-1 rounded-3xl bg-[#181818]" style="box-shadow: 0 4px 30px rgba(0,0,0,0.1); border: 1px solid #111827; backdrop-filter: blur(9px); -webkit-backdrop-filter: blur(9px);">
                                <p class="px-2 py-1">{{ technology }}</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

        </div>
    </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

function goAllProject() {
    router.push("/projects");
}

const projects = ref([
    {
        id:1,
        category:'Web Development',
        image:'img/project/baker-shop.png',
        title: 'Mr. Paul Bakers',
        description: 'Mr Paul Bakers is a modern online bakery specializing in premium-quality baked goods and custom-designed cakes for all occasions. From birthdays and weddings to corporate events and special celebrations, the bakery offers a wide range of cakes, pastries, cookies, chocolates, and desserts made with high-quality ingredients and expert craftsmanship.',
        technologies: ['Laravel 10', 'Blade', 'Vue','MySql DB'],
        gitURL:'https://github.com/samim5274/mr_paul_bekare',
        webURL:'https://mrpaulbakers.shop'
    },
    {
        id:2,
        category:'Software',
        image:'img/project/haac.png',
        title: 'Hazi Abed Ali College',
        description: 'Hazi Abed Ali College (haac.edu.bd) is a well-recognized non-government degree college located in East Brahmondi, Narsingdi Sadar, Narsingdi District, Dhaka Division, Bangladesh. It was established in 2001 and serves as an academic centre offering higher education up to Bachelor’s Degree (Pass) level under the National University system.',
        technologies: ['Laravel 10', 'Blade', 'Vue','MySql DB'],
        gitURL:'https://github.com/samim5274/Hazi_Abid_Ali_College_LV10',
        webURL:'https://haac.edu.bd/'
    },
    {
        id:3,
        category:'Web Development',
        image:'img/project/dhcPharmacy.png',
        title: 'Doctor Health Care & Pharmacy',
        description: 'DHC Pharmacy (dhcpharmacy.shop) is an online health and wellness store designed to offer a wide range of pharmaceutical products, complementing a digital shopping platform. As an online pharmacy portal, it provides a convenient alternative to traditional retail drugstores by giving users the ability to browse and order health-related products from anywhere, anytime.',
        technologies: ['Laravel 10', 'Blade', 'Vue','MySql DB'],
        gitURL:'',
        webURL:''
    },
    {
        id:4,
        category:'Software',
        image:'img/project/al-faruk-academy.png',
        title: 'Al-Faruk Academy',
        description: 'Al-Faruk Academy is a well-established non-government educational institution located in Purba Brahmandi, Narsingdi, Dhaka Division, Bangladesh. It offers schooling up to the junior secondary level, serving students from the local community with a focus on academic growth and personal development. Al-Faruk Academy emphasizes both academic achievement and character-building.',
        technologies: ['Laravel 10', 'Blade', 'Vue','MySql DB'],
        gitURL:'https://github.com/samim5274/Al_Faruk_Academy_Narshindhi',
        webURL:'https://alfarukacademy.edu.bd/'
    },
    {
        id:5,
        category:'Software',
        image:'img/project/hospital.png',
        title: 'Bangladesh Diabetic & Diagnostic Care Ltd (BDDC)',
        description: 'Bangladesh Diabetic & Diagnostic Care Ltd. (BDDC) is a modern healthcare facility dedicated to providing reliable medical, diabetic, and diagnostic services to patients with care, accuracy, and professionalism. The institution focuses on supporting patients through quality diagnostics, routine health checkups, and specialized diabetic care.',
        technologies: ['Laravel 10', 'Blade', 'Vue','MySql DB'],
        gitURL:'https://github.com/samim5274/hospital_management_system_lv10',
        webURL:''
    },
    {
        id:6,
        category:'Web Development',
        image:'img/project/nclub.jpg',
        title: 'Narshindhi Boot Club',
        description: 'Narsingdi Club is a well-known social and recreational organization that serves as a gathering place for community members, professionals, and local leaders in Narsingdi. The club promotes social interaction, cultural activities, and healthy recreation through a variety of events and facilities.Narsingdi Club plays an important role in strengthening community relationships and cultural development in the region.',
        technologies: ['Laravel 10', 'Blade', 'Vue','MySql DB'],
        gitURL:'https://github.com/samim5274/Narshindhi_Club',
        webURL:''
    },
]);

const selectedCategory = ref("All");
const filteredProjects = computed(() => {
  if (selectedCategory.value === "All") {
    return projects.value;
  }
  return projects.value.filter(
    (project) =>
      project.category.toLowerCase() === selectedCategory.value.toLowerCase()
  );
});

</script>

<style>

</style>