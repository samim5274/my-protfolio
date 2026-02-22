<template>
  <section class="text-white mt-20" id="testimonials" data-aos="zoom-in">
    <div class="px-4 xl:px-16">
      <div class="flex items-end justify-between gap-4 mb-6">
        <div>
          <h2 class="text-4xl font-bold text-left">Testimonials</h2>
          <p class="text-sm text-[#adb7be] mt-2 max-w-2xl">
            Feedback from people I’ve worked with—focused on code quality, communication, and delivery.
          </p>
        </div>

        <div class="hidden md:flex items-center gap-2 text-sm text-[#adb7be]">
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1f1641] bg-[#111a3e]">
            <span class="h-2 w-2 rounded-full bg-[#A3D921]"></span>
            Trusted collaborations
          </span>
        </div>
      </div>

      <Carousel v-bind="setting" :breakpoints="breakpoints">
        <Slide v-for="t in testimonials" :key="t.id">
          <div class="p-4">
            <article
              class="h-full w-full mx-auto rounded-2xl border border-[#1f1641] bg-[#0f1636]/80 backdrop-blur-md shadow-lg p-6"
            >
              <header class="flex items-start justify-between gap-4">
                <div class="flex items-center gap-4 min-w-0">
                  <div class="overflow-hidden rounded-full w-14 h-14 border border-white/10 bg-[#111a3e] shrink-0">
                    <img :src="t.image" :alt="`${t.fullName} photo`" loading="lazy" class="w-full h-full object-cover" />
                  </div>

                  <div class="min-w-0">
                    <div class="flex items-center gap-2">
                      <h6 class="font-semibold text-base text-white truncate">{{ t.fullName }}</h6>
                      <span
                        v-if="t.verified"
                        class="text-[11px] px-2 py-0.5 rounded-full border border-[#1f1641] bg-[#111a3e] text-[#A3D921]"
                        title="Verified"
                      >
                        ✓ Verified
                      </span>
                    </div>

                    <p class="text-xs text-[#adb7be] truncate">
                      {{ t.role }} <span class="text-white/30">•</span> {{ t.company }}
                    </p>

                    <!-- Rating -->
                    <div class="mt-2 flex items-center gap-1" aria-label="rating">
                      <span v-for="i in 5" :key="i" class="text-sm" :class="i <= t.rating ? 'text-[#A3D921]' : 'text-white/20'">
                        ★
                      </span>
                      <span class="ml-2 text-xs text-[#adb7be]">{{ t.date }}</span>
                    </div>
                  </div>
                </div>

                <div class="text-white/30 text-4xl leading-none select-none">“</div>
              </header>

              <div class="mt-4">
                <p class="text-sm leading-relaxed text-gray-200">
                  {{ t.comments }}
                </p>
              </div>

              <footer class="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#adb7be]">
                <span class="inline-flex items-center gap-2">
                  <span class="h-2 w-2 rounded-full bg-[#046425]"></span>
                  Project: {{ t.project }}
                </span>
                <span>{{ t.location }}</span>
              </footer>
            </article>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const setting = ref({
  itemsToShow: 1,
  snapAlign: "center",
  wrapAround: true,
  transition: 450,
});

const breakpoints = ref({
  700: { itemsToShow: 2, snapAlign: "center" },
  1024: { itemsToShow: 3, snapAlign: "start" },
});

const testimonials = ref([
    {
        id: 1,
        fullName: "Shahed Parvej",
        role: "Team Lead & SEO Expert",
        company: "Soft Agency",
        image: "/img/testimonials/shahed.jpg",
        rating: 5,
        verified: true,
        date: "Sep 2025",
        project: "Frontend Collaboration",
        location: "Sirajgonj, BD",
        comments:
        "Reliable teammate. He handled the frontend tasks responsibly, pushed clean commits, and helped debug issues quickly. The project’s UI became much more organized after his contribution.",
    },
    {
        id: 2,
        fullName: "Swapon Kumar Shaha",
        role: "MERN Developer",
        company: "Web Agency",
        image: "/img/testimonials/swapon.jpg",
        rating: 5,
        verified: true,
        date: "Dec 2025",
        project: "Vue + Tailwind Components",
        location: "Tamgail, BD",
        comments:
        "Strong Vue fundamentals. He structured components neatly, kept styles consistent, and improved reusability. The codebase was easy to maintain and the UI looked professional across devices.",
    },
    {
        id: 3,
        fullName: "Ayesha Rahman",
        role: "Product Manager",
        company: "Local Commerce Platform",
        image: "/img/testimonials/Ayesha_Rahman.jpeg",
        rating: 5,
        verified: false,
        date: "Jan 2026",
        project: "Portfolio + Landing UI",
        location: "Dhaka, BD",
        comments:
        "Samim delivered a clean, modern UI with great attention to detail. Communication was smooth, updates were frequent, and the final result matched our expectations. The layout is responsive and performance is solid.", 
    },
    {
        id: 4,
        fullName: "Fiza Akter",
        role: "Founder",
        company: "Small Business Brand",
        image: "/img/testimonials/fiza.jpeg",
        rating: 5,
        verified: false,
        date: "Nov 2025",
        project: "Contact Form + Email Integration",
        location: "Gazipur, BD",
        comments:
        "The contact section and email integration work perfectly. I can receive messages instantly, and the form feels secure and user-friendly. Also, he explained how to manage templates and environment keys clearly.",
    },
    {
        id: 5,
        fullName: "Mehedi Islam",
        role: "Software Developer",
        company: "Design Studio",
        image: "/img/testimonials/mehedi.jpg",
        rating: 4,
        verified: true,
        date: "Oct 2025",
        project: "UI Polish & Accessibility",
        location: "Dhaka, BD",
        comments:
        "Great at implementing design feedback quickly. Typography and spacing were improved, and hover/focus states feel consistent. With a bit more time, we could add more micro-interactions, but overall very good.", 
    },
]);
</script>

<style>
.carousel__prev,
.carousel__next {
    color: white;
    background: rgba(17, 26, 62, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 9999px;
}

.carousel__prev:hover,
.carousel__next:hover {
    color: rgba(255, 255, 255, 0.733);
    background: rgba(17, 26, 62, 0.9);
}

.carousel__pagination-button::after {
    background: rgba(255, 255, 255, 0.25);
}
.carousel__pagination-button--active::after {
    background: rgba(163, 217, 33, 0.9);
}
</style>