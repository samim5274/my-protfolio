<template>
    <div class="bg-[#111827] min-h-screen">
        <Navbar />

        <section class="container mx-auto mt-20 px-4 xl:px-16 py-10">
            <!-- Header -->
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div class="flex items-start gap-4">
                <div class="h-16 w-16 rounded-2xl bg-gradient-to-r from-[#A3D921] to-[#046425] border border-[#1f1641] flex items-center justify-center">
                    <i :class="service?.icon + ' text-3xl text-gray-50'"></i>
                </div>
                <div>
                    <p class="text-xs uppercase tracking-widest text-gray-100">{{ service?.category }}</p>
                    <h1 class="text-3xl md:text-4xl font-bold"><span class="text-transparent bg-clip-text bg-gradient-to-r from-[#A3D921] to-[#046425]">{{ service?.title }}</span></h1>
                    <p class="text-gray-100 mt-2 max-w-2xl">{{ service?.shortDesc }}</p>
                </div>
                </div>

                <div class="flex gap-3">
                    <a
                        v-if="service?.demoURL"
                        :href="service.demoURL"
                        target="_blank"
                        class="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-gray-100 transition">
                        Live Demo
                    </a>

                    <button
                        @click="router.back()"
                        class="px-5 py-2 rounded-xl bg-gradient-to-r from-[#A3D921] to-[#046425] border border-[#046425] hover:border-[#A3D921] transition">
                        Back
                    </button>
                </div>
            </div>

            <!-- Tech Stack -->
            <div class="mt-8">
                <h2 class="text-xl text-gray-100 font-semibold">Tech Stack</h2>
                <div class="mt-3 flex flex-wrap gap-2">
                <span
                    v-for="(tech, i) in service?.technologies || []"
                    :key="i"
                    class="px-3 py-1 text-xs md:text-sm rounded-full bg-slate-800 text-gray-200 border border-slate-700"
                >
                    {{ tech }}
                </span>
                </div>
            </div>

            <!-- Features -->
            <div class="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="p-6 rounded-2xl bg-[#111a3e] border border-[#1f1641]">
                <h2 class="text-xl font-semibold mb-4 text-gray-100">Key Features</h2>

                <ul class="space-y-3">
                    <li v-for="(f, i) in service?.features || []" :key="i" class="flex gap-3 text-gray-200">
                    <i class="fa-solid fa-check text-green-400 mt-1"></i>
                    <span>{{ f }}</span>
                    </li>
                </ul>
                </div>

                <!-- Extra Info Card -->
                <div class="p-6 rounded-2xl bg-[#111a3e] border border-[#1f1641]">
                <h2 class="text-xl font-semibold mb-4 text-gray-100">Project Overview</h2>
                <div class="space-y-3 text-gray-300">
                    <p><span class="text-gray-400">Type:</span> Web Application</p>
                    <p><span class="text-gray-400">Database:</span> MySQL</p>
                    <p><span class="text-gray-400">Authentication:</span> Role Based</p>
                    <p><span class="text-gray-400">Reports:</span> PDF / Printable Reports</p>
                </div>
                </div>
            </div>

            <!-- Not Found -->
            <div v-if="!service" class="mt-10 p-6 rounded-2xl bg-red-500/10 border border-red-500/30">
                <h2 class="text-xl font-semibold">Service not found</h2>
                <p class="text-gray-300 mt-2">Invalid service id. Please go back and select a valid service.</p>
            </div>
            </section>

        <Footer />
        <BackToTop />
    </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import Navbar from '../Navbar.vue';
import Footer from "../Footer.vue";
import BackToTop from "../BackToTop.vue";

const router = useRouter();
const route = useRoute();

const projectLists = ref([
    // =========================
    // Education Management
    // =========================
    {
        id: 1,
        title: "School Management System",
        icon: "fa-solid fa-school",
        category: "Education",
        shortDesc:
        "A complete school automation system for students, teachers, classes, exams, attendance and fees management.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Role-based access (Admin/Teacher/Student)",
        "Student admission & profile management",
        "Class, section, subject management",
        "Attendance & leave management",
        "Exam, result & report card",
        "Fees collection, invoices & due tracking",
        ],
        demoURL: "https://haac.wambbs.com/",
    },
    {
        id: 2,
        title: "College Management System",
        icon: "fa-solid fa-graduation-cap",
        category: "Education",
        shortDesc:
        "College operations system for departments, students, teachers, routines, attendance and result management.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Department, batch & semester management",
        "Student enrollment & ID/profile",
        "Teacher/Staff management & permissions",
        "Class routine & notice board",
        "Attendance & performance tracking",
        "Semester results, transcripts & reports",
        ],
        demoURL: "",
    },

    // =========================
    // Healthcare Management
    // =========================
    {
        id: 3,
        title: "Hospital Management System",
        icon: "fa-solid fa-hospital",
        category: "Healthcare",
        shortDesc:
        "Hospital solution for appointments, patients, doctors, billing, lab workflow and reporting dashboard.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Patient registration & medical history",
        "Doctor schedule & appointment booking",
        "OPD/IPD patient management",
        "Billing, invoices & payments",
        "Lab test requests & report delivery",
        "Daily/Monthly analytics dashboard",
        ],
        demoURL: "",
    },
    {
        id: 4,
        title: "Pharmacy Management System",
        icon: "fa-solid fa-prescription-bottle-medical",
        category: "Healthcare",
        shortDesc:
        "Pharmacy software to manage medicines, purchase/sales, stock expiry alerts and invoices.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Medicine catalog with batch & expiry",
        "Supplier purchase & purchase return",
        "POS sales with invoice printing",
        "Stock in/out & low stock alert",
        "Expiry tracking & notifications",
        "Sales reports, profit & summaries",
        ],
        demoURL: "",
    },
    {
        id: 5,
        title: "Laboratory Management System",
        icon: "fa-solid fa-flask",
        category: "Healthcare",
        shortDesc:
        "Lab management system for test orders, sample tracking, results, billing and reporting.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Test catalog & pricing setup",
        "Patient test order & barcode/sample",
        "Sample status tracking workflow",
        "Result entry, verification & print",
        "Billing, invoices & payments",
        "Daily test volume & revenue reports",
        ],
        demoURL: "",
    },

    // =========================
    // Retail & Sales
    // =========================
    {
        id: 6,
        title: "POS System",
        icon: "fa-solid fa-cash-register",
        category: "Retail",
        shortDesc:
        "Fast POS system for selling products, managing inventory, customers, invoices and daily reports.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Barcode/quick product search & cart",
        "Customer management & purchase history",
        "Discount/coupon & tax setup",
        "Invoice printing & returns",
        "Stock sync with inventory module",
        "Daily sales, profit & cashier reports",
        ],
        demoURL: "",
    },
    {
        id: 7,
        title: "Restaurant Management System",
        icon: "fa-solid fa-utensils",
        category: "Restaurant",
        shortDesc:
        "Restaurant system for orders, kitchen workflow, tables, billing, and sales analytics.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Menu, categories & variants management",
        "Table booking & dine-in order flow",
        "Kitchen order ticket (KOT) workflow",
        "Takeaway/delivery order management",
        "Bills, invoices & payment methods",
        "Sales, popular items & revenue reports",
        ],
        demoURL: "",
    },
    {
        id: 8,
        title: "Bakery Management System",
        icon: "fa-solid fa-bread-slice",
        category: "Retail",
        shortDesc:
        "Bakery software to manage products, daily production, sales, inventory and customer orders.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Product & recipe/ingredient tracking",
        "Daily production planning & logs",
        "Counter sales POS with invoice",
        "Custom orders & delivery schedule",
        "Ingredient stock & wastage tracking",
        "Daily sales & production reports",
        ],
        demoURL: "",
    },
    {
        id: 9,
        title: "Stationery Management System",
        icon: "fa-solid fa-pen-ruler",
        category: "Retail",
        shortDesc:
        "Stationery shop management system for inventory, purchase, sales, invoices and supplier tracking.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Product categories & brand management",
        "Purchase, supplier & due tracking",
        "Sales POS with invoice printing",
        "Stock alerts & reorder levels",
        "Customer ledger & history",
        "Sales & profit reports",
        ],
        demoURL: "",
    },

    // =========================
    // Inventory & Operations
    // =========================
    {
        id: 10,
        title: "Inventory Management System",
        icon: "fa-solid fa-boxes-stacked",
        category: "Operations",
        shortDesc:
        "Inventory system to manage products, stock movement, purchases, sales and warehouse control.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Product, category & unit management",
        "Purchase & supplier management",
        "Stock in/out & adjustments",
        "Low stock alerts & reorder",
        "Multi-warehouse support (optional)",
        "Inventory valuation & reports",
        ],
        demoURL: "",
    },
    {
        id: 11,
        title: "Stock Management System",
        icon: "fa-solid fa-warehouse",
        category: "Operations",
        shortDesc:
        "Stock monitoring system focused on real-time stock level tracking, transfers and reconciliation.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Stock dashboard & quick insights",
        "Stock transfer between locations",
        "Damage/return stock handling",
        "Stock audit & reconciliation",
        "Batch/serial tracking (optional)",
        "Stock movement history reports",
        ],
        demoURL: "",
    },
    {
        id: 12,
        title: "Warehouse Management System",
        icon: "fa-solid fa-industry",
        category: "Operations",
        shortDesc:
        "Warehouse system for receiving, storing, picking, dispatching and tracking goods with reports.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Inbound receiving & GRN management",
        "Bin/rack location tracking",
        "Pick/pack & dispatch workflow",
        "Stock transfer & adjustments",
        "Supplier/customer shipment history",
        "Warehouse performance reports",
        ],
        demoURL: "",
    },
    {
        id: 13,
        title: "Production & Manufacturing Management System",
        icon: "fa-solid fa-gears",
        category: "Manufacturing",
        shortDesc:
        "Manufacturing software to manage BOM, raw materials, production orders, costing and reports.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Bill of Materials (BOM) management",
        "Raw material stock & consumption",
        "Production order planning & tracking",
        "Finished goods stock update",
        "Production costing & wastage",
        "Production summary & analytics",
        ],
        demoURL: "",
    },

    // =========================
    // Logistics & Travel
    // =========================
    {
        id: 14,
        title: "Courier & Parcel Tracking System",
        icon: "fa-solid fa-truck-fast",
        category: "Logistics",
        shortDesc:
        "Courier platform for parcel booking, hub scanning, delivery tracking and customer notifications.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Parcel booking & shipping labels",
        "Tracking ID generation & scan logs",
        "Hub/branch transfer workflow",
        "Delivery status updates & proof",
        "Customer SMS/Email notifications",
        "Delivery & revenue reports",
        ],
        demoURL: "",
    },
    {
        id: 15,
        title: "Tour & Travel Agency Management System",
        icon: "fa-solid fa-plane-departure",
        category: "Travel",
        shortDesc:
        "Travel agency system for packages, bookings, payments, customers and invoice management.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Tour packages & itinerary builder",
        "Customer inquiry & booking management",
        "Payment schedule & due tracking",
        "Invoice & voucher generation",
        "Agent/partner commission tracking",
        "Booking & sales reports",
        ],
        demoURL: "",
    },
    {
        id: 16,
        title: "Vehicle Rental Management System",
        icon: "fa-solid fa-car",
        category: "Travel",
        shortDesc:
        "Vehicle rental solution for fleet, bookings, driver assignment, billing and schedule tracking.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Fleet management & vehicle documents",
        "Booking calendar & availability",
        "Driver assignment & trip logs",
        "Rental billing & payment tracking",
        "Damage reports & maintenance alerts",
        "Rental analytics & income reports",
        ],
        demoURL: "",
    },

    // =========================
    // Hospitality & Booking
    // =========================
    {
        id: 17,
        title: "Hotel & Resort Booking Management System",
        icon: "fa-solid fa-hotel",
        category: "Hospitality",
        shortDesc:
        "Hotel booking system for rooms, reservations, check-in/out, billing and guest management.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Room types, pricing & seasonal rates",
        "Reservation & availability calendar",
        "Check-in / check-out workflow",
        "Guest profiles & history",
        "Invoices, payments & refunds",
        "Occupancy & revenue reports",
        ],
        demoURL: "",
    },
    {
        id: 18,
        title: "Event Management System",
        icon: "fa-solid fa-calendar-check",
        category: "Booking",
        shortDesc:
        "Event platform for creating events, ticketing, attendee management and reporting dashboard.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Event creation & schedule management",
        "Ticket types, pricing & quotas",
        "Online registration & attendee list",
        "QR/Code check-in system",
        "Invoice/payment integration (basic)",
        "Event analytics & attendance reports",
        ],
        demoURL: "",
    },

    // =========================
    // Business & Enterprise
    // =========================
    {
        id: 19,
        title: "HR & Payroll Management System",
        icon: "fa-solid fa-users-gear",
        category: "Business",
        shortDesc:
        "HR software for employees, attendance, leave, payroll processing and salary reports.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Employee profiles & departments",
        "Attendance, shifts & overtime",
        "Leave requests & approvals",
        "Payroll generation & payslips",
        "Tax/deduction & allowance setup",
        "HR reports & payroll summaries",
        ],
        demoURL: "",
    },
    {
        id: 20,
        title: "CRM (Customer Relationship Management) System",
        icon: "fa-solid fa-handshake",
        category: "Business",
        shortDesc:
        "CRM system to manage leads, customers, pipelines, follow-ups and sales reporting.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Lead capture & customer management",
        "Pipeline stages & deal tracking",
        "Task, notes & follow-up reminders",
        "Email/Call log (manual tracking)",
        "Quotation/invoice (optional module)",
        "Sales performance dashboard",
        ],
        demoURL: "",
    },
    {
        id: 21,
        title: "Club Management System",
        icon: "fa-solid fa-people-group",
        category: "Organization",
        shortDesc:
        "Club management platform for members, subscriptions, events, payments and announcements.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Member registration & profile",
        "Membership plans & renewals",
        "Event management & RSVP",
        "Payments, receipts & due tracking",
        "Notice board & announcements",
        "Member/activity reports",
        ],
        demoURL: "",
    },

    // =========================
    // Finance
    // =========================
    {
        id: 22,
        title: "Accounting & Billing Software",
        icon: "fa-solid fa-file-invoice-dollar",
        category: "Finance",
        shortDesc:
        "Accounting and billing system for invoices, expenses, payments, ledgers and financial reports.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Invoice/quotation creation & printing",
        "Customer & supplier ledger",
        "Expense tracking & categories",
        "Payment collection & due management",
        "Profit/loss summary (basic)",
        "Monthly financial reports",
        ],
        demoURL: "",
    },
    {
        id: 23,
        title: "Expense Tracking System",
        icon: "fa-solid fa-chart-pie",
        category: "Finance",
        shortDesc:
        "Personal/business expense tracker with category-wise expenses, daily logs and summary reports.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Income/expense categories & budgets",
        "Daily expense entry with notes",
        "Month-wise and category reports",
        "Export/print summary reports",
        "Search/filter by date & category",
        "Dashboard with quick charts",
        ],
        demoURL: "",
    },
    {
        id: 24,
        title: "Loan Management System",
        icon: "fa-solid fa-money-bill-wave",
        category: "Finance",
        shortDesc:
        "Loan system for borrowers, installments, interest calculation, payments and due reminders.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Borrower profiles & verification",
        "Loan creation with terms & interest",
        "Installment schedules & tracking",
        "Payment collection & receipts",
        "Overdue/due alerts & reports",
        "Loan portfolio dashboard",
        ],
        demoURL: "",
    },
    {
        id: 25,
        title: "Microfinance Management System",
        icon: "fa-solid fa-building-columns",
        category: "Finance",
        shortDesc:
        "Microfinance platform for member groups, savings, loans, collections and officer reporting.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Member & group management",
        "Savings collection & statements",
        "Loan disbursement & schedules",
        "Field officer collection tracking",
        "Due/overdue monitoring & reports",
        "Branch-wise analytics dashboard",
        ],
        demoURL: "",
    },
    {
        id: 26,
        title: "Subscription Management System",
        icon: "fa-solid fa-repeat",
        category: "Business",
        shortDesc:
        "Subscription billing system for plans, recurring payments, renewals and subscriber management.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Plan/package management",
        "Subscriber registration & access control",
        "Renewal and expiry tracking",
        "Invoices, payments & receipts",
        "Auto reminders (email/sms optional)",
        "MRR/renewal reports (basic)",
        ],
        demoURL: "",
    },

    // =========================
    // E-commerce
    // =========================
    {
        id: 27,
        title: "E-Commerce Platform (Single / Multi-Vendor)",
        icon: "fa-solid fa-cart-shopping",
        category: "E-Commerce",
        shortDesc:
        "Modern e-commerce platform with products, orders, checkout, payments and vendor management.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Product, category & inventory",
        "Cart, checkout & order tracking",
        "Multi-vendor shop (optional)",
        "Coupon/discount & campaign system",
        "Admin panel with sales reports",
        "Invoice generation & notifications",
        ],
        demoURL: "",
    },
    {
        id: 28,
        title: "Freelance Marketplace Platform",
        icon: "fa-solid fa-laptop-code",
        category: "Marketplace",
        shortDesc:
        "Marketplace platform for posting projects, bidding, milestones, messaging and payments workflow.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Client & freelancer role system",
        "Project posting & bid proposals",
        "Milestones & progress tracking",
        "Chat/messaging module (basic)",
        "Reviews & ratings system",
        "Admin controls & dispute handling",
        ],
        demoURL: "",
    },

    // =========================
    // Real Estate & Agriculture
    // =========================
    {
        id: 29,
        title: "Real Estate Property Management System",
        icon: "fa-solid fa-house",
        category: "Real Estate",
        shortDesc:
        "Property management solution for listings, clients, rent tracking, agreements and reports.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Property listing with photos & status",
        "Client/inquiry management",
        "Rent collection & due tracking",
        "Tenant profiles & agreements",
        "Maintenance requests & logs",
        "Property performance reports",
        ],
        demoURL: "",
    },
    {
        id: 30,
        title: "Agro Firm Management System",
        icon: "fa-solid fa-leaf",
        category: "Agriculture",
        shortDesc:
        "Agro firm system for farm operations, inventory, sales, expenses and production reporting.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Farm products & seasonal planning",
        "Purchase/stock of seeds & materials",
        "Expense & labor cost tracking",
        "Sales orders & invoices",
        "Production/yield reporting",
        "Profit analysis & dashboards",
        ],
        demoURL: "",
    },

    // =========================
    // Fitness
    // =========================
    {
        id: 31,
        title: "Gym Management System",
        icon: "fa-solid fa-dumbbell",
        category: "Fitness",
        shortDesc:
        "Gym management software for members, packages, renewals, attendance and payment tracking.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Member registration & profiles",
        "Membership plans & renewals",
        "Attendance tracking & check-ins",
        "Payment collection & invoices",
        "Trainer assignment (optional)",
        "Revenue and member growth reports",
        ],
        demoURL: "",
    },

    // =========================
    // Content
    // =========================
    {
        id: 32,
        title: "Multi-User Blogging Platform",
        icon: "fa-solid fa-blog",
        category: "Content",
        shortDesc:
        "Multi-user blogging system with roles, categories, SEO-friendly posts and moderation tools.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Author/editor/admin role system",
        "Post editor with draft/publish flow",
        "Categories, tags & featured posts",
        "Comments moderation & spam control",
        "SEO meta & readable URLs",
        "Analytics: views & popular posts",
        ],
        demoURL: "",
    },
    {
        id: 33,
        title: "Personal Blog App",
        icon: "fa-solid fa-pen-nib",
        category: "Content",
        shortDesc:
        "Personal blog app to publish articles, manage categories, comments and simple analytics.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Post create/edit with image upload",
        "Category & tag management",
        "Public blog pages & search",
        "Comment system with moderation",
        "SEO meta fields & slugs",
        "Admin dashboard & statistics",
        ],
        demoURL: "",
    },
    {
        id: 34,
        title: "News Portal Website",
        icon: "fa-solid fa-newspaper",
        category: "Content",
        shortDesc:
        "News portal with categories, breaking news, editor workflow, ads placement and analytics.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "News categories & sections",
        "Breaking news & featured slider",
        "Editor/author approval workflow",
        "Comments & moderation tools",
        "Ads/banner management (basic)",
        "Traffic and popular news reports",
        ],
        demoURL: "",
    },

    // =========================
    // Career
    // =========================
    {
        id: 35,
        title: "Job Portal Website",
        icon: "fa-solid fa-briefcase",
        category: "Career",
        shortDesc:
        "Job portal for posting jobs, applying online, managing candidates and employer dashboards.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Employer & candidate accounts",
        "Job posting with filters & categories",
        "Online application & CV upload",
        "Candidate shortlist and status tracking",
        "Email notifications (optional)",
        "Admin moderation & reports",
        ],
        demoURL: "",
    },

    // =========================
    // Portfolio
    // =========================
    {
        id: 36,
        title: "Personal & Business Landing Page",
        icon: "fa-solid fa-globe",
        category: "Web Design",
        shortDesc:
        "Modern responsive landing page for personal brand or business with contact and service sections.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Responsive UI with modern sections",
        "Services & pricing sections",
        "Contact form with validation",
        "SEO friendly structure",
        "Fast loading and smooth animations",
        "Admin editable content (optional)",
        ],
        demoURL: "",
    },
    {
        id: 37,
        title: "Personal Portfolio",
        icon: "fa-solid fa-user",
        category: "Portfolio",
        shortDesc:
        "Developer portfolio website showcasing skills, services, projects, and contact information.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Projects/Services showcase section",
        "Tech stack badges & details pages",
        "Contact form + email integration",
        "SEO optimized pages & routes",
        "Smooth animations and modern UI",
        "Admin editable portfolio (optional)",
        ],
        demoURL: "",
    },

    // =========================
    // Analytics
    // =========================
    {
        id: 38,
        title: "Smart Expense Analyzer (Graphs & Reports)",
        icon: "fa-solid fa-chart-line",
        category: "Analytics",
        shortDesc:
        "Expense analytics tool with charts, insights, downloadable reports and budget monitoring.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Category-wise chart analytics",
        "Monthly/weekly trend insights",
        "Budget limit & overspend alerts",
        "Export PDF/CSV reports",
        "Filters by date, category & user",
        "Dashboard with KPIs and summaries",
        ],
        demoURL: "",
    },
    {
        id: 39,
        title: "Sales Prediction Dashboard",
        icon: "fa-solid fa-arrow-trend-up",
        category: "Analytics",
        shortDesc:
        "Sales dashboard with KPI charts, trend analysis and forecasting-ready data visualization.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Sales KPI cards & charts",
        "Date range filtering & comparisons",
        "Top products/customers insights",
        "Export reports (PDF/CSV)",
        "Role based access for managers",
        "Performance and growth analytics",
        ],
        demoURL: "",
    },
    {
        id: 40,
        title: "Business Analytics Dashboard (Charts & Reports)",
        icon: "fa-solid fa-chart-column",
        category: "Analytics",
        shortDesc:
        "Business analytics dashboard for reporting key metrics, charts, trends and downloadable summaries.",
        technologies: ["Laravel 10", "Blade", "Vue", "MySQL DB"],
        features: [
        "Custom dashboard KPI widgets",
        "Charts: sales, expenses, growth",
        "Reports with filters & drilldowns",
        "Printable & exportable summaries",
        "User roles and access controls",
        "Monthly/quarterly overview reports",
        ],
        demoURL: "",
    },
]);

// URL থেকে id নিলাম
const serviceId = computed(() => Number(route.params.id));

// ঐ id অনুযায়ী service বের করলাম
const service = computed(() => {
    return projectLists.value.find((p) => p.id === serviceId.value);
});

// (optional) URL title mismatch হলেও fix করতে চাইলে (SEO friendly)
function slugify(text) {
    return String(text)
        .toLowerCase()
        .trim()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
}

// যদি user wrong title দিয়ে আসে, correct title দিয়ে replace করে দিবে
watch(
    () => route.params,
    () => {
        if (!service.value) return;

        const correctTitle = slugify(service.value.title);
        if (route.params.title !== correctTitle) {
        router.replace({
            name: "ServiceDetails",
            params: { id: service.value.id, title: correctTitle },
        });
        }
    },
    { immediate: true }
);
</script>

<style>

</style>