import { createRouter, createWebHistory } from "vue-router";
import { useIndexStore } from "../stores/Store_index";

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
      path: "/search-result",
      name: "searchResult",
      components: {
        navigation: () => import("@/components/TheNavigator/TheHeader.vue"),
        default: () => import("@/views/HomePage/SearchResultView.vue"),
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
      meta: { requiredAuth: true },
    },
    {
      path: "/craft-chocolate/rating/voting",
      name: "voting",
      components: {
        navigation: () => import("@/components/TheNavigator/TheHeader.vue"),
        default: () => import("@/views/Rating/VotingItems.vue"),
      },
      meta: { requiredAuth: true },
    },
    {
      path: "/craft-chocolate/Voting/information-review/productId",
      name: "informationReview",
      components: {
        navigation: () => import("@/components/TheNavigator/TheHeader.vue"),
        default: () => import("@/views/Rating/VoteInformation.vue"),
      },
      meta: { requiredAuth: true },
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
      path: "/community-mall/article/articleId",
      name: "readArticle",
      components: {
        navigation: () => import("@/components/TheNavigator/TheHeader.vue"),
        default: () => import("@/views/Community/ReadArticle.vue"),
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
      path: "/review-cart",
      name: "reviewCart",
      components: {
        navigation: () => import("@/components/TheNavigator/TheHeader.vue"),
        default: () => import("@/views/CheckOut/ReviewCartView.vue"),
      },
    },
    {
      path: "/review-cart/check-out",
      name: "checkOutCart",
      components: {
        navigation: () => import("@/components/TheNavigator/TheHeader.vue"),
        default: () => import("@/views/CheckOut/CheckOutView.vue"),
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

router.beforeEach((to, from, next) => {
  const indexStore = useIndexStore();
  const isAuthentication = indexStore.isAuthentication;
  if (to.meta.requiredAuth && !isAuthentication)
    next({ name: `signIn`, query: { next: to.name } });
  else next();
});

export default router;
