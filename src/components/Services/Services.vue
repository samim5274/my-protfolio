<template>
    <div class="bg-[#111827] min-h-screen">
        <Navbar />
        <Services />

        <section class="text-white mt-20 container mx-auto" id="services">
            <div class="px-4 xl:pl-16">
                <h2 class=" text-4xl font-bold text-white mb-4">My Service List</h2>
            </div>
            <div class="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
                <div v-for="service in projectLists" :key="service.id" data-aos="fade-up" @click="goDetails(service.id, service.title)" class="px-8 py-12 rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]">
                    <div class="mx-auto h-24 text-center xl:h-28 xl:w-28">
                        <div>
                            <i :class="service.icon + ' text-6xl mb-3'"></i>
                        </div>
                    </div>
                    <div class="text-center">
                        <h3 class="pt-8 text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-green-500 lg:text-xl">{{ service.title }}</h3>
                        <div class="pt-4 flex flex-wrap gap-2">
                            <span
                                v-for="(tech, index) in service.technologies"
                                :key="index"
                                class="px-3 py-1 text-xs md:text-sm rounded-full 
                                    bg-slate-800 text-gray-300 
                                    border border-slate-700
                                    transition-all duration-300
                                    group-hover:bg-blue-600 
                                    group-hover:text-white 
                                    group-hover:border-blue-500">
                                {{ tech }}
                            </span>
                        </div>
                    </div>
                </div>
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
import Services from "../Services.vue";

const router = useRouter();

function goDetails(id,title){
    router.push(`/service/${title}/${id}`);
}

const projectLists = ref([
    // =========================
    // Education Management
    // =========================
    {
        id: 1,
        title: "School Management System",
        icon: "fa-solid fa-school",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },
    {
        id: 2,
        title: "College Management System",
        icon: "fa-solid fa-graduation-cap",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },

    // =========================
    // Healthcare Management
    // =========================
    {
        id: 3,
        title: "Hospital Management System",
        icon: "fa-solid fa-hospital",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },
    {
        id: 4,
        title: "Pharmacy Management System",
        icon: "fa-solid fa-prescription-bottle-medical",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },
    {
        id: 5,
        title: "Laboratory Management System",
        icon: "fa-solid fa-flask",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },

    // =========================
    // Retail & Sales
    // =========================
    {
        id: 6,
        title: "POS System",
        icon: "fa-solid fa-cash-register",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },
    {
        id: 7,
        title: "Restaurant Management System",
        icon: "fa-solid fa-utensils",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },
    {
        id: 8,
        title: "Bakery Management System",
        icon: "fa-solid fa-bread-slice",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },
    {
        id: 9,
        title: "Stationery Management System",
        icon: "fa-solid fa-pen-ruler",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },

    // =========================
    // Inventory & Operations
    // =========================
    {
        id: 10,
        title: "Inventory Management System",
        icon: "fa-solid fa-boxes-stacked",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },
    {
        id: 11,
        title: "Stock Management System",
        icon: "fa-solid fa-warehouse",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },
    {
        id: 12,
        title: "Warehouse Management System",
        icon: "fa-solid fa-industry",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },
    {
        id: 13,
        title: "Production & Manufacturing Management System",
        icon: "fa-solid fa-gears",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },

    // =========================
    // Logistics & Travel
    // =========================
    {
        id: 14,
        title: "Courier & Parcel Tracking System",
        icon: "fa-solid fa-truck-fast",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },
    {
        id: 15,
        title: "Tour & Travel Agency Management System",
        icon: "fa-solid fa-plane-departure",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },
    {
        id: 16,
        title: "Vehicle Rental Management System",
        icon: "fa-solid fa-car",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },

    // =========================
    // Hospitality & Booking
    // =========================
    {
        id: 17,
        title: "Hotel & Resort Booking Management System",
        icon: "fa-solid fa-hotel",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },
    {
        id: 18,
        title: "Event Management System",
        icon: "fa-solid fa-calendar-check",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },

    // =========================
    // Business & Enterprise
    // =========================
    {
        id: 19,
        title: "HR & Payroll Management System",
        icon: "fa-solid fa-users-gear",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },
    {
        id: 20,
        title: "CRM (Customer Relationship Management) System",
        icon: "fa-solid fa-handshake",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },
    {
        id: 21,
        title: "Club Management System",
        icon: "fa-solid fa-people-group",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },

    // =========================
    // Finance
    // =========================
    {
        id: 22,
        title: "Accounting & Billing Software",
        icon: "fa-solid fa-file-invoice-dollar",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },
    {
        id: 23,
        title: "Expense Tracking System",
        icon: "fa-solid fa-chart-pie",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },
    {
        id: 24,
        title: "Loan Management System",
        icon: "fa-solid fa-money-bill-wave",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },
    {
        id: 25,
        title: "Microfinance Management System",
        icon: "fa-solid fa-building-columns",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },
    {
        id: 26,
        title: "Subscription Management System",
        icon: "fa-solid fa-repeat",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },

    // =========================
    // E-commerce
    // =========================
    {
        id: 27,
        title: "E-Commerce Platform (Single / Multi-Vendor)",
        icon: "fa-solid fa-cart-shopping",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },
    {
        id: 28,
        title: "Freelance Marketplace Platform",
        icon: "fa-solid fa-laptop-code",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },

    // =========================
    // Real Estate & Agriculture
    // =========================
    {
        id: 29,
        title: "Real Estate Property Management System",
        icon: "fa-solid fa-house",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },
    {
        id: 30,
        title: "Agro Firm Management System",
        icon: "fa-solid fa-leaf",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },

    // =========================
    // Fitness
    // =========================
    {
        id: 31,
        title: "Gym Management System",
        icon: "fa-solid fa-dumbbell",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },

    // =========================
    // Content
    // =========================
    {
        id: 32,
        title: "Multi-User Blogging Platform",
        icon: "fa-solid fa-blog",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },
    {
        id: 33,
        title: "Personal Blog App",
        icon: "fa-solid fa-pen-nib",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },
    {
        id: 34,
        title: "News Portal Website",
        icon: "fa-solid fa-newspaper",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },

    // =========================
    // Career
    // =========================
    {
        id: 35,
        title: "Job Portal Website",
        icon: "fa-solid fa-briefcase",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },

    // =========================
    // Portfolio
    // =========================
    {
        id: 36,
        title: "Personal & Business Landing Page",
        icon: "fa-solid fa-globe",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },
    {
        id: 37,
        title: "Personal Portfolio",
        icon: "fa-solid fa-user",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },

    // =========================
    // Analytics
    // =========================
    {
        id: 38,
        title: "Smart Expense Analyzer (Graphs & Reports)",
        icon: "fa-solid fa-chart-line",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },
    {
        id: 39,
        title: "Sales Prediction Dashboard",
        icon: "fa-solid fa-arrow-trend-up",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },
    {
        id: 40,
        title: "Business Analytics Dashboard (Charts & Reports)",
        icon: "fa-solid fa-chart-column",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        demoURL: "",
    },
]);

</script>

<style>

</style>