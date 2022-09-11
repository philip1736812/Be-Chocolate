<template>
  <div
    class="container overflow-hidden absolute top-0 left-0 w-96 h-auto mx-auto p-6 -translate-x-1/4 translate-y-16 bg-gray-50 rounded-md z-20"
  >
    <div class="container w-full w-8 pb-4 border-b-2 border-slate-800 text-lg">
      <h2 class="text-slate-500 text-2xl">Shopping List</h2>
    </div>

    <ul
      class="flex flex-col divide-y-2 divide-slate-600 border-b-2 border-slate-800 mb-6 py-3"
      v-if="cartItems.length !== 0"
    >
      <li
        class="flex flex-row py-4 text-lg"
        v-for="item in cartItems"
        :key="item.id"
      >
        <div class="w-1/4 h-2/4 border">IMG</div>
        <div class="container mx-sm ml-4">
          <div class="text-xl font-bold">
            {{ item.type }} <span> x </span> {{ item.prodItem_qty }}
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
      <button
        class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Go To Cart
      </button>
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
export default {
  props: ["userCart", "cartAmount"],
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
