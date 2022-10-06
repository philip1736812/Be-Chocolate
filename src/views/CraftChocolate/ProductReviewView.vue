<template>
  <div
    class="container w-full md:w-3/4 px-3 md:p-0 mt-16 mx-auto text-slate-700"
  >
    <div class="container">
      <base-button @click="$router.go(-1)">
        <font-awesome-icon
          icon="fa-arrow-left"
          class="text-xl cursor-pointer"
        />
      </base-button>
    </div>
    <div>
      <div class="productName w-3/48 mb-12 mx-auto flex flex-col items-center">
        <h2 class="text-2xl">{{ getProduct.name }}</h2>
        <p class="my-2">
          From <span class="font-bold ml-3"> {{ getProduct.storeName }}</span>
        </p>
        <div class="flex justify-center items-center">
          <div class="flex justify-center items-center text-xl">
            <star-render
              :ratingStarCount="getProduct.rating.ratingStar"
            ></star-render>
          </div>
          <span
            class="w-8 sm:w-auto bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 sm:ml-3 my-2 rounded dark:bg-blue-200 dark:text-blue-800"
          >
            {{ getProduct.rating.ratingStar }}</span
          >
        </div>
        <p class="text-sm">
          {{ new Intl.NumberFormat("en-US").format(getProduct.rating.vote) }}
          Vote
        </p>
      </div>

      <div
        class="w-11/12 lg:w-3/4 mx-auto bg-slate-600 rounded-lg text-white text-center"
      >
        <carousel :imgSource="getProduct.pictureUrl"></carousel>
      </div>

      <div class="container w-full lg:w-3/4 mx-auto mt-16">
        <p class="text-base font-light">{{ getProduct.description }}</p>
      </div>

      <div class="container w-60 mx-auto mt-12">
        <base-btn-add-to-cart
          @selectedItem="addToCart"
          @deleteProd="deleteFromCart"
          :qty_thisItem="qty_thisItem"
          :selected_prod="selectedProd"
        ></base-btn-add-to-cart>
      </div>
    </div>

    <div id="reviewProduct" class="mt-36">
      <div>
        <h2 class="text-lg font-medium">Comments</h2>
        <div class="mt-10 px-3 md:px-16">
          <ul
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
          >
            <li
              class="py-3.5 xl:py-2 mx-1 my-1 cursor-pointer text-sm lg:text-base font-medium text-center flex flex-1 flex-col xl:flex-row items-center justify-center w-auto max-w-md bg-white rounded-lg border sm:p-3.5 dark:bg-gray-800 dark:border-gray-700"
            >
              <p>All</p>
              <p class="mx-0 xl:ml-2 text-sm md:text-sm mt-0.5">(1245)</p>
            </li>
            <li
              class="py-3.5 xl:py-2 mx-1 my-1 cursor-pointer text-sm lg:text-base font-medium text-center flex flex-1 flex-col xl:flex-row items-center justify-center w-auto max-w-md bg-white rounded-lg border sm:p-3.5 dark:bg-gray-800 dark:border-gray-700"
            >
              <p>0-2 Star</p>
              <p class="mx-0 xl:ml-2 text-sm md:text-sm mt-0.5">(1245)</p>
            </li>
            <li
              class="py-3.5 xl:py-2 mx-1 my-1 cursor-pointer text-sm lg:text-base font-medium text-center flex flex-1 flex-col xl:flex-row items-center justify-center w-auto max-w-md bg-white rounded-lg border sm:p-3.5 dark:bg-gray-800 dark:border-gray-700"
            >
              <p>3-5 Star</p>
              <p class="mx-0 xl:ml-2 text-sm md:text-sm mt-0.5">(1245)</p>
            </li>
            <li
              class="py-3.5 xl:py-2 mx-1 my-1 cursor-pointer text-sm lg:text-base font-medium text-center flex flex-1 flex-col xl:flex-row items-center justify-center w-auto max-w-md bg-white rounded-lg border sm:p-3.5 dark:bg-gray-800 dark:border-gray-700"
            >
              <p>6-8 Star</p>
              <p class="mx-0 xl:ml-2 text-sm md:text-sm mt-0.5">(1245)</p>
            </li>
            <li
              class="py-3.5 xl:py-2 mx-1 my-1 cursor-pointer text-sm lg:text-base font-medium text-center flex flex-1 flex-col xl:flex-row items-center justify-center w-auto max-w-md bg-white rounded-lg border sm:p-3.5 dark:bg-gray-800 dark:border-gray-700"
            >
              <p>9-10 Star</p>
              <p class="mx-0 xl:ml-2 text-sm md:text-sm mt-0.5">(1245)</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="px-3 md:px-16">
        <base-comment-box></base-comment-box>
      </div>
    </div>
  </div>
</template>

<script>
import { useCraftChocolateStore } from "@/stores/CraftChocolate/Store_craftChocolate.js";
import { userCartList } from "@/stores/Cart/Cart_items";
import StarRender from "@/components/RatingView/StarRender.vue";
import Carousel from "@/components/CraftChocolateView/Carousel.vue";
import BaseBtnAddToCart from "@/components/UI/BaseBtnAddToCart.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
import BaseCommentBox from "../../components/UI/BaseCommentBox.vue";

export default {
  props: ["productId"],
  components: {
    StarRender,
    Carousel,
    BaseBtnAddToCart,
    BaseButton,
    BaseCommentBox,
  },
  setup() {
    const craftChocolateStore = useCraftChocolateStore();
    const cartList = userCartList();

    return { craftChocolateStore, cartList };
  },
  data() {
    return {
      selectedProd: false,
    };
  },
  computed: {
    getProduct() {
      return this.craftChocolateStore.getStoreProduct.find(
        (prod) => +prod.id === +this.productId
      );
    },

    qty_thisItem() {
      return this.cartList?.cart.find((prod) => prod.id === this.getProduct.id)
        ?.prodItem_qty;
    },
  },

  methods: {
    addToCart() {
      this.selectedProd = true;

      this.cartList.addToTheCart({
        id: this.getProduct.id,
        type: this.getProduct.type,
        price: this.getProduct.price,
        storeName: this.getProduct.storeName,
        name: this.getProduct.name,
        picUrl:
          this.getProduct.pictureUrl[
            Math.floor(Math.random() * this.getProduct.pictureUrl.length)
          ],
      });
    },
    deleteFromCart() {
      this.cartList.deleteFromCart(+this.productId);
    },
  },
};
</script>
