<template>
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
