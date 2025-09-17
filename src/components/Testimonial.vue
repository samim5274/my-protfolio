<template>
    <section class="text-white mt-20" id="testimonials" data-aos="zoom-in">
        <h2 class="text-4xl font-bold text-white text-left mb-4 px-4 xl:pl-16">Testimonials</h2>
        <div class="px-4 xl:px-16">
            <Carousel v-bind="setting" :breakpoints="breakpoints">
                <slide v-for="element in testimonials" :key="element.id">
                    <div class="carousel_item p-4">
                        <div class="w-full mx-auto bg-[#111a3e] shadow-lg border border-[#1f1641] p-6 text-white font-light mb-6 rounded-xl">
                            <div class="flex items-center mb-4">
                                <!-- Image -->
                                <div class="overflow-hidden rounded-full w-12 h-12 border border-gray-200">
                                <img :src="element.image" alt="testimonial image" loading="lazy" class="w-full h-full object-cover">
                                </div>

                                <!-- Name -->
                                <h6 class="ml-4 font-semibold text-base uppercase text-white">
                                {{ element.fullName }}
                                </h6>
                            </div>

                            <!-- Comment -->
                            <div class="w-full">
                                <p class="text-sm leading-relaxed text-gray-200">
                                <span class="text-lg leading-none italic font-bold text-white mr-1">"</span>
                                {{ element.comments }}
                                <span class="text-lg leading-none italic font-bold text-white ml-1">"</span>
                                </p>
                            </div>
                        </div>                        
                    </div>
                </slide> 
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </div>
    </section>
</template>

<script setup>
import {ref} from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
// carousel settings
const setting =ref({
    itemsToShow: 1,
    snapAlign:"center",
});

// Breakpoints
const breakpoints = ref({
    700:{
        itemsToShow: 2.5,
        snapAlign:'center',
    },
    1024:{
        itemsToShow: 3,
        snapAlign:'start',
    },
});

const testimonials = ref([
    {
        id:1,
        fullName: 'Jhon Doe',
        image:'/img/samim.jpg',
        comments: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi excepturi minima, omnis nulla veniam id. Doloribus rerum aspernatur dolores obcaecati!',
    },
    {
        id:2,
        fullName: 'Farklin',
        image:'/img/samim.jpg',
        comments: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi excepturi minima, omnis nulla veniam id. Doloribus rerum aspernatur dolores obcaecati!',
    },
    {
        id:3,
        fullName: 'Trober',
        image:'/img/samim.jpg',
        comments: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi excepturi minima, omnis nulla veniam id. Doloribus rerum aspernatur dolores obcaecati!',
    },
    {
        id:4,
        fullName: 'Michale',
        image:'/img/samim.jpg',
        comments: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi excepturi minima, omnis nulla veniam id. Doloribus rerum aspernatur dolores obcaecati!',
    },
    {
        id:5,
        fullName: 'Crocodile',
        image:'/img/samim.jpg',
        comments: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi excepturi minima, omnis nulla veniam id. Doloribus rerum aspernatur dolores obcaecati!',
    },
]);
</script>

<style>
.carousel__prev,
.carousel__next{
    color: white;
}
</style>