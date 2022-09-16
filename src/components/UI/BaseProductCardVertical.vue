<template>
  <div
    class="relative w-72 text-gray-800 px-3 py-2 rounded-lg hover:shadow-xl hover:scale-105 hover:bg-slate-100 transition-all"
  >
    <div>
      <img
        class="rounded-lg w-full h-full"
        :src="product.pictureUrl"
        :alt="product.storeName"
      />
    </div>

    <transition name="addedCart" mode="out-in">
      <div
        v-if="isAddedInCart"
        class="absolute top-0 right-0 w-8 h-8 bg-red-500 rounded-full shadow-md flex justify-center items-center"
      >
        <font-awesome-icon icon="fa-cart-arrow-down" class="text-white" />
      </div>
    </transition>

    <div class="mt-6">
      <h2 class="text-2xl font-medium truncate Break Words overflow-hidden">
        {{ product.name }}
      </h2>
      <base-button link to="/" class="storeName text-slate-500">
        <font-awesome-icon icon="fa-store" class="mr-2" />{{
          product.storeName
        }}</base-button
      >
      <p
        class="mt-4 mb-6 text-lg h-20 text-ellipsis Break Words overflow-hidden"
      >
        {{ product.description }}
      </p>
      <p class="text-3xl font-bold text-gray-800">
        <span> {{ product.price }}</span> ฿
      </p>
    </div>

    <div class="w-3/4 mt-8">
      <base-btn-add-to-cart
        @selectedItem="addToCartEmit"
        @deleteProd="deleteProdEmit"
        :selected_prod="selectedProd"
        :qty_thisItem="qty_thisItem"
      ></base-btn-add-to-cart>
    </div>
  </div>
</template>

<script>
import BaseBtnAddToCart from "./BaseBtnAddToCart.vue";
import BaseButton from "./BaseButton.vue";
import { userCartList } from "@/stores/Cart/Cart_items";

export default {
  components: { BaseBtnAddToCart, BaseButton },
  props: ["product"],
  setup() {
    const cartList = userCartList();

    return { cartList };
  },
  data() {
    return {
      selectedProd: false,
    };
  },
  computed: {
    qty_thisItem() {
      return this.cartList?.cart.find((prod) => prod.id === this.product.id)
        ?.prodItem_qty;
    },
    isAddedInCart() {
      return this.cartList.cart.length <= 0
        ? false
        : this.cartList.cart.find((el) => el.id === this.product.id);
    },
  },
  methods: {
    addToCartEmit() {
      this.selectedProd = true;

      this.$emit("addToCart", {
        id: this.product.id,
        type: this.product.type,
        price: this.product.price,
        storeName: this.product.storeName,
        name: this.product.name,
        picUrl: this.product.pictureUrl,
      });
    },
    deleteProdEmit() {
      this.$emit("deletedProduct", this.product.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.addedCart-enter-active {
  animation: scale 0.25s ease-in;
}

.addedCart-leave-active {
  animation: scale 0.25s ease-out reverse;
}

@keyframes scale {
  0% {
    transform: scale(0);
  }

  85% {
    transform: scale(1.06);
  }

  100% {
    transform: scale(1);
  }
}
</style>
