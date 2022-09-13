import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomePage/HomeView.vue";
import CraftChocolateView from "@/views/CraftChocolate/CraftChocolateView.vue";
import TheHeader from "@/components/TheNavigator/TheHeader.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      components: { navigation: TheHeader, default: HomeView },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/craftChocolate",
      name: "craftChocolate",
      components: {
        navigation: TheHeader,
        default: CraftChocolateView,
      },
    },
  ],
});

export default router;
