// import("tailwindcss").Config;

module.exports = {
  content: [
    "./index.html",
    "./src/App.vue",
    "./src/views/CraftChocolate/CraftChocolateView.vue",
    "./src/components/TheNavigator/cartList.vue",
    "./src/components/TheNavigator/CartBalloon.vue",
    "./src/components/HomeView/CraftChocolateSection.vue",
    "./src/components/UI/BaseProductCardVertical.vue",
    "./src/components/CraftChocolateView/Carousel.vue",
    "./src/views/Products/ProductTypeListView.vue",
    "./src/components/TheNavigator/TheHeader.vue",
    "./src/components/TheNavigator/Notifications.vue",
    "./src/components/TheNavigator/UserProfile.vue",
    "./node_modules/flowbite/src/dropdown.js",
    "./src/views/Rating/RatingView.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
