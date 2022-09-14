// import("tailwindcss").Config;

module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./index.html",
    "./src/App.vue",
    "./src/views/CraftChocolate/CraftChocolateView.vue",
    "./src/components/TheNavigator/cartList.vue",
    "./src/components/TheNavigator/CartBalloon.vue",
    "./src/components/HomeView/CraftChocolateSection.vue",
    "./src/components/UI/BaseProductCardVertical.vue",
    "./src/components/CraftChocolateView/Carousel.vue",
    "./src/views/products/ProductTypeListView.vue"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
