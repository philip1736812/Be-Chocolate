import { createRouter, createWebHistory } from "vue-router";

import CommunityView from "../views/Community/CommunityView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        navigation: () => import("@/components/TheNavigator/TheHeader.vue"),
        default: () => import("@/views/HomePage/HomeView.vue"),
      },
    },
    {
      path: "/craftChocolate",
      name: "craftChocolate",
      props: true,
      components: {
        navigation: () => import("@/components/TheNavigator/TheHeader.vue"),
        default: () => import("@/views/CraftChocolate/CraftChocolateView.vue"),
      },
    },
    {
      path: "/products/:productId",
      name: "productReview",
      props: true,
      components: {
        navigation: () => import("@/components/TheNavigator/TheHeader.vue"),
        default: () => import("@/views/CraftChocolate/ProductReviewView.vue"),
      },
    },
    {
      path: "/products/:productTypeName",
      name: "productType",
      props: true,
      components: {
        navigation: () => import("@/components/TheNavigator/TheHeader.vue"),
        default: () => import("@/views/Products/ProductTypeListView.vue"),
      },
    },
    {
      path: "/craftChocolate/rating",
      name: "rating",
      components: {
        navigation: () => import("@/components/TheNavigator/TheHeader.vue"),
        default: () => import("@/views/Rating/RatingView.vue"),
      },
    },
    {
      path: "/community-mall",
      name: "communityMall",
      components: {
        navigation: () => import("@/components/TheNavigator/TheHeader.vue"),
        default: () => import("@/views/Community/CommunityView.vue"),
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      redirect: "/",
    },
  ],
});

export default router;
