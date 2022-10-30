<template>
  <div>
    <div>
      <div class="relative w-full h-60 md:h-80 overflow-hidden">
        <div
          class="absolute z-40 text-white w-full md:w-2/4 h-full flex flex-col justify-center px-5 md:pl-16"
        >
          <h2 class="text-lg md:text-2xl mb-4 font-bold">
            {{ convertProductName }}
          </h2>
          <p class="w-full text-sm md:text-base xl:w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            laboriosam eligendi aliquam totam assumenda sapiente optio
            cupiditate laudantium quisquam distinctio nostrum eos, praesentium
            iste iure quam repudiandae vitae atque ducimus.
          </p>
        </div>

        <div
          class="absolute w-full h-60 md:h-80 z-30 overlay bg-gradient-to-r from-neutral-900"
        ></div>
        <base-picture-frame
          stylePic="w-full h-60 sm:h-full object-cover"
          styleLoading="top-0 w-auto sm:w-full h-60 md:h-80"
          :picSrc="getHeaderPic"
          :productName="productTypeName"
        >
        </base-picture-frame>
      </div>
    </div>
    <main>
      <teleport to="body">
        <cart-balloon></cart-balloon>
      </teleport>

      <div v-if="!isEmptyProductData">
        <div
          class="xl:bg-slate-200 p-5 xl:p-0.5 xl:pl-6 rounded-lg mx-auto w-full xl:w-3/4 mt-1 xl:mt-12 mb-0 xl:mb-8 flex flex-col md:flex-row md:items-center md:justify-between"
        >
          <div
            class="flex justify-around xl:justify-start items-center text-base md:text-xl mb-8 md:mb-0"
          >
            <div class="mr-2 md:mr-14">
              <h2 class="text-base md:text-base font-medium">
                <span
                  ><font-awesome-icon
                    icon="fa-filter"
                    class="text-slate-700 mr-1"
                /></span>
              </h2>
            </div>
            <div class="flex items-center mr-2.5 md:mr-8">
              <p class="md:mr-1.5 md:mr-2.5 text-base">Price</p>
              <div @click="activeFilter('byPrice')">
                <kbd
                  v-if="isFilter.byPrice"
                  class="inline-flex opacity-50 hover:opacity-80 scale-y-75 items-center px-1 py-1 md:px-2 md:py-1.5 text-gray-800 bg-gray-100 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
                  :class="{ filterActive: isFilter.byPrice }"
                >
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      d="M9.39 265.4l127.1-128C143.6 131.1 151.8 128 160 128s16.38 3.125 22.63 9.375l127.1 128c9.156 9.156 11.9 22.91 6.943 34.88S300.9 320 287.1 320H32.01c-12.94 0-24.62-7.781-29.58-19.75S.2333 274.5 9.39 265.4z"
                    />
                  </svg>
                  <span class="sr-only">Arrow key up</span>
                </kbd>
                <kbd
                  v-else
                  class="inline-flex opacity-50 hover:opacity-80 scale-y-75 items-center px-1 py-1 text-gray-800 bg-gray-100 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
                >
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"
                    />
                  </svg>
                  <span class="sr-only">Arrow key down</span>
                </kbd>
              </div>
            </div>
            <div class="flex items-center mr-2.5 md:mr-8">
              <p class="md:mr-1.5 md:mr-2.5 text-base">Amount</p>
              <div @click="activeFilter('byAmount')">
                <kbd
                  v-if="isFilter.byAmount"
                  class="inline-flex opacity-50 hover:opacity-80 scale-y-75 items-center px-1 py-1 text-gray-800 bg-gray-100 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
                  :class="{ filterActive: isFilter.byAmount }"
                >
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      d="M9.39 265.4l127.1-128C143.6 131.1 151.8 128 160 128s16.38 3.125 22.63 9.375l127.1 128c9.156 9.156 11.9 22.91 6.943 34.88S300.9 320 287.1 320H32.01c-12.94 0-24.62-7.781-29.58-19.75S.2333 274.5 9.39 265.4z"
                    />
                  </svg>
                  <span class="sr-only">Arrow key up</span>
                </kbd>
                <kbd
                  v-else
                  class="inline-flex opacity-50 hover:opacity-80 scale-y-75 items-center px-1 py-1 text-gray-800 bg-gray-100 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
                >
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"
                    />
                  </svg>
                  <span class="sr-only">Arrow key down</span>
                </kbd>
              </div>
            </div>
            <div class="flex items-center mr-2.5 md:mr-8">
              <p class="md:mr-1.5 md:mr-2.5 text-base">Sold</p>
              <div @click="activeFilter('bySold')">
                <kbd
                  v-if="isFilter.bySold"
                  class="inline-flex opacity-50 hover:opacity-80 scale-y-75 items-center px-1 py-1 text-gray-800 bg-gray-100 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
                  :class="{ filterActive: isFilter.bySold }"
                >
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      d="M9.39 265.4l127.1-128C143.6 131.1 151.8 128 160 128s16.38 3.125 22.63 9.375l127.1 128c9.156 9.156 11.9 22.91 6.943 34.88S300.9 320 287.1 320H32.01c-12.94 0-24.62-7.781-29.58-19.75S.2333 274.5 9.39 265.4z"
                    />
                  </svg>
                  <span class="sr-only">Arrow key up</span>
                </kbd>
                <kbd
                  v-else
                  class="inline-flex opacity-50 hover:opacity-80 scale-y-75 items-center px-1 py-1 text-gray-800 bg-gray-100 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
                >
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"
                    />
                  </svg>
                  <span class="sr-only">Arrow key down</span>
                </kbd>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-center">
            <div class="w-full max-w-md lg:max-w-xs">
              <base-search-bar
                @submitSearchEmit="searchActive"
              ></base-search-bar>
            </div>
          </div>
        </div>
        <div class="px-4">
          <base-product-card
            v-for="(prod, index) in getProductFromFilter"
            :key="prod"
            :product="prod"
            :index="index"
            @selectedProductToCart="addToCart"
            @deletedProduct="deleteSelectedProd"
          ></base-product-card>
        </div>

        <the-pagination
          @prevCommentPageEmit="prevCommentPage"
          @nextCommentPageEmit="nextCommentPage"
          :activePage="activePage"
          :amountOfPage="amountOfPaginationPage"
        ></the-pagination>
      </div>
      <div v-else class="container w-3/4 mx-auto my-48">
        <h1 class="text-center text-lg font-medium">
          ** Have No {{ convertProductName }} Dummy Data ** <br />
          <span class="text-xl font-light">Please try later!</span>
        </h1>
      </div>
    </main>
  </div>
</template>

<script>
import { useProductStore } from "@/stores/ProductItems/Store_product";
import { userCartList } from "@/stores/Cart/Cart_items";

import CartBalloon from "@/components/TheNavigator/CartBalloon.vue";
import BaseProductCard from "@/components/UI/BaseProductCard.vue";
import BaseSearchBar from "../../components/UI/BaseSearchBar.vue";
import ThePagination from "../../components/ReUseComp/ThePagination.vue";
import BasePictureFrame from "../../components/UI/BasePictureFrame.vue";

export default {
  props: ["productTypeName"],
  components: {
    CartBalloon,
    BaseProductCard,
    BaseSearchBar,
    ThePagination,
    BasePictureFrame,
  },
  setup() {
    const productItems = useProductStore();
    const cartList = userCartList();

    return { productItems, cartList };
  },
  data() {
    return {
      searchText: "",
      isEmptyProductData: false,
      isFilter: {
        byPrice: true,
        byAmount: false,
        bySold: false,
      },
      AMOUNT_PRODUCT_PER_PAGE: 3,
      activePage: 1,
    };
  },
  computed: {
    getProductName() {
      const crrNav = this.productTypeName + `Items`;
      this.productItems.activeProduct(crrNav);

      // for get data from store
      return this.searchText === ""
        ? this.productItems.getAllProductType
        : this.productItems.getAllProductType.filter((prod) => {
            return prod.storeName
              .toLowerCase()
              .includes(this.searchText.toLowerCase());
          });
    },
    amountOfPaginationPage() {
      return Math.ceil(
        this.getProductName.length / this.AMOUNT_PRODUCT_PER_PAGE
      );
    },
    getProductFromFilter() {
      // Filter By Price
      let allProduct = this.getProductName.slice(
        (this.activePage - 1) * this.AMOUNT_PRODUCT_PER_PAGE,
        this.AMOUNT_PRODUCT_PER_PAGE * this.activePage
      );

      if (allProduct.length <= 0) this.isEmptyProductData = true;

      const filterFn = (prevVal, crrVal, filter, isFilter) => {
        const a = prevVal[filter];
        const b = crrVal[filter];

        if (isFilter) {
          if (a < b) return -1;
        } else {
          if (a > b) return -1;
        }
      };

      allProduct.sort((a, b) => {
        return filterFn(a, b, "price", this.isFilter.byPrice);
      });

      // Filter By Amount
      if (this.isFilter.byAmount) {
        allProduct.sort((a, b) => {
          return filterFn(b, a, "remaining", this.isFilter.byAmount);
        });
      }

      // Filter By Sold
      if (!this.isFilter.bySold) return allProduct;
      allProduct.sort((a, b) => {
        return filterFn(b, a, "soldCount", this.isFilter.bySold);
      });

      return allProduct;
    },
    getHeaderPic() {
      // get pic from store
      return this.productItems.headerProduct[this.productTypeName][
        Math.floor(
          Math.random() *
            this.productItems.headerProduct[this.productTypeName].length
        )
      ];
    },
    itemInCart() {
      return this.cartList.itemInCart;
    },
    convertProductName() {
      const result = this.productTypeName.replace(/([A-Z])/g, " $1");
      const finalResult = result.charAt(0).toUpperCase() + result.slice(1);

      return finalResult;
    },
  },

  methods: {
    addToCart(prod) {
      this.cartList.addToTheCart(prod);
    },

    deleteSelectedProd(prodId) {
      this.cartList.deleteFromCart(prodId);
    },
    searchActive(search) {
      this.searchText = search;
    },

    activeFilter(filterBy) {
      for (const prod in this.isFilter) {
        this.isFilter[prod] = prod === filterBy ? !this.isFilter[prod] : false;
      }
    },

    nextCommentPage() {
      this.activePage >= 1 && this.activePage < this.amountOfPaginationPage
        ? (this.activePage += 1)
        : 1;
    },
    prevCommentPage() {
      this.activePage > 1 && this.activePage <= this.amountOfPaginationPage
        ? (this.activePage -= 1)
        : 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.filterActive {
  opacity: 1;
  transform: scale(1.1);
}
</style>
