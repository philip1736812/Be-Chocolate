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

          <select
            id="countries"
            v-model="selectedOption"
            class="flex-shrink-0 z-10 inline-flex w-40 items-center px-2 md:px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <option value="default" selected>All Product</option>
            <option
              v-for="type in allProductType"
              :key="type"
              :value="convertToCamelCase(type)"
            >
              {{ convertToTitleCase(type) }}
            </option>
          </select>

          <div class="relative w-full">
            <base-search-bar
              action="input"
              classStyle="rounded-none py-2.5 rounded-r-md"
              @submitSearchEmit="submitSearch"
            ></base-search-bar>
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
        v-for="(item, index) in getItemInventory"
        :product="item"
        :key="item.id"
        :index="index"
        @editItems_inventoryEmit="editItems_inventory"
      ></base-product-card-vertical>
    </div>

    <teleport to="body">
      <transition name="popUpAnimated" mode="out-in">
        <edit-item-inventory
          v-if="isShow_editItemView"
          @closeEmit="closeEditItem"
          @submitEmit="submitEditItem"
          :item="editItems"
        ></edit-item-inventory>
      </transition>
    </teleport>
  </div>
</template>

<script>
import BaseButton from "../../../components/UI/BaseButton.vue";
import BaseProductCardVertical from "../../../components/UI/BaseProductCardVertical.vue";
import BaseSearchBar from "../../../components/UI/BaseSearchBar.vue";
import MyStore_edit_ItemInventory from "./MyStore_edit_ItemInventory.vue";
import {
  convertTitleCaseToCamelCase,
  convertCamelCaseToTitleCase,
} from "../../../components/hooks/ConvertText";

import { useMyStore } from "../../../stores/MyStore/Store_myStore";
import { useProductStore } from "../../../stores/ProductItems/Store_product";

import { computed, ref, onMounted } from "vue";
import BaseBtnAddToCart from "../../../components/UI/BaseBtnAddToCart.vue";

export default {
  components: {
    BaseButton,
    BaseProductCardVertical,
    BaseBtnAddToCart,
    EditItemInventory: MyStore_edit_ItemInventory,
    BaseSearchBar,
  },
  setup() {
    const myStore = useMyStore();
    const productItems = useProductStore();

    const allItemInInventory = ref([]);

    const getItemInventory = computed(() => {
      allItemInInventory.value = [];
      Object.keys(myStore.inventory).forEach((item) => {
        myStore.inventory[item].forEach((id) => {
          const FindProduct = productItems.allProducts[item].find((prod) => {
            return prod.id == id;
          });
          allItemInInventory.value.push(FindProduct);
        });
      });

      if (searchBy.value === "" && selectedOption.value === "default") {
        return allItemInInventory.value;
      } else if (selectedOption.value !== "default") {
        return allItemInInventory.value.slice().filter((item) => {
          return item.type
            ?.toLowerCase()
            .includes(selectedOption.value.toLowerCase());
        });
      } else {
        return allItemInInventory.value.slice().filter((item) => {
          return (
            `${item.price}`
              ?.toLowerCase()
              .includes(searchBy.value.toLowerCase()) ||
            item.storeName
              ?.toLowerCase()
              .includes(searchBy.value.toLowerCase()) ||
            item.type?.toLowerCase().includes(searchBy.value.toLowerCase()) ||
            item.name?.toLowerCase().includes(searchBy.value.toLowerCase())
          );
        });
      }
    });

    console.log(allItemInInventory.value);

    // Action Edit Items in Inventory
    const isShow_editItemView = ref(false);
    const editItems = ref("");

    const editItems_inventory = (item) => {
      isShow_editItemView.value = true;
      editItems.value = item;
    };

    const closeEditItem = () => {
      isShow_editItemView.value = false;
    };
    const submitEditItem = (value) => {
      isShow_editItemView.value = false;
      productItems.editItemsStore(value);
    };

    // Filter By Searching Text and selected option
    const searchBy = ref("");
    const submitSearch = (searchStr) => {
      searchBy.value = searchStr;
    };

    // set value and get Value from option
    const selectedOption = ref("default");
    const allProductType = computed(() => {
      const allType = ref([]);
      allItemInInventory.value.forEach((item) => {
        allType.value.push(item.type);
      });

      return [...new Set(allType.value)];
    });
    const convertToTitleCase = (str) => {
      return convertCamelCaseToTitleCase(str);
    };
    const convertToCamelCase = (str) => {
      return convertTitleCaseToCamelCase(str);
    };

    return {
      getItemInventory,
      editItems_inventory,
      isShow_editItemView,
      editItems,
      closeEditItem,
      submitEditItem,
      submitSearch,
      allProductType,
      convertToTitleCase,
      convertToCamelCase,
      selectedOption,
    };
  },
};
</script>

<style lang="scss" scoped>
.popUpAnimated-enter-active {
  animation: popUpAnimated 0.25s ease-in;
}

.popUpAnimated-leave-active {
  animation: popUpAnimated 0.35s ease-out reverse;
}

@keyframes popUpAnimated {
  0% {
    opacity: 0;
    transform: translate(50%, -50%) scale(0);
    transform: translateX();
  }
  85% {
    opacity: 1;
    transform: translate(50%, -50%) scale(1.02);
  }
  100% {
    opacity: 1;
    transform: translate(50%, -50%) scale(1);
  }
}
</style>
