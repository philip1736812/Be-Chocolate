<template>
  <transition
    name="cartListDraw"
    mode="out-in"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
  >
    <div
      v-if="isActiveCartList"
      :style="{
        width: isSmallestWidth && `${isSmallestWidth}px`,
      }"
      class="container overflow-hidden sm:h-auto bg-gray-50 rounded-md p-6 z-50"
    >
      <!-- top-0 -left-8 sm:left-0 w-96  mx-auto -translate-x-1/2 sm:-translate-x-1/3 translate-y-12 -->
      <div
        class="container flex w-full pb-1.5 sm:pb-4 border-b border-slate-800 text-base sm:text-lg"
      >
        <h2 class="text-slate-500 flex-1 text-md sm:text-lg font-medium">
          <font-awesome-icon
            icon="fa-cart-shopping"
            class="inline mr-2.5"
          />Shopping List
        </h2>

        <div @click.stop="exitCart">
          <font-awesome-icon icon="fa-xmark" class="text-slate-800" />
        </div>
      </div>

      <div class="arrow"></div>

      <ul
        class="flex flex-col divide-y divide-slate-400 border-b border-slate-800 mb-6 py-1.5 sm:py-3 text-slate-800"
        v-if="cartItems.length !== 0"
      >
        <li
          class="flex flex-row py-2 sm:py-4 text-lg"
          v-for="item in cartItems"
          :key="item.id"
        >
          <div class="w-32 h-16 sm:w-36 sm:h-20 overflow-hidden rounded-md">
            <img
              class="rounded-md object-cover w-full h-full"
              :src="item.picUrl"
              :alt="item.name"
            />
          </div>

          <div class="container mx-sm ml-4">
            <div class="text-base sm:text-xl font-medium">
              {{ item.name ? item.name : item.type }}
              <span class="text-sm">
                <font-awesome-icon icon="fa-xmark" />
              </span>
              {{ item.prodItem_qty }}
            </div>
            <div class="text-sm sm:text-base font-light">
              <p>{{ item.storeName }}</p>
            </div>
          </div>
          <div class="w-2/4 text-end">
            <p>
              <span class="inline font-medium">฿</span>
              {{ item.price * item.prodItem_qty }}
            </p>
          </div>
        </li>
      </ul>
      <div class="w-full flex justify-between" v-if="cartItems.length !== 0">
        <p class="text-base sm:text-lg">
          Total Items :
          <span class="inline text-bold">{{ cartAmountItems }} </span>
        </p>
        <base-button link to="/" mode="mainBtn"> Go To Cart </base-button>
      </div>

      <div class="haveNoItems py-8" v-else>
        <p class="text-base sm:text-lg text-center">
          <span
            ><font-awesome-icon
              icon="fa-face-sad-tear"
              class="text-2xl sm:text-3xl mr-3"
          /></span>
          have no any items on your cart.
        </p>
      </div>

      <teleport to="body">
        <div
          class="overlay fixed top-0 right-0 bg-black w-full h-full z-40 opacity-10"
          @click="exitCart"
        ></div>
      </teleport>
    </div>
  </transition>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
import { useIndexStore } from "@/stores/Store_index";

export default {
  props: ["userCart", "cartAmount", "isActiveCartList"],
  components: { BaseButton },
  setup() {
    const indexStore = useIndexStore();

    return { indexStore };
  },
  methods: {
    exitCart() {
      this.$emit("closeOverlayCart");
    },

    enter(el) {
      el.style.height = "auto";
      const height = getComputedStyle(el).height;
      el.style.height = 0;

      getComputedStyle(el);
      setTimeout(() => {
        el.style.height = height;
      });
    },
    afterEnter(el) {
      el.style.height = "auto";
    },
    leave(el) {
      /*
          Same as with the enter method, but only the other way around.
        */
      el.style.height = getComputedStyle(el).height;

      getComputedStyle(el);
      setTimeout(() => {
        el.style.height = 0;
      });
    },
  },
  computed: {
    cartItems() {
      return this.userCart;
    },
    cartAmountItems() {
      return this.cartAmount;
    },
    isSmallestWidth() {
      return this.indexStore.windowWidth <= 640
        ? this.indexStore.windowWidth - 12
        : 384;
    },
  },
};
</script>

<style lang="scss" scoped>
.cartListDraw-enter-active {
  transition: height 0.12s ease-in;
  overflow: hidden;
}

.cartListDraw-leave-active {
  transition: height 0.2s ease-out;
  overflow: hidden;
}
</style>
