<template>
  <div class="container w-full xl:w-9/12 mx-auto my-3.5 px-2 lg:px-0">
    <div>
      <div class="relative rounded-lg w-full overflow-hidden">
        <div
          class="w-full bg-white shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="relative py-4 px-4 sm:py-12 sm:px-12 z-20">
            <div class="text-white">
              <h5
                v-if="isHighRanking"
                class="text-lg text-white font-light tracking-tight mb-3"
              >
                High rating of the mouth
              </h5>
              <div
                class="text-xl font-medium"
                :class="{ blackText: !isHighRanking }"
              >
                <span
                  class="inline-flex mr-3 text-3xl font-bold"
                  :class="{ blackText: !isHighRanking }"
                  ># {{ index + 1 }}
                </span>
                <base-button
                  link
                  :to="{
                    name: 'productReview',
                    params: { productId: product.id },
                  }"
                >
                  {{ product.name }}
                </base-button>
              </div>
              <div
                class="mt-1.5 text-lg"
                :class="{ blackText: !isHighRanking }"
              >
                From {{ product.storeName }}
              </div>
            </div>
            <div
              class="flex flex-col sm:flex-row sm:items-center text-white mt-3.5 mb-8"
            >
              <div class="flex">
                <star-render :ratingStarCount="ratingStar"></star-render>
              </div>
              <span
                class="w-8 sm:w-auto bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 sm:ml-3 my-2 rounded dark:bg-blue-200 dark:text-blue-800"
              >
                {{ product.rating.ratingStar }}</span
              >
              <p class="text-md" :class="{ blackText: !isHighRanking }">
                {{ getVoteScore }}
                Vote
              </p>
            </div>

            <div class="w-full flex justify-start items-end">
              <div class="mr-3 flex flex-col sm:flex-row">
                <span
                  class="text-3xl font-bold text-white mr-3"
                  :class="{ blackText: !isHighRanking }"
                  >599 ฿</span
                >
                <div class="w-52 mt-3 sm:m-0">
                  <base-btn-add-to-cart
                    @selectedItem="addToCartEmit"
                    @deleteProd="deleteFromCartEmit"
                    :selected_prod="selectedProd"
                    :qty_thisItem="qty_thisItem"
                    :textBrightMode="isHighRanking"
                  ></base-btn-add-to-cart>
                </div>
              </div>
              <base-button
                link
                :to="{ name: 'informationReview' }"
                class="text-lg text-neutral-300 hover:text-neutral-100 transition-all"
                :class="{ blackText: !isHighRanking }"
                >Read More
              </base-button>
            </div>
          </div>

          <!-- overlay -->
          <div
            v-if="isHighRanking || windowHeight <= 1280"
            class="overlay w-3/4 h-full absolute top-0 overlay bg-gradient-to-r from-neutral-900 z-10"
          ></div>
          <a
            v-if="isHighRanking"
            href="#"
            class="absolute xl:-translate-y-2/4 z-0 top-0 left-0 w-full h-full"
          >
            <img
              class="w-full h-full xl:w-full xl:h-auto object-cover sm:object-cover object-none"
              :src="getPicture"
              :alt="product.name"
            />
          </a>

          <a
            v-else
            href="#"
            class="absolute z-0 top-0 right-0 w-full xl:w-2/4 md:w-full h-full rounded-ful"
          >
            <img
              class="w-full h-full xl:w-full xl:h-auto sm:object-cover object-none object-center"
              :src="getPicture"
              :alt="product.name"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseBtnAddToCart from "./BaseBtnAddToCart.vue";
import BaseButton from "./BaseButton.vue";
import StarRender from "../RatingView/StarRender.vue";

import { userCartList } from "../../stores/Cart/Cart_items.js";
import { getHorizontalPic } from "../hooks/getHorizontalPic";
import { numberFormat } from "../hooks/UseNumberFormat";

export default {
  components: { BaseButton, BaseBtnAddToCart, StarRender },
  props: ["product", "index"],
  setup() {
    const cartList = userCartList();

    return { cartList };
  },
  data() {
    return {
      selectedProd: false,
      loadPic: null,
      windowHeight: window.innerWidth,
    };
  },

  async created() {
    this.loadPic = await getHorizontalPic(this.product.picUrl);
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  computed: {
    qty_thisItem() {
      return this.cartList?.cart.find((prod) => prod.id === this.product.id)
        ?.prodItem_qty;
    },
    ratingStar() {
      return Math.floor(this.product.rating.ratingStar);
    },

    getPicture() {
      // Get URl With Greater Width
      if (!this.loadPic) return;

      if (this.product.picUrl.length <= 1)
        return this.product.picUrl[0];

      return this.loadPic?.length > 1
        ? this.loadPic?.[Math.floor(Math.random() * this.loadPic.length)]
        : this.loadPic;
    },
    isHighRanking() {
      return this.index <= 2;
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
        picUrl: this.getPicture,
      });
    },
    deleteFromCartEmit() {
      this.$emit("DeleteFromCart", this.product.id);
    },

    onResize() {
      this.windowHeight = window.innerWidth;
    },
  },
};
</script>

<style lang="scss" scoped>
.blackText {
  color: rgb(30 41 59) !important;

  @media (max-width: 1280px) {
    color: rgb(255, 255, 255) !important;
  }
}
</style>
