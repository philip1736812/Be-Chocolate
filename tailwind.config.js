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
    "./src/views/products/ProductTypeListView.vue",
    "./src/components/TheNavigator/TheHeader.vue",
    "./src/components/TheNavigator/Notifications.vue",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
