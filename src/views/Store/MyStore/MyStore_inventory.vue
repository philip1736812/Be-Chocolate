<template>
  <div>
    <div class="w-full">
      <form>
        <div class="flex">
          <label
            for="search-dropdown"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >Your Email</label
          >
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            type="button"
          >
            All categories
            <svg
              aria-hidden="true"
              class="ml-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            id="dropdown"
            class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
            data-popper-reference-hidden=""
            data-popper-escaped=""
            data-popper-placement="bottom"
            style="
              position: absolute;
              inset: 0px auto auto 0px;
              margin: 0px;
              transform: translate(0px, 10px);
            "
          >
            <ul
              class="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-button"
            >
              <li>
                <a
                  href="#"
                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >Shopping</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >Images</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >News</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >Finance</a
                >
              </li>
            </ul>
          </div>
          <div class="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Search"
              required=""
            />
            <button
              type="submit"
              class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
    <div
      class="container w-full grid grid-cols-2 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mx-auto mt-8"
    >
      <div
        class="text-slate-800 relative w-full text-gray-800 mb-6 px-1.5 sm:px-3 py-2 rounded-lg hover:z-50 hover:scale-105 transition-all"
      >
        <base-button
          class="w-full h-full border rounded-md flex items-center justify-center transition-all hover:shadow-md"
        >
          <span><font-awesome-icon icon="fa-plus" class="text-sm mr-1" /></span>
          <p class="text-sm">Add Items</p>
        </base-button>
      </div>
      <base-product-card-vertical
        v-for="item in getItemInventory"
        :product="item"
        :key="item.id"
      ></base-product-card-vertical>
    </div>
  </div>
</template>

<script>
import BaseButton from "../../../components/UI/BaseButton.vue";
import BaseProductCardVertical from "../../../components/UI/BaseProductCardVertical.vue";
import { useMyStore } from "../../../stores/MyStore/Store_myStore";
import { useProductStore } from "../../../stores/ProductItems/Store_product";

import { computed } from "vue";
import BaseBtnAddToCart from "../../../components/UI/BaseBtnAddToCart.vue";

export default {
  components: { BaseButton, BaseProductCardVertical, BaseBtnAddToCart },
  setup() {
    const myStore = useMyStore();
    const productItems = useProductStore();

    const getItemInventory = computed(() => {
      let allItemInInventory = [];

      Object.keys(myStore.inventory).forEach((item) => {
        myStore.inventory[item].forEach((id) => {
          const FindProduct = productItems.allProducts[item].find((prod) => {
            return prod.id == id;
          });
          allItemInInventory.push(FindProduct);
        });
      });

      return allItemInInventory;
    });

    return { getItemInventory };
  },
};
</script>
