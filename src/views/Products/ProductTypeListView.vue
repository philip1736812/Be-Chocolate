<template>
  <div>
    <div>
      <div class="relative w-full h-96 overflow-hidden">
        <div
          class="absolute z-30 text-white w-2/4 h-full flex flex-col justify-center pl-16"
        >
          <h2 class="text-3xl mb-4 font-bold">Cacao Pods</h2>
          <p class="w-3/4 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            laboriosam eligendi aliquam totam assumenda sapiente optio
            cupiditate laudantium quisquam distinctio nostrum eos, praesentium
            iste iure quam repudiandae vitae atque ducimus.
          </p>
        </div>

        <div
          class="w-3/4 h-96 absolute overlay bg-gradient-to-r from-neutral-900 z-20"
        ></div>
        <img
          class="absolute w-full h-auto object-cover -translate-y-1/4 z-10"
          :src="getHeaderPic"
          :alt="productTypeName"
        />
      </div>
    </div>
    <main>
      <teleport to="body">
        <cart-balloon></cart-balloon>
      </teleport>

      <div>
        <div
          class="container bg-slate-200 p-1.5 pl-6 rounded-lg mx-auto w-3/4 mt-12 mb-8 flex justify-between"
        >
          <div class="flex justify-start items-center text-xl">
            <div class="mr-20">
              <h2 class="text-xl font-medium">
                <span
                  ><font-awesome-icon
                    icon="fa-filter"
                    class="text-slate-700 mr-1"
                /></span>
                Filter
              </h2>
            </div>
            <div class="flex mr-8">
              <p class="mr-2.5 text-lg">Price</p>
              <div @click="activeFilter('byPrice')">
                <kbd
                  v-if="isFilter.byPrice"
                  class="inline-flex opacity-50 hover:opacity-80 scale-y-75 items-center px-2 py-1.5 text-gray-800 bg-gray-100 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
                  :class="{ filterActive: isFilter.byPrice }"
                >
                  <svg
                    class="w-6 h-6"
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
                  class="inline-flex opacity-50 hover:opacity-80 scale-y-75 items-center px-2 py-1.5 text-gray-800 bg-gray-100 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
                >
                  <svg
                    class="w-6 h-6"
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
            <div class="flex mr-8">
              <p class="mr-2.5 text-lg">Amount</p>
              <div @click="activeFilter('byAmount')">
                <kbd
                  v-if="isFilter.byAmount"
                  class="inline-flex opacity-50 hover:opacity-80 scale-y-75 items-center px-2 py-1.5 text-gray-800 bg-gray-100 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
                  :class="{ filterActive: isFilter.byAmount }"
                >
                  <svg
                    class="w-6 h-6"
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
                  class="inline-flex opacity-50 hover:opacity-80 scale-y-75 items-center px-2 py-1.5 text-gray-800 bg-gray-100 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
                >
                  <svg
                    class="w-6 h-6"
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
            <div class="flex mr-8">
              <p class="mr-2.5 text-lg">Sold</p>
              <div @click="activeFilter('bySold')">
                <kbd
                  v-if="isFilter.bySold"
                  class="inline-flex opacity-50 hover:opacity-80 scale-y-75 items-center px-2 py-1.5 text-gray-800 bg-gray-100 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
                  :class="{ filterActive: isFilter.bySold }"
                >
                  <svg
                    class="w-6 h-6"
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
                  class="inline-flex opacity-50 hover:opacity-80 scale-y-75 items-center px-2 py-1.5 text-gray-800 bg-gray-100 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
                >
                  <svg
                    class="w-6 h-6"
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

          <div class="flex">
            <div class="max-w-xs">
              <base-search-bar
                @submitSearchEmit="searchActive"
              ></base-search-bar>
            </div>
          </div>
        </div>

        <div>
          <base-product-card
            v-for="prod in getProductFromFilter"
            :key="prod"
            :product="prod"
            @selectedProductToCart="addToCart"
            @deletedProduct="deleteSelectedProd"
          ></base-product-card>
        </div>
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

export default {
  props: ["productTypeName"],
  components: { CartBalloon, BaseProductCard, BaseSearchBar },
  setup() {
    const productItems = useProductStore();
    const cartList = userCartList();

    return { productItems, cartList };
  },
  data() {
    return {
      searchText: "",
      isFilter: {
        byPrice: true,
        byAmount: false,
        bySold: false,
      },
    };
  },
  computed: {
    getProductName() {
      // for get data from store
      return this.searchText === ""
        ? this.productItems.getAllProductType
        : this.productItems.getAllProductType.filter((prod) => {
            return prod.storeName
              .toLowerCase()
              .includes(this.searchText.toLowerCase());
          });
    },
    getProductFromFilter() {
      // Filter By Price
      let allProduct = this.getProductName.slice();

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
      const randomNum = Math.floor(
        Math.random() * this.productItems.headerProduct.length
      );

      return this.productItems.headerProduct[
        Math.floor(Math.random() * this.productItems.headerProduct.length)
      ][this.productTypeName][
        Math.floor(
          Math.random() *
            this.productItems.headerProduct[
              Math.floor(Math.random() * this.productItems.headerProduct.length)
            ][this.productTypeName].length
        )
      ];
    },
    itemInCart() {
      return this.cartList.itemInCart;
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
  },
};
</script>

<style lang="scss" scoped>
.filterActive {
  opacity: 1;
  transform: scale(1.1);
}
</style>
