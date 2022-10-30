<template>
  <div>
    <section class="mt-8">
      <div class="container mx-auto grid grid-cols-1">
        <div
          class="w-full lg:w-3/4 px-4 lg:p-0 flex flex-col justify-center items-center text-center mx-auto mb-12"
        >
          <h2 class="text-3xl mb-4">Craft Chocolate</h2>
          <p class="text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            rerum illo tempore debitis autem aspernatur consequatur repellat
            totam eveniet dolores nihil minus fugiat, reiciendis perspiciatis,
            ducimus perferendis iusto ad exercitationem minima omnis facilis
            veritatis? Incidunt.
          </p>
        </div>

        <div
          v-if="isPictureLoad"
          class="w-11/12 lg:w-3/4 mx-auto bg-slate-600 rounded-lg text-white text-center"
        >
          <carousel :imgSource="getHeaderPic"></carousel>
        </div>
      </div>
    </section>

    <div class="searching container w-3/4 mx-auto mt-16 mb-8">
      <base-search-bar @submitSearchEmit="submitSearch"></base-search-bar>
    </div>

    <teleport to="body">
      <cart-balloon></cart-balloon>
    </teleport>

    <main class="container mx-auto" v-if="!searchVal">
      <section
        class="container w-full lg:w-3/4 px-2 md:px-4 lg:p-0 mx-auto mb-12 pb-6 border-b-2 border-gray-800"
      >
        <div class="my-8">
          <p class="text-lg md:text-xl text-slate-700">
            <span class="inline">
              <font-awesome-icon
                icon="fa-fire-flame-curved"
                class="mr-2 text-orange-600"
            /></span>
            Popular Choice
          </p>
        </div>
        <div
          class="container w-full grid grid-cols-2 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mx-auto mt-8"
        >
          <base-product-card-vertical
            v-for="(item, index) in getProduct"
            :key="item.id"
            :product="item"
            :index="index"
            @addToCart="addToCartStore"
            @deletedProduct="deleteFromStore"
          ></base-product-card-vertical>
        </div>
      </section>

      <section
        class="container w-full lg:w-3/4 px-4 lg:p-0 mx-auto mb-12 pb-6 border-b-2 border-gray-800"
      >
        <div class="my-8">
          <p class="text-lg md:text-xl text-slate-700">
            Blend To Bar Chocolate
          </p>
        </div>
        <div
          class="container w-full grid grid-cols-2 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mx-auto mt-8"
        >
          <base-product-card-vertical
            v-for="(item, index) in getProduct"
            @addToCart="addToCartStore"
            @deletedProduct="deleteFromStore"
            :key="item.id"
            :product="item"
            :index="index"
          ></base-product-card-vertical>
        </div>
      </section>
    </main>

    <main class="container mx-auto" v-else>
      <section
        class="container w-full lg:w-3/4 px-2 md:px-4 lg:p-0 mx-auto mb-12 pb-6 border-b-2 border-gray-800"
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
        <div
          class="container w-full grid grid-cols-2 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mx-auto mt-8"
        >
          <base-product-card-vertical
            v-for="(item, index) in getProduct"
            :key="item.id"
            :product="item"
            :index="index"
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
import { getHorizontalPic } from "../../components/hooks/getHorizontalPic";

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
    return { searchVal: "", loadPic: null };
  },
  async created() {
    // Gen Img Pic
    this.craftChocolateStore.genHeaderPic();

    this.loadPic = await getHorizontalPic(
      this.craftChocolateStore.craftHeaderPic
    );
  },
  computed: {
    getProduct() {
      return this.searchVal === ""
        ? this.craftChocolateStore.getStoreProduct
        : this.craftChocolateStore.getStoreProduct.filter((item) => {
            return (
              item.name.toLowerCase().includes(this.searchVal.toLowerCase()) ||
              item.storeName
                .toLowerCase()
                .includes(this.searchVal.toLowerCase()) ||
              `${item.price}`
                .toLowerCase()
                .includes(this.searchVal.toLowerCase())
            );
          });
    },
    getHeaderPic() {
      // wait getHorizontalPic Fn
      if (!this.loadPic) return;
      return this.loadPic.slice(0, 8);
    },
    itemInCart() {
      return this.cartList.itemInCart;
    },
    isPictureLoad() {
      return this.loadPic && this.loadPic.length !== 0;
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
