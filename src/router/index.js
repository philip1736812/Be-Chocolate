import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomePage/HomeView.vue";
import CraftChocolateView from "@/views/CraftChocolate/CraftChocolateView.vue";
import TheHeader from "@/components/TheNavigator/TheHeader.vue";
import ProductTypeListView from "@/views/Products/ProductTypeListView.vue";
import RatingView from "@/views/Rating/RatingView.vue";
import ProductReviewView from "@/views/CraftChocolate/ProductReviewView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      components: { navigation: TheHeader, default: HomeView },
    },
    {
      path: "/craftChocolate",
      name: "craftChocolate",
      props: true,
      components: {
        navigation: TheHeader,
        default: CraftChocolateView,
      },
    },
    {
      path: "/:productId",
      name: "productReview",
      props: true,
      components: {
        navigation: TheHeader,
        default: ProductReviewView,
      },
    },
    {
      path: "/products/:productTypeName",
      name: "productType",
      props: true,
      components: {
        navigation: TheHeader,
        default: ProductTypeListView,
      },
    },
    {
      path: "/craftChocolate/rating",
      name: "rating",
      components: {
        navigation: TheHeader,
        default: RatingView,
      },
    },
  ],
});

export default router;
