<template>
  <div
    class="container overflow-hidden absolute top-0 left-0 w-96 h-auto mx-auto p-6 -translate-x-1/3 translate-y-12 bg-gray-50 rounded-md z-50"
  >
    <div class="container w-full pb-4 border-b-2 border-slate-800 text-lg">
      <h2 class="text-slate-500 text-lg font-medium">
        <font-awesome-icon
          icon="fa-cart-shopping"
          class="inline mr-2.5"
        />Shopping List
      </h2>
    </div>

    <div class="arrow"></div>

    <ul
      class="flex flex-col divide-y-2 divide-slate-600 border-b-2 border-slate-800 mb-6 py-3"
      v-if="cartItems.length !== 0"
    >
      <li
        class="flex flex-row py-4 text-lg"
        v-for="item in cartItems"
        :key="item.id"
      >
        <div class="w-36 h-20 overflow-hidden rounded-md">
          <img
            class="rounded-md object-cover w-full h-full"
            :src="item.picUrl"
            :alt="item.name"
          />
        </div>

        <div class="container mx-sm ml-4">
          <div class="text-xl font-bold">
            {{ item.name ? item.name : item.type }} <span> x </span>
            {{ item.prodItem_qty }}
          </div>
          <div class="text-xm">
            <p>{{ item.storeName }}</p>
          </div>
        </div>
        <div class="w-2/4 text-end">
          <p>
            <span class="inline">฿</span> {{ item.price * item.prodItem_qty }}
          </p>
        </div>
      </li>
    </ul>
    <div class="w-full flex justify-between" v-if="cartItems.length !== 0">
      <p class="text-lg">
        Total Items :
        <span class="inline text-bold">{{ cartAmountItems }} </span>
      </p>
      <base-button link to="/" mode="mainBtn"> Go To Cart </base-button>
    </div>

    <div class="haveNoItems py-8" v-else>
      <p class="text-lg">have no any items on your cart.</p>
    </div>

    <teleport to="body">
      <div
        class="overlay fixed top-0 right-0 bg-black w-full h-full opacity-10"
        @click="exitCart"
      ></div>
    </teleport>
  </div>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";

export default {
  props: ["userCart", "cartAmount"],
  components: { BaseButton },
  methods: {
    exitCart() {
      this.$emit("closeOverlayCart");
    },
  },
  computed: {
    cartItems() {
      return this.userCart;
    },
    cartAmountItems() {
      return this.cartAmount;
    },
  },
};
</script>
