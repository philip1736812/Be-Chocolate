<template>
  <div
    class="fixed w-11/12 2xl:w-4/6 h-5/6 overflow-y-scroll md:overflow-visible md:h-auto right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 z-40 rounded-md bg-white p-4 md:p-12 shadow-sm"
  >
    <form @submit.prevent="$emit('submitEmit', editItem)">
      <div class="grid gap-6 mb-6 grid-cols-1 md:grid-cols-2">
        <div class="flex flex-col w-full h-auto">
          <div class="w-full h-80">
            <base-picture-frame
              :picSrc="pictureSelected"
              productName=""
              stylePic="w-full h-80 object-cover"
              styleLoading="w-full h-80 "
            ></base-picture-frame>
          </div>

          <div class="relative overflow-auto">
            <div
              class="w-full flex gap-3 snap-x scroll-pl-6 overflow-x-auto py-4"
            >
              <div
                class="w-24 h-24 snap-start shrink-0"
                v-for="pic in editItem.picUrl"
                @click="setPicture(pic)"
                :key="pic"
              >
                <base-picture-frame
                  :picSrc="pic"
                  :productName="editItem.type || editItem.name"
                  stylePic="w-24 h-24 object-cover rounded-sm"
                  styleLoading="w-24 h-24"
                ></base-picture-frame>
              </div>
            </div>
          </div>

          <div>
            <label
              for="pictureUrl"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Add More Picture
            </label>
            <div class="flex space-x-4">
              <input
                type="url"
                id="pictureUrl"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Picture Url"
              />

              <base-button
                mode="articleBtn"
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add
              </base-button>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="my-2">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >Select an option</label
            >
            <select
              id="countries"
              v-model="selectedOption"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="default" selected>Choose a country</option>
              <option
                v-for="name in valueItem"
                :key="name"
                :value="convertTitleCaseToCamelCase(name)"
              >
                {{ convertCamelCaseToTitleCase(name) }}
              </option>
            </select>
          </div>
          <div class="my-2" v-if="selectedOption == 'craftChocolate'">
            <label
              for="phone"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Name</label
            >
            <input
              type="text"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :value="editItem.name"
            />
          </div>
          <div class="my-2">
            <p class="truncate text-gray-900 dark:text-gray-300 text-sm my-1">
              <span class="inline text-gray-900 dark:text-gray-300">
                <font-awesome-icon
                  icon="fa-store"
                  class="mr-1 md:mr-2 text-sm"
                />
              </span>
              {{ editItem.storeName }}
            </p>
          </div>
          <div class="my-2" v-if="selectedOption == 'craftChocolate'">
            <label
              for="description"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Description</label
            >
            <input
              type="text"
              id="description"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              v-model="description"
            />
          </div>
          <div
            class="my-2 flex flex-col lg:flex-row justify-between space-y-2 lg:space-y-0 lg:space-x-6"
          >
            <div class="w-full">
              <label
                for="price"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Price</label
              >
              <div class="flex">
                <input
                  type="number"
                  id="price"
                  class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  v-model.number="editItem.price"
                />
                <div class="flex items-end ml-2 text-md font-medium">
                  <span> B/{{ editItem.unit }} </span>
                </div>
              </div>
            </div>
            <div class="w-full" v-if="selectedOption !== 'craftChocolate'">
              <label
                for="available"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Pieces Available</label
              >
              <div class="flex">
                <input
                  type="number"
                  id="available"
                  class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  v-model.number="editItem.remaining"
                />
                <div class="flex items-end ml-2 text-md font-medium">
                  <span> available </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>

    <div class="mt-12">
      <base-button
        mode="articleBtn"
        type="submit"
        @click.prevent="$emit('submitEmit', editItem)"
      >
        Submit
      </base-button>
      <base-button
        mode="flat"
        type="submit"
        class="ml-4"
        @click.prevent="discardItem"
      >
        Discard
      </base-button>
    </div>

    <teleport to="body">
      <transition name="popUpAnimated" mode="out-in">
        <base-error-pop-up
          v-if="warningMsg !== ''"
          :errMsg="warningMsg"
          descriptionMsg="you have unsaved changes content, and will be lose unless you save it."
          mode="warning"
          @closePopUp="confirmClosePopUp"
          @cancelAction="cancelAction"
        ></base-error-pop-up>
      </transition>
    </teleport>

    <teleport to="body">
      <div
        class="overlay backdrop-blur-sm w-full h-full fixed z-30 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-black/30 rounded-md px-1.5 sm:px-3 py-2 cursor-pointer"
        @click="discardItem"
      ></div>
    </teleport>
  </div>
</template>

<script setup>
import BasePictureFrame from "@/components/UI/BasePictureFrame.vue";
import BaseButton from "../../../components/UI/BaseButton.vue";
import BaseErrorPopUp from "../../../components/UI/BaseErrorPopUp.vue";

import { useProductStore } from "./../../../stores/ProductItems/Store_product";
import {
  convertCamelCaseToTitleCase,
  convertTitleCaseToCamelCase,
} from "../../../components/hooks/ConvertText";
import { computed, defineProps, defineEmits, ref, reactive } from "vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const emits = defineEmits(["closeEmit", "submitEmit"]);

// Set Picture

const pictureSelected = ref(props.item.picUrl[0]);
const setPicture = (picUrl) => {
  pictureSelected.value = picUrl;
};

const description = ref(props.item.description);

const productItems = useProductStore();
const valueItem = [];
const selectedOption = ref(props.item.type);
for (const [value] of Object.entries(productItems.allProducts)) {
  valueItem.unshift(value.replace("Items", ""));
}

// Edit Item
const editItem = reactive({
  ...props.item,
  name: props.item.name,
  description: props.item.description,
  type: props.item.type,
  price: props.item.price,
  remaining: props.item.remaining,
  soldCount: props.item.soldCount,
  picUrl: props.item.picUrl,
});

// Question Before Leave
const warningMsg = ref("");

const discardItem = () => {
  warningMsg.value = `Are you sure you want to leave this site?`;
};

const confirmClosePopUp = () => {
  emits("closeEmit");
};
const cancelAction = () => {
  warningMsg.value = "";
};
</script>

<style lang="scss" scoped>
.popUpAnimated-enter-active {
  animation: popUpAnimated 0.15s ease-in;
}

.popUpAnimated-leave-active {
  animation: popUpAnimated 0.15s ease-out reverse;
}

@keyframes popUpAnimated {
  0% {
    opacity: 0;
    transform: translate(50%, -50%) scale(0);
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
