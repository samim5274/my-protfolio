<template>
    <section id="project" class="text-white mt-20">
        <div class="px-4 xl:pl-16">
            <div class="mb-4 md:flex md:justify-between xl:pr-16">
                <h2 class="text-4xl font-bold text-white">My Latest Project</h2>
                <div class="flex space-x-4 mb-4 mt-5 md:mt-0">
                    <button class="hover:text-[#046425]" v-for="cat in ['All', 'Web Development','Software']" :key="cat" @click="() => selectedCategory = categroy">{{ cat }}</button>
                </div>
                <ul class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3" data-aos="fade-right">
                    <div v-for="project in filterdProjects" :key="project.id">
                        <div :style="{backgroundImage:'url('+project.image+')', backgroundSize:'cover'}" class=" h-52 md:h-[24rem] rounded-t-xl relative group">
                            <div class="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                                <a class="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB2BE] hover:border-white group/link" :href="project.webURL">
                                    <i class="fa-solid fa-code"></i>
                                </a>
                                <a class="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB2BE] hover:border-white group/link" :href="project.gitURL">
                                    <i class="fa-solid fa-eye"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    </section>
</template>

<script  setup>
import {ref} from 'vue'
const projects = ref([
    {
        id:1,
        categroy:'Web Development',
        image:'public/img/project/project-1.png',
        title: 'project 1',
        description: 'Web development is the process of creating, designing, and maintaining websites or web applications. It involves front-end development for user interfaces and back-end development for server-side logic. Combining creativity and programming skills, web development ensures responsive, functional, and user-friendly digital experiences that meet modern business and personal needs effectively.',
        technologies: ['vue.js', 'vuex','Express'],
        gitURL:'',
        webURL:''
    },
    {
        id:2,
        categroy:'Software',
        image:'public/img/project/project-2.png',
        title: 'project 1',
        description: 'Web development is the process of creating, designing, and maintaining websites or web applications. It involves front-end development for user interfaces and back-end development for server-side logic. Combining creativity and programming skills, web development ensures responsive, functional, and user-friendly digital experiences that meet modern business and personal needs effectively.',
        technologies: ['vue.js', 'vuex','Express'],
        gitURL:'',
        webURL:''
    },
    {
        id:3,
        categroy:'Web Development',
        image:'public/img/project/project-3.png',
        title: 'project 1',
        description: 'Web development is the process of creating, designing, and maintaining websites or web applications. It involves front-end development for user interfaces and back-end development for server-side logic. Combining creativity and programming skills, web development ensures responsive, functional, and user-friendly digital experiences that meet modern business and personal needs effectively.',
        technologies: ['vue.js', 'vuex','Express'],
        gitURL:'',
        webURL:''
    },
    {
        id:4,
        categroy:'Software',
        image:'public/img/project/project-4.png',
        title: 'project 1',
        description: 'Web development is the process of creating, designing, and maintaining websites or web applications. It involves front-end development for user interfaces and back-end development for server-side logic. Combining creativity and programming skills, web development ensures responsive, functional, and user-friendly digital experiences that meet modern business and personal needs effectively.',
        technologies: ['vue.js', 'vuex','Express'],
        gitURL:'',
        webURL:''
    },
    {
        id:5,
        categroy:'Software',
        image:'public/img/project/project-5.png',
        title: 'project 1',
        description: 'Web development is the process of creating, designing, and maintaining websites or web applications. It involves front-end development for user interfaces and back-end development for server-side logic. Combining creativity and programming skills, web development ensures responsive, functional, and user-friendly digital experiences that meet modern business and personal needs effectively.',
        technologies: ['vue.js', 'vuex','Express'],
        gitURL:'',
        webURL:''
    },
    {
        id:6,
        categroy:'Web Development',
        image:'public/img/project/project-6.png',
        title: 'project 1',
        description: 'Web development is the process of creating, designing, and maintaining websites or web applications. It involves front-end development for user interfaces and back-end development for server-side logic. Combining creativity and programming skills, web development ensures responsive, functional, and user-friendly digital experiences that meet modern business and personal needs effectively.',
        technologies: ['vue.js', 'vuex','Express'],
        gitURL:'',
        webURL:''
    },
]);

const selectedCategory = ref('all');
const filterdProjects = ref(()=>{
    if(selectedCategory.value === 'all'){
        return projects.value;
    }
    return projects.value.filter(projects => projects.categroy.toLocaleLowerCase() === selectedCategory.value.toLocaleLowerCase());
});
</script>

<style>

</style>