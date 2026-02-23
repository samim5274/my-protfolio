import { createRouter, createWebHistory } from "vue-router";

import home from "../components/home.vue";
import about from "../components/About/AboutSection.vue";
import Projects from '../components/Projects/project.vue'
import Contact from "../components/Contact/Contact.vue";
import login from "../components/Login/login.vue";
import Services from "../components/Services/Services.vue";

const routes = [
  { path: '/', component: home },
  { path: '/about', component: about },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact },
  { path: '/login', component: login },
  { path: '/services', component: Services },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
