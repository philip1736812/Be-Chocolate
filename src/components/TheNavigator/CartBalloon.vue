<template>
  <div
    class="fixed top-8 right-16 bg-slate-50 w-16 h-16 rounded-full z-20 shadow-lg bg-orange-300"
  >
    <div
      @click="activeCart"
      class="relative w-full h-full flex justify-center items-center"
    >
      <router-link to="#">
        <img src="../../assets/TheNavigation/shopping-bag 2.png" alt="Cart" />
      </router-link>

      <div
        class="absolute top-0 right-0 w-6 h-6 bg-red-500 rounded-full shadow-md"
      >
        <span class="flex h-full w-full" v-if="cartAmount > 0">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"
          ></span>
          <div class="w-6 h-6 flex justify-center items-center text-white">
            <p class="font-xl text-centers">
              {{ cartAmount }}
            </p>
          </div>
        </span>

        <div v-else class="w-6 h-6 flex justify-center items-center text-white">
          <p>
            {{ cartAmount }}
          </p>
        </div>
      </div>

      <div class="-translate-x-64 -translate-y-4">
        <transition name="cartListDraw">
          <cart-list
            v-if="cartIsHover"
            @closeOverlayCart="closeCart"
            :userCart="userCartData"
            :cartAmount="cartAmount"
          ></cart-list>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import CartList from "./cartList.vue";
import { userCartList } from "@/stores/Cart/Cart_items";

export default {
  components: { CartList },
  setup() {
    const cartList = userCartList();

    return { cartList };
  },
  data() {
    return {
      cartIsHover: false,
    };
  },
  computed: {
    cartAmount() {
      return this.cartList.itemInCartAmount;
    },
    userCartData() {
      return this.cartList.itemInCart;
    },
  },
  methods: {
    activeCart() {
      this.cartIsHover = true;
    },
    closeCart() {
      this.cartIsHover = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.cartListDraw-enter-active {
  animation: expandDraw 0.25s ease-in;
}

.cartListDraw-leave-active {
  animation: expandDraw 0.25s ease-out reverse;
}

@keyframes expandDraw {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
