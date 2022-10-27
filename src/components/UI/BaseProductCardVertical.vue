<template>
  <div
    class="relative w-full text-gray-800 mb-6 px-1.5 sm:px-3 py-2 rounded-lg hover:shadow-xl hover:z-50 hover:scale-105 hover:bg-slate-100 transition-all"
    @mouseenter="showEdit_inventory"
    @mouseleave="hideEdit_inventory"
  >
    <base-button
      v-if="product.type == 'CraftChocolate'"
      link
      :to="{
        name: 'productReview',
        params: { productId: product.id },
      }"
    >
      <div class="w-full h-80 overflow-hidden object-cover">
        <base-picture-frame
          stylePic="rounded-lg w-72 md:w-96 h-full object-cover"
          styleLoading="top-0 w-full h-full "
          :picSrc="getRandomPic"
          :productName="product.storeName"
        />
      </div>
    </base-button>
    <div v-else>
      <div class="w-full h-80 overflow-hidden object-cover">
        <base-picture-frame
          stylePic="rounded-lg w-72 md:w-96 h-full object-cover"
          styleLoading="top-0 w-full h-full "
          :picSrc="getRandomPic"
          :productName="product.storeName"
        />
      </div>
    </div>

    <transition name="addedCart" mode="out-in">
      <div
        v-if="isAddedInCart && getRouteActive !== 'myStore-inventory'"
        class="absolute z-20 top-0 right-0 w-8 h-8 bg-red-500 rounded-full shadow-md flex justify-center items-center"
      >
        <font-awesome-icon icon="fa-cart-arrow-down" class="text-white" />
      </div>
    </transition>
    <div class="mt-6">
      <base-button
        v-if="product.type == 'CraftChocolate'"
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
      <base-button v-else>
        <h2 class="text-xl font-medium truncate overflow-hidden">
          {{ product.type }}
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
          {{ getVoteScore }}
          Vote
        </p>
      </div>
      <p
        v-if="getRouteActive !== 'myStore-inventory'"
        class="text-2xl font-bold text-gray-800"
      >
        <span> {{ product.price }}</span> ฿
      </p>
      <p v-else class="text-2xl font-bold text-gray-800">
        <span> {{ product.price }}</span>
        <span class="text-lg text-base"> ฿/{{ product.unit }} </span>
      </p>
    </div>

    <div
      v-if="getRouteActive !== 'myStore-inventory'"
      class="flex-1 w-3/4 mt-8"
    >
      <base-btn-add-to-cart
        @selectedItem="addToCartEmit"
        @deleteProd="deleteProdEmit"
        :selected_prod="selectedProd"
        :qty_thisItem="qty_thisItem"
      ></base-btn-add-to-cart>
    </div>

    {{ isEditItem_inventory_show }}
    {{ getWindowWidth > 768 && isEditItem_inventory_show }}

    <div v-if="getRouteActive === 'myStore-inventory'">
      <transition name="fade-in-out" mode="out-in">
        <div v-if="getWindowWidth <= 768">
          <div
            class="my-4 flex items-center justify-center bg-white hover:border-0 transition hover:shadow-sm"
          >
            <base-button mode="minimalBtn"> Edit </base-button>
          </div>
        </div>
      </transition>

      <transition name="fade-in-out" mode="out-in">
        <base-button
          v-if="getWindowWidth > 768 && isEditItem_inventory_show"
          class="overlay backdrop-blur-sm w-full h-full absolute z-30 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-black/30 rounded-md px-1.5 sm:px-3 py-2 text-white"
        >
          Edit
        </base-button>
      </transition>
    </div>
  </div>
</template>

<script>
import BaseBtnAddToCart from "./BaseBtnAddToCart.vue";
import BaseButton from "./BaseButton.vue";
import StarRender from "../RatingView/StarRender.vue";
import BasePictureFrame from "../../components/UI/BasePictureFrame.vue";

import { numberFormat } from "../hooks/UseNumberFormat";
import { userCartList } from "@/stores/Cart/Cart_items";
import { useIndexStore } from "../../stores/Store_index";

export default {
  components: { BaseBtnAddToCart, BaseButton, StarRender, BasePictureFrame },
  props: ["product", "isRatingCard"],
  setup() {
    const cartList = userCartList();
    const indexStore = useIndexStore();

    return { cartList, indexStore };
  },
  data() {
    return {
      selectedProd: false,
      isEditItem_inventory_show: false,
      windowWidth: window.innerWidth,
    };
  },
  computed: {
    getWindowWidth() {
      this.windowWidth = this.indexStore.windowWidth;
      return this.windowWidth;
    },
    getRouteActive() {
      return this.$route.name;
    },
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
      const picture = this.product?.pictureUrl || this.product?.picUrl;
      return picture[Math.floor(Math.random() * picture.length)];
    },
    getVoteScore() {
      return numberFormat(this.product.rating.vote);
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
    showEdit_inventory() {
      console.log(`show Running`);
      this.isEditItem_inventory_show = true;
    },
    hideEdit_inventory() {
      console.log(`hide Running`);

      this.isEditItem_inventory_show = false;
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

.fade-in-out-enter-active {
  animation: fade 0.25s ease-in;
}

.fade-in-out-leave-active {
  animation: fade 0.25s ease-out reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
