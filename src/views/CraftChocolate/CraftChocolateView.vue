<template>
  <div>
    <section class="mt-8">
      <div class="container mx-auto grid grid-cols-1">
        <div
          class="w-3/4 flex flex-col justify-center items-center text-center mx-auto mb-16"
        >
          <h2 class="text-5xl mb-8">Craft Chocolate</h2>
          <p class="text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            rerum illo tempore debitis autem aspernatur consequatur repellat
            totam eveniet dolores nihil minus fugiat, reiciendis perspiciatis,
            ducimus perferendis iusto ad exercitationem minima omnis facilis
            veritatis? Incidunt.
          </p>
        </div>

        <div
          class="w-3/4 mx-auto bg-slate-600 rounded-lg text-white text-center"
        >
          <carousel></carousel>
        </div>
      </div>
    </section>

    <div class="searching container w-3/4 mx-auto mt-16 mb-8">
      <base-search-bar @submitSearchEmit="submitSearch"></base-search-bar>
    </div>

    <main class="container mx-auto" v-if="!searchVal">
      <teleport to="body">
        <cart-balloon></cart-balloon>
      </teleport>

      <section
        class="container w-3/4 mx-auto mb-12 pb-6 border-b-2 border-gray-800"
      >
        <div class="my-8">
          <p class="text-3xl text-bold">
            <span class="inline">
              <font-awesome-icon
                icon="fa-fire-flame-curved"
                class="mr-2 text-orange-600"
            /></span>
            Popular Choice
          </p>
        </div>
        <div class="container flex flex-wrap justify-between">
          <base-product-card-vertical
            v-for="item in getProduct"
            :key="item.id"
            :product="item"
            @addToCart="addToCartStore"
            @deletedProduct="deleteFromStore"
          ></base-product-card-vertical>
        </div>
      </section>

      <section
        class="container w-3/4 mx-auto mb-12 pb-6 border-b-2 border-gray-800"
      >
        <div class="my-8">
          <p class="text-3xl text-bold">Blend To Bar Chocolate</p>
        </div>
        <div class="container flex flex-wrap justify-between">
          <base-product-card-vertical
            v-for="item in getProduct"
            @addToCart="addToCartStore"
            @deletedProduct="deleteFromStore"
            :key="item.id"
            :product="item"
          ></base-product-card-vertical>
        </div>
      </section>
    </main>

    <main class="container mx-auto" v-else>
      <section
        class="container w-3/4 mx-auto mb-12 pb-6 border-b-2 border-gray-800"
      >
        <div class="my-8">
          <p class="text-3xl text-bold">
            <span class="inline">
              <font-awesome-icon
                icon="fa-fire-flame-curved"
                class="mr-2 text-orange-600"
            /></span>
            Popular Choice
          </p>
        </div>
        <div class="container flex flex-wrap">
          <base-product-card-vertical
            v-for="item in getProduct"
            :key="item.id"
            :product="item"
            @addToCart="addToCartStore"
            @deletedProduct="deleteFromStore"
          ></base-product-card-vertical>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { useCraftChocolateStore } from "../../stores/CraftChocolate/Store_craftChocolate";
import { userCartList } from "@/stores/Cart/Cart_items";

import CartBalloon from "@/components/TheNavigator/CartBalloon.vue";
import BaseSearchBar from "../../components/UI/BaseSearchBar.vue";
import BaseProductCardVertical from "../../components/UI/BaseProductCardVertical.vue";
import Carousel from "@/components/CraftChocolateView/Carousel.vue";

export default {
  components: {
    CartBalloon,
    BaseSearchBar,
    BaseProductCardVertical,
    Carousel,
  },
  setup() {
    const craftChocolateStore = useCraftChocolateStore();
    const cartList = userCartList();

    return { craftChocolateStore, cartList };
  },

  data() {
    return { searchVal: "" };
  },
  computed: {
    getProduct() {
      return this.searchVal === ""
        ? this.craftChocolateStore.getStoreProduct
        : this.craftChocolateStore.getStoreProduct.filter((item) => {
            return item.name
              .toLowerCase()
              .includes(this.searchVal.toLowerCase());
          });
    },
    itemInCart() {
      return this.cartList.itemInCart;
    },
  },
  methods: {
    addToCartStore(prod) {
      this.cartList.addToTheCart(prod);
    },
    deleteFromStore(prodId) {
      this.cartList.deleteFromCart(prodId);
    },

    submitSearch(val) {
      this.searchVal = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.cartBalloon-enter-active {
  animation: scaleBubble 0.15s ease-in;
}

.cartBalloon-leave-active {
  animation: scaleBubble 0.15s ease-out reverse;
}

@keyframes scaleBubble {
  0% {
    transform: scale(0);
  }

  80% {
    transform: scale(1.12);
  }

  100% {
    transform: scale(1);
  }
}
</style>