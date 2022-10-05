// import("tailwindcss").Config;

module.exports = {
  content: [
    "./index.html",
    "./src/App.vue",
    "./src/views/Authentication/userSignIn.vue",
    "./src/views/Authentication/userSignUp.vue",
    "./src/components/TheNavigator/TheHeader.vue",
    "./src/components/TheNavigator/MultiLevelDropdownNav.vue",
    "./src/views/HomePage/HomeView.vue",
    "./src/views/CraftChocolate/CraftChocolateView.vue",
    "./src/views/CraftChocolate/ProductReviewView.vue",
    "./src/components/TheNavigator/cartList.vue",
    "./src/components/TheNavigator/CartBalloon.vue",
    "./src/components/HomeView/CraftChocolateSection.vue",
    "./src/components/UI/BaseProductCardVertical.vue",
    "./src/components/UI/BaseProductCard.vue",
    "./src/components/CraftChocolateView/Carousel.vue",
    "./src/views/Products/ProductTypeListView.vue",
    "./src/components/TheNavigator/TheHeader.vue",
    "./src/components/TheNavigator/Notifications.vue",
    "./src/components/TheNavigator/UserProfile.vue",
    "./node_modules/flowbite/src/dropdown.js",
    "./src/views/Rating/RatingView.vue",
    "./src/components/UI/BaseRatingCard.vue",
    "./src/components/UI/BaseRatingCardHorizontal.vue",
    "./src/components/UI/BaseCommentBox.vue",
    "./src/views/Community/CommunityView.vue",
    "./src/components/CommunityView/ArticleFrame.vue",
    "./src/components/UI/BaseCardNav.vue",
    "./src/components/UI/BaseBtnAddToCart.vue",
    "./src/components/UI/BaseSearchBar.vue",
    "./src/views/Rating/VoteInformation.vue",
    "./src/views/Store/StoreInformation.vue",
    "./src/components/PageNotFound/InDevelopment.vue",
    "./src/components/PageNotFound/NotFoundPage.vue",
    "./src/views/Community/ReadArticle.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
