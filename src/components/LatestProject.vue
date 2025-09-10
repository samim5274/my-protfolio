<template>
    <section id="project" class="container mx-auto text-white mt-20">
        <div class="px-4 xl:pl-16">
            <div class="mb-4 md:flex md:justify-between xl:pr-16">
                <h2 class="text-4xl font-bold text-white">My Latest Project</h2>

                <!-- category button -->
                <div class="flex space-x-4 mb-4 mt-5 md:mt-0 z-50 relative">
                    <button
                        v-for="category in ['All', 'Web Development','Software']"
                        :key="category"
                        @click="selectedCategory = category"
                        :class="selectedCategory === category ? 'text-[#A3D921] font-bold' : 'hover:text-[#046425]'"
                        class="relative">
                        {{ category }}
                    </button>
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
                            <a class="h-14 w-14 mr-2 border-2 flex items-center justify-center rounded-full border-[#ADB2BE] hover:border-white" :href="project.webURL">
                                <i class="fa-solid fa-code"></i>
                            </a>
                            <a class="h-14 w-14 mr-2 border-2 flex items-center justify-center rounded-full border-[#ADB2BE] hover:border-white" :href="project.gitURL">
                                <i class="fa-solid fa-eye"></i>
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

<script  setup>
import { ref, computed } from "vue";
const projects = ref([
    {
        id:1,
        category:'Web Development',
        image:'img/project/project-1.jpg',
        title: 'project 1',
        description: 'Web development is the process of creating, designing, and maintaining websites or web applications. It involves front-end development for user interfaces and back-end development for server-side logic. Combining creativity and programming skills, web development ensures responsive, functional, and user-friendly digital experiences that meet modern business and personal needs effectively.',
        technologies: ['vue.js', 'vuex','Express'],
        gitURL:'',
        webURL:''
    },
    {
        id:2,
        category:'Software',
        image:'img/project/project-2.jpg',
        title: 'project 1',
        description: 'Web development is the process of creating, designing, and maintaining websites or web applications. It involves front-end development for user interfaces and back-end development for server-side logic. Combining creativity and programming skills, web development ensures responsive, functional, and user-friendly digital experiences that meet modern business and personal needs effectively.',
        technologies: ['vue.js', 'vuex','Express'],
        gitURL:'',
        webURL:''
    },
    {
        id:3,
        category:'Web Development',
        image:'img/project/project-3.jpg',
        title: 'project 1',
        description: 'Web development is the process of creating, designing, and maintaining websites or web applications. It involves front-end development for user interfaces and back-end development for server-side logic. Combining creativity and programming skills, web development ensures responsive, functional, and user-friendly digital experiences that meet modern business and personal needs effectively.',
        technologies: ['vue.js', 'vuex','Express'],
        gitURL:'',
        webURL:''
    },
    {
        id:4,
        category:'Software',
        image:'img/project/project-4.jpg',
        title: 'project 1',
        description: 'Web development is the process of creating, designing, and maintaining websites or web applications. It involves front-end development for user interfaces and back-end development for server-side logic. Combining creativity and programming skills, web development ensures responsive, functional, and user-friendly digital experiences that meet modern business and personal needs effectively.',
        technologies: ['vue.js', 'vuex','Express'],
        gitURL:'',
        webURL:''
    },
    {
        id:5,
        category:'Software',
        image:'img/project/project-5.jpg',
        title: 'project 1',
        description: 'Web development is the process of creating, designing, and maintaining websites or web applications. It involves front-end development for user interfaces and back-end development for server-side logic. Combining creativity and programming skills, web development ensures responsive, functional, and user-friendly digital experiences that meet modern business and personal needs effectively.',
        technologies: ['vue.js', 'vuex','Express'],
        gitURL:'',
        webURL:''
    },
    {
        id:6,
        category:'Web Development',
        image:'img/project/project-6.jpg',
        title: 'project 1',
        description: 'Web development is the process of creating, designing, and maintaining websites or web applications. It involves front-end development for user interfaces and back-end development for server-side logic. Combining creativity and programming skills, web development ensures responsive, functional, and user-friendly digital experiences that meet modern business and personal needs effectively.',
        technologies: ['vue.js', 'vuex','Express'],
        gitURL:'',
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