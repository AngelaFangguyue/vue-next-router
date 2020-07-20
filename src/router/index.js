import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import Contact from "../views/Contact.vue";

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: Main,
    },
    {
      path: "/contact",
      component: Contact,
    },
  ],
});

export default router;
