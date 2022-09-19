<template>
  <div>
    <div>
      <p>***** Our Items *****</p>
    </div>

    <div class="container w-3/4 mx-auto"><p>Rating of this Month</p></div>

    <div class="container w-full lg:3/4 px-4 sm-px-0 mx-auto my-20">
      <div
        class="p-4 w-full 2xl:w-3/4 lg:w-full mx-auto text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Voting now
        </h5>
        <p
          class="mb-8 mt-5 text-base text-gray-500 sm:text-lg dark:text-gray-400"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
          asperiores veritatis neque, deleniti iure necessitatibus!
        </p>
        <div
          class="flex flex-col justify-center items-center space-y-4 sm:flex sm:space-x-4"
        >
          <div
            href="#"
            class="w-full 2xl:w-2/4 lg:2/4 md:w-3/4 sm:w-full h-44 bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <div class="w-fll h-full text-left text-center my-auto">
              <div class="mb-1 text-xl">start vote now</div>

              <div class="my-1 flex text-3xl font-sans font-semibold">
                <counting-time :deadline="deadLineSetting"></counting-time>
              </div>

              <div class="text-md">End in {{ deadLineSetting }}</div>
            </div>
          </div>

          <base-button
            link
            to="/"
            class="w-full mt-8 sm:w-auto bg-gray-800 hover:bg-gray-700 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5"
          >
            <font-awesome-icon
              icon="fa-square-poll-vertical"
              class="text-3xl mr-4"
            />
            <div class="text-left">
              <div class="mb-1 text-xs">Join Vote</div>
              <div class="-mt-1 font-sans text-sm font-semibold">
                Click Here
              </div>
            </div>
          </base-button>
        </div>
      </div>
    </div>
    <div class="container w-full lg:w-3/4 mx-auto">
      <base-rating-card-top
        v-for="(prod, i) in filterTopFive"
        :key="prod.id"
        :product="prod"
        :index="i"
        @addToCart="addToCart"
        @DeleteFromCart="DeleteFromCart"
      ></base-rating-card-top>
    </div>
    <div
      class="container w-full grid grid-cols-2 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mx-auto mt-8"
    >
      <base-product-card-vertical
        v-for="prod in filterTopAfterFive"
        :key="prod.id"
        :product="prod"
        :isRatingCard="true"
        @addToCart="addToCart"
        @deletedProduct="DeleteFromCart"
      ></base-product-card-vertical>
    </div>
  </div>
</template>

<script>
import { useCraftChocolateStore } from "../../stores/CraftChocolate/Store_craftChocolate";
import { userCartList } from "../../stores/Cart/Cart_items";

import CountingTime from "../../components/RatingView/CountingTime.vue";
import BaseButton from "../../components/UI/BaseButton.vue";
import BaseProductCardVertical from "../../components/UI/BaseProductCardVertical.vue";
import BaseRatingCardTop from "../../components/UI/BaseRatingCardTop.vue";

export default {
  components: {
    CountingTime,
    BaseButton,
    BaseRatingCardTop,
    BaseProductCardVertical,
  },
  setup() {
    const craftChocolateStore = useCraftChocolateStore();
    const cartList = userCartList();

    return { craftChocolateStore, cartList };
  },
  data() {
    return {
      deadLineSetting: "September 30, 2022",
    };
  },
  computed: {
    getProducts() {
      return this.craftChocolateStore.getStoreProduct
        .filter((prod) => {
          return prod.rating.vote > 0;
        })
        .sort((a, b) => {
          if (a.rating.ratingStar > b.rating.ratingStar) return -1;
        });
    },

    filterTopFive() {
      return this.getProducts.slice(0, 5);
    },
    filterTopAfterFive() {
      return this.getProducts.slice(5);
    },
  },
  methods: {
    addToCart(prod) {
      this.cartList.addToTheCart(prod);
    },
    DeleteFromCart(prodId) {
      this.cartList.deleteFromCart(prodId);
    },
  },
};
</script>
