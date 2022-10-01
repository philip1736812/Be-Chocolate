import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/sign-in",
      name: "signIn",
      components: {
        default: () => import("@/views/Authentication/userSignIn.vue"),
      },
    },
    {
      path: "/sign-up",
      name: "signUp",
      components: {
        default: () => import("@/views/Authentication/userSignUp.vue"),
      },
    },
    {
      path: "/",
      name: "home",
      components: {
        navigation: () => import("@/components/TheNavigator/TheHeader.vue"),
        default: () => import("@/views/HomePage/HomeView.vue"),
      },
    },
    {
      path: "/Store/StoreId",
      name: "StoreInformation",
      components: {
        navigation: () => import("@/components/TheNavigator/TheHeader.vue"),
        default: () => import("@/views/Store/StoreInformation.vue"),
      },
    },
    {
      path: "/craft-chocolate",
      name: "craftChocolate",
      props: true,
      components: {
        navigation: () => import("@/components/TheNavigator/TheHeader.vue"),
        default: () => import("@/views/CraftChocolate/CraftChocolateView.vue"),
      },
    },
    {
      path: "/products/review/:productId",
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
      path: "/craft-chocolate/rating",
      name: "rating",
      components: {
        navigation: () => import("@/components/TheNavigator/TheHeader.vue"),
        default: () => import("@/views/Rating/RatingView.vue"),
      },
    },
    {
      path: "/craftChocolate/Voting",
      name: "voting",
      components: {
        navigation: () => import("@/components/TheNavigator/TheHeader.vue"),
        default: () => import("@/views/Rating/VotingItems.vue"),
      },
    },
    {
      path: "/craft-chocolate/Voting/information-review/productId",
      name: "informationReview",
      components: {
        navigation: () => import("@/components/TheNavigator/TheHeader.vue"),
        default: () => import("@/views/Rating/VoteInformation.vue"),
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
      path: "/my-store",
      name: "myStore",
      components: {
        navigation: () => import("@/components/TheNavigator/TheHeader.vue"),
        default: () => import("@/views/Store/My Store/myStoreDashboard.vue"),
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      components: {
        navigation: () => import("@/components/TheNavigator/TheHeader.vue"),
        default: () => import("@/components/PageNotFound/NotFoundPage.vue"),
      },
    },
  ],
});

export default router;
