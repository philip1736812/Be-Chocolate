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
          {{ getVoteScore }}
          Vote
        </p>
      </div>

      <div
        class="w-11/12 lg:w-3/4 mx-auto bg-slate-600 rounded-lg text-white text-center"
      >
        <carousel :imgSource="getProduct.picUrl"></carousel>
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
        <div class="mt-10 px-0 md:px-16">
          <ul
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
          >
            <li
              class="py-3.5 xl:py-2 mx-1 my-1 cursor-pointer text-sm lg:text-base font-medium text-center flex flex-1 flex-col xl:flex-row items-center justify-center w-auto max-w-md bg-white rounded-lg border sm:p-3.5 dark:bg-gray-800 dark:border-gray-700 opacity-50 transition-all"
              :class="
                filterCommentBy === 'all' ? 'border-slate-800 opacity-100' : ''
              "
              @click="filterCommentByStar('all')"
            >
              <p>All</p>
              <p class="mx-0 xl:ml-2 text-sm md:text-sm mt-0.5">
                ({{ getCommentThisId.length }})
              </p>
            </li>
            <li
              class="py-3.5 xl:py-2 mx-1 my-1 cursor-pointer text-sm lg:text-base font-medium text-center flex flex-1 flex-col xl:flex-row items-center justify-center w-auto max-w-md bg-white rounded-lg border sm:p-3.5 dark:bg-gray-800 dark:border-gray-700 opacity-50 transition-all"
              :class="
                filterCommentBy === '0_2' ? 'border-slate-800 opacity-100' : ''
              "
              @click="filterCommentByStar('0_2')"
            >
              <p>0-2 Star</p>
              <p class="mx-0 xl:ml-2 text-sm md:text-sm mt-0.5">
                ({{ get0_2_amount.length }})
              </p>
            </li>
            <li
              class="py-3.5 xl:py-2 mx-1 my-1 cursor-pointer text-sm lg:text-base font-medium text-center flex flex-1 flex-col xl:flex-row items-center justify-center w-auto max-w-md bg-white rounded-lg border sm:p-3.5 dark:bg-gray-800 dark:border-gray-700 opacity-50 transition-all"
              :class="
                filterCommentBy === '3_5' ? 'border-slate-800 opacity-100' : ''
              "
              @click="filterCommentByStar('3_5')"
            >
              <p>3-5 Star</p>
              <p class="mx-0 xl:ml-2 text-sm md:text-sm mt-0.5">
                ({{ get3_5_amount.length }})
              </p>
            </li>
            <li
              class="py-3.5 xl:py-2 mx-1 my-1 cursor-pointer text-sm lg:text-base font-medium text-center flex flex-1 flex-col xl:flex-row items-center justify-center w-auto max-w-md bg-white rounded-lg border sm:p-3.5 dark:bg-gray-800 dark:border-gray-700 opacity-50 transition-all"
              :class="
                filterCommentBy === '6_8' ? 'border-slate-800 opacity-100' : ''
              "
              @click="filterCommentByStar('6_8')"
            >
              <p>6-8 Star</p>
              <p class="mx-0 xl:ml-2 text-sm md:text-sm mt-0.5">
                ({{ get6_8_amount.length }})
              </p>
            </li>
            <li
              class="py-3.5 xl:py-2 mx-1 my-1 cursor-pointer text-sm lg:text-base font-medium text-center flex flex-1 flex-col xl:flex-row items-center justify-center w-auto max-w-md bg-white rounded-lg border sm:p-3.5 dark:bg-gray-800 dark:border-gray-700 opacity-50 transition-all"
              :class="
                filterCommentBy === '9_10' ? 'border-slate-800 opacity-100' : ''
              "
              opacity-70
              @click="filterCommentByStar('9_10')"
            >
              <p>9-10 Star</p>
              <p class="mx-0 xl:ml-2 text-sm md:text-sm mt-0.5">
                ({{ get9_10_amount.length }})
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div class="px-0 md:px-16">
        <div>
          <div v-if="getCommentReview.length">
            <div v-for="comment in filterComment" :key="comment.id">
              <base-comment-box :comment="comment"></base-comment-box>
            </div>
          </div>

          <div v-else class="flex items-center justify-center h-80">
            <div v-if="isCommentLoading">
              <base-loading></base-loading>
            </div>

            <p v-else>No any comments {{ isCommentLoading }}</p>
          </div>
        </div>

        <the-pagination
          :activePage="activePage"
          @prevCommentPageEmit="prevCommentPage"
          @nextCommentPageEmit="nextCommentPage"
          :amountOfPage="pageCommentAmount"
        ></the-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { useCraftChocolateStore } from "@/stores/CraftChocolate/Store_craftChocolate.js";
import { userCartList } from "@/stores/Cart/Cart_items";
import { useCommentsAndReviewStore } from "../../stores/Comments/Store_commentsReview";
import { numberFormat } from "../../components/hooks/UseNumberFormat";

import StarRender from "@/components/RatingView/StarRender.vue";
import Carousel from "@/components/CraftChocolateView/Carousel.vue";
import BaseBtnAddToCart from "@/components/UI/BaseBtnAddToCart.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
import BaseCommentBox from "../../components/UI/BaseCommentBox.vue";
import ThePagination from "../../components/ReUseComp/ThePagination.vue";
import BaseLoading from "../../components/UI/BaseLoading.vue";

export default {
  props: ["productId"],
  components: {
    StarRender,
    Carousel,
    BaseBtnAddToCart,
    BaseButton,
    BaseCommentBox,
    ThePagination,
    BaseLoading,
  },
  setup() {
    const craftChocolateStore = useCraftChocolateStore();
    const cartList = userCartList();
    const commentAndReviewStore = useCommentsAndReviewStore();

    const filterRange = (item, min, max) => {
      return item.rating.ratingStar >= min && item.rating.ratingStar <= max;
    };

    // Load Comment
    commentAndReviewStore.loadComment();

    return {
      craftChocolateStore,
      cartList,
      commentAndReviewStore,
      filterRange,
    };
  },
  data() {
    return {
      selectedProd: false,
      filterCommentBy: "all",
      activePage: 1,
      PAGINATION_PER_PAGE: 3,
      isCommentLoading: true,
    };
  },
  computed: {
    getProduct() {
      return this.craftChocolateStore.getStoreProduct.find(
        (prod) => +prod.id === +this.productId
      );
    },

    getVoteScore() {
      return numberFormat(this.getProduct.rating.vote);
    },

    qty_thisItem() {
      return this.cartList?.cart.find((prod) => prod.id === this.getProduct.id)
        ?.prodItem_qty;
    },

    getCommentThisId() {
      if (this.commentAndReviewStore.comments.length > 0) {
        this.isCommentLoading = false;
      }

      return this.commentAndReviewStore.comments.filter(
        (item) => item.postId == this.productId
      );
    },

    getCommentReview() {
      return this.getCommentThisId.filter((item) => {
        if (this.filterCommentBy === "all") return item;

        if (this.filterCommentBy === "0_2") return this.filterRange(item, 0, 2);

        if (this.filterCommentBy === "3_5") return this.filterRange(item, 3, 5);

        if (this.filterCommentBy === "6_8") return this.filterRange(item, 6, 8);

        if (this.filterCommentBy === "9_10")
          return this.filterRange(item, 9, 10);
      });
    },

    pageCommentAmount() {
      return (
        Math.ceil(this.getCommentReview.length / this.PAGINATION_PER_PAGE) || 1
      );
    },

    filterComment() {
      const filterComments = this.getCommentReview
        .slice()
        .splice(
          (this.activePage - 1) * this.PAGINATION_PER_PAGE,
          this.PAGINATION_PER_PAGE * this.activePage
        );

      return filterComments;
    },

    get0_2_amount() {
      return this.commentAndReviewStore.comments
        .filter((item) => item.postId == this.productId)
        .filter((item) => this.filterRange(item, 0, 2));
    },
    get3_5_amount() {
      return this.commentAndReviewStore.comments
        .filter((item) => item.postId == this.productId)
        .filter((item) => this.filterRange(item, 3, 5));
    },
    get6_8_amount() {
      return this.commentAndReviewStore.comments
        .filter((item) => item.postId == this.productId)
        .filter((item) => this.filterRange(item, 6, 8));
    },
    get9_10_amount() {
      return this.commentAndReviewStore.comments
        .filter((item) => item.postId == this.productId)
        .filter((item) => this.filterRange(item, 9, 10));
    },
  },

  methods: {
    filterCommentByStar(star) {
      this.filterCommentBy = star;
    },
    addToCart() {
      this.selectedProd = true;

      this.cartList.addToTheCart({
        id: this.getProduct.id,
        type: this.getProduct.type,
        price: this.getProduct.price,
        storeName: this.getProduct.storeName,
        name: this.getProduct.name,
        picUrl:
          this.getProduct.picUrl[
            Math.floor(Math.random() * this.getProduct.picUrl.length)
          ],
      });
    },
    prevCommentPage() {
      this.activePage > 1 && this.activePage <= this.pageCommentAmount
        ? (this.activePage -= 1)
        : 1;
    },
    nextCommentPage() {
      this.activePage >= 1 && this.activePage < this.pageCommentAmount
        ? (this.activePage += 1)
        : 1;
    },
    deleteFromCart() {
      this.cartList.deleteFromCart(+this.productId);
    },
  },
};
</script>
