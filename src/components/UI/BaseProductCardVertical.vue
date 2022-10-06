<template>
  <div
    class="relative w-full text-gray-800 mb-6 px-1.5 sm:px-3 py-2 rounded-lg hover:shadow-xl hover:z-50 hover:scale-105 hover:bg-slate-100 transition-all"
  >
    <base-button
      link
      :to="{
        name: 'productReview',
        params: { productId: product.id },
      }"
    >
      <div class="w-full h-80 overflow-hidden">
        <img
          class="rounded-lg w-full h-full object-cover"
          :src="getRandomPic"
          :alt="product.storeName"
        />
      </div>
    </base-button>

    <transition name="addedCart" mode="out-in">
      <div
        v-if="isAddedInCart"
        class="absolute top-0 right-0 w-8 h-8 bg-red-500 rounded-full shadow-md flex justify-center items-center"
      >
        <font-awesome-icon icon="fa-cart-arrow-down" class="text-white" />
      </div>
    </transition>
    <div class="mt-6">
      <base-button
        link
        :to="{
          name: 'productReview',
          params: { productId: product.id },
        }"
      >
        <h2 class="text-xl font-medium truncate overflow-hidden">
          {{ product.name }}
        </h2>
      </base-button>
      <base-button
        link
        :to="{ name: 'StoreInformation' }"
        class="storeName text-slate-500"
      >
        <p class="truncate">
          <span class="inline">
            <font-awesome-icon icon="fa-store" class="mr-1 md:mr-2 text-sm" />
          </span>
          {{ product.storeName }}
        </p>
      </base-button>
      <p
        v-if="!isRatingCard"
        class="mt-4 mb-3 text-sm h-20 text-ellipsis overflow-hidden"
      >
        {{ product.description }}
      </p>

      <div v-else class="flex flex-col text-white mt-3.5 mb-4">
        <div class="flex items-center">
          <star-render :ratingStarCount="ratingStar"></star-render>
          <span
            class="w-8 sm:w-auto bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 sm:ml-3 my-2 rounded dark:bg-blue-200 dark:text-blue-800"
          >
            {{ product.rating.ratingStar }}</span
          >
        </div>
        <p class="text-md text-gray-800">
          {{ new Intl.NumberFormat("en-US").format(product.rating.vote) }}
          Vote
        </p>
      </div>
      <p class="text-2xl font-bold text-gray-800">
        <span> {{ product.price }}</span> ฿
      </p>
    </div>

    <div class="flex-1 w-3/4 mt-8">
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
import StarRender from "../RatingView/StarRender.vue";
import { userCartList } from "@/stores/Cart/Cart_items";

export default {
  components: { BaseBtnAddToCart, BaseButton, StarRender },
  props: ["product", "isRatingCard"],
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
    ratingStar() {
      return Math.floor(this.product.rating.ratingStar);
    },
    getRandomPic() {
      return this.product?.pictureUrl[
        Math.floor(Math.random() * this.product.pictureUrl.length)
      ];
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
        picUrl: this.getRandomPic,
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
