<template>
  <div
    class="fixed w-11/12 2xl:w-4/6 h-5/6 overflow-y-scroll md:overflow-visible md:h-auto right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 z-40 rounded-md bg-white p-4 md:p-12 shadow-sm"
  >
    <form
      @submit.stop.prevent="submitEmit"
      @keydown.stop.prevent.enter="submitEmit"
    >
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
                v-for="pic in getItemProduct.picUrl"
                @click="setPicture(pic)"
                :key="pic"
              >
                <base-picture-frame
                  :picSrc="pic"
                  :productName="getItemProduct.type || getItemProduct.name"
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
            <div class="flex flex-col">
              <div class="flex w-full space-x-4">
                <input
                  type="url"
                  id="pictureUrl"
                  class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  :class="
                    !isCorrectInput && !getItemProduct.picUrl.length < 4
                      ? 'border-red-500'
                      : 'border-gray-300'
                  "
                  placeholder="Picture Url"
                  v-model="newPicture"
                />

                <base-button
                  @click.prevent="addMorePic"
                  mode="articleBtn"
                  type="submit"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add
                </base-button>
              </div>

              <p
                v-if="!isCorrectInput && !getItemProduct.picUrl.length < 4"
                class="text-sm font-medium text-red-700"
              >
                <span
                  ><font-awesome-icon icon="fa-triangle-exclamation"
                /></span>
                we are recommence at least 4 picture for describe your product.
              </p>
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
              v-model="getItemProduct.type"
              class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :class="
                !isCorrectInput && !getItemProduct.type
                  ? 'border-red-500'
                  : 'border-gray-300'
              "
            >
              <option value="">Choose a products</option>
              <option
                v-for="name in valueItem"
                :key="name"
                :value="convertTitleCaseToCamelCase(name)"
              >
                {{ convertCamelCaseToTitleCase(name) }}
              </option>
            </select>

            <p
              v-if="!isCorrectInput && !getItemProduct.type"
              class="text-sm font-medium text-red-700"
            >
              <span><font-awesome-icon icon="fa-triangle-exclamation" /></span>
              Required Field
            </p>
          </div>
          <div class="my-2" v-if="getItemProduct.type == 'craftChocolate'">
            <label
              for="phone"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Name</label
            >
            <input
              type="text"
              id="name"
              class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :class="
                !isCorrectInput && !getItemProduct.name
                  ? 'border-red-500'
                  : 'border-gray-300'
              "
              v-model="getItemProduct.name"
              placeholder="Name"
            />
            <p
              v-if="!isCorrectInput && !getItemProduct.name"
              class="text-sm font-medium text-red-700"
            >
              <span><font-awesome-icon icon="fa-triangle-exclamation" /></span>
              Required Field
            </p>
          </div>
          <div class="my-2">
            <p class="truncate text-gray-900 dark:text-gray-300 text-sm my-1">
              <span class="inline text-gray-900 dark:text-gray-300">
                <font-awesome-icon
                  icon="fa-store"
                  class="mr-1 md:mr-2 text-sm"
                />
              </span>
              {{ getItemProduct.storeName }}
            </p>
          </div>
          <div class="my-2" v-if="getItemProduct.type == 'craftChocolate'">
            <label
              for="description"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Description</label
            >
            <input
              type="text"
              id="description"
              class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :class="
                !isCorrectInput && !getItemProduct.description
                  ? 'border-red-500'
                  : 'border-gray-300'
              "
              v-model="getItemProduct.description"
              placeholder="Description"
            />
            <p
              v-if="!isCorrectInput && !getItemProduct.description"
              class="text-sm font-medium text-red-700"
            >
              <span><font-awesome-icon icon="fa-triangle-exclamation" /></span>
              Required Field
            </p>
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
                  class="w-full bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  :class="
                    !isCorrectInput && !getItemProduct.price
                      ? 'border-red-500'
                      : 'border-gray-300'
                  "
                  placeholder="Price"
                  v-model.number="getItemProduct.price"
                />

                <div class="flex items-end ml-2 text-md font-medium">
                  <span>
                    ฿/{{
                      getItemProduct.type == "craftChocolate" ? "piece" : "kg"
                    }}
                  </span>
                </div>
              </div>
              <p
                v-if="!isCorrectInput && !getItemProduct.price"
                class="text-sm font-medium text-red-700"
              >
                <span
                  ><font-awesome-icon icon="fa-triangle-exclamation"
                /></span>
                Required Field
              </p>
            </div>
            <div class="w-full" v-if="getItemProduct.type !== 'craftChocolate'">
              <label
                for="available"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Pieces Available</label
              >
              <div class="flex">
                <input
                  type="number"
                  id="available"
                  class="w-full bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  :class="
                    !isCorrectInput && !getItemProduct.remaining
                      ? 'border-red-500'
                      : 'border-gray-300'
                  "
                  placeholder="Pieces Available"
                  v-model.number="getItemProduct.remaining"
                />
                <div class="flex items-end ml-2 text-md font-medium">
                  <span> available </span>
                </div>
              </div>
              <p
                v-if="!isCorrectInput && !getItemProduct.remaining"
                class="text-sm font-medium text-red-700"
              >
                <span
                  ><font-awesome-icon icon="fa-triangle-exclamation"
                /></span>
                Required Field
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>

    <div class="mt-12">
      <base-button mode="articleBtn" type="submit" @click.prevent="submitEmit">
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
          :descriptionMsg="descriptionWarningMsg"
          :mode="modeErr"
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
import { useMyStore } from "../../../stores/MyStore/Store_myStore";
import {
  convertCamelCaseToTitleCase,
  convertTitleCaseToCamelCase,
} from "../../../components/hooks/ConvertText";
import { defineProps, defineEmits, ref, reactive } from "vue";

const props = defineProps({
  item: {
    type: Object || null,
  },
});

const emits = defineEmits(["closeEmit", "submitEmit"]);

// Edit Item
const myStore = useMyStore();

const getItemProduct = reactive({
  ...props.item,
  id:
    props.item.id ||
    Math.trunc(
      Math.random() * (900000000000000 - 100000000000000) + 100000000000000
    ),
  name: props.item.name || "",
  storeName: myStore.myStoreName,
  description: props.item.description || "",
  type: props.item.type || "",
  price: props.item.price || "",
  remaining: props.item.remaining || "",
  soldCount: props.item.soldCount || "",
  picUrl: props.item.picUrl || [],
});

const pictureSelected = ref(getItemProduct?.picUrl?.[0]);
const setPicture = (picUrl) => {
  pictureSelected.value = picUrl;
};

const productItems = useProductStore();
const valueItem = ref([]);
for (const [value] of Object.entries(productItems.getAllProduct)) {
  valueItem.value.unshift(value.replace("Items", ""));
}

// Submit Edit and Add New item
let isCorrectInput = ref(true);

const submitEmit = () => {
  // Check Empty Form
  isCorrectInput.value = true;

  const isEmptyForm = () => {
    let checkValue = {};
    if (getItemProduct.type == "craftChocolate") {
      checkValue = {
        name: getItemProduct.name,
        type: getItemProduct.type,
        price: getItemProduct.price,
        description: getItemProduct.description,
        picUrl: getItemProduct.picUrl,
      };
    } else {
      checkValue = {
        type: getItemProduct.type,
        price: getItemProduct.price,
        remaining: getItemProduct.remaining,
        picUrl: getItemProduct.picUrl,
      };
    }

    Object.entries(checkValue).forEach((item) => {
      const [key, value] = item;

      if (key !== "picUrl") {
        if (value !== "") return;
        isCorrectInput.value = false;
      } else {
        if (value.length >= 4) return;
        isCorrectInput.value = false;
      }
    });

    return isCorrectInput.value;
  };

  if (!isEmptyForm()) {
    modeErr.value = `error`;
    warningMsg.value = `Please fill all fields!`;
    descriptionWarningMsg.value = `Looks like you missed something. Please fill in all fields with valid information.`;

    return;
  }

  emits("submitEmit", getItemProduct);
};

// Question Before Leave
const warningMsg = ref("");
const descriptionWarningMsg = ref("");
const modeErr = ref("");

const discardItem = () => {
  // if content not change
  // close immediately

  // if content change
  modeErr.value = `warning`;
  warningMsg.value = `Are you sure you want to leave this site?`;
  descriptionWarningMsg.value = `you have unsaved changes content, and will be lose unless you save it.`;
};

const confirmClosePopUp = () => {
  if (modeErr.value === "error") {
    warningMsg.value = ``;
    descriptionWarningMsg.value = ``;
    modeErr.value = "";

    return;
  }
  emits("closeEmit");
};
const cancelAction = () => {
  warningMsg.value = "";
};

// Add More Picture Url
const newPicture = ref("");
const addMorePic = () => {
  if (newPicture.value === "") {
    modeErr.value = `error`;
    warningMsg.value = `Please press a correct url picture.`;
    descriptionWarningMsg.value = `press at least one character.`;

    return;
  }

  // Check Correct Img Url
  const isCorrectPic = ref("");

  function testImage(url, timeoutT) {
    return new Promise(function (resolve, reject) {
      var timeout = timeoutT || 5000;
      var timer,
        img = new Image();
      img.onerror = img.onabort = function () {
        clearTimeout(timer);
        reject(false);
      };
      img.onload = function () {
        clearTimeout(timer);
        resolve(true);
      };
      timer = setTimeout(function () {
        img.src = "//!!!!/noexist.jpg";
        reject("timeout");
      }, timeout);
      img.src = url;
    });
  }

  function record(url, result) {
    isCorrectPic.value = result;

    if (!isCorrectPic.value) {
      modeErr.value = `error`;
      warningMsg.value = `Please press a correct url picture.`;
      descriptionWarningMsg.value = `your picture url is not correct, maybe try other.`;

      return;
    }

    // add new pic
    if (!getItemProduct.picUrl) {
      getItemProduct.picUrl = [];
    }

    const isDuplicatedPicUrl = getItemProduct.picUrl.find(
      (url) => url === newPicture.value
    );
    if (isDuplicatedPicUrl) {
      modeErr.value = `error`;
      warningMsg.value = `Url's picture are duplicated.`;
      descriptionWarningMsg.value = `please check url picture and use other url picture.`;

      return;
    }
    getItemProduct.picUrl.unshift(newPicture.value);
    pictureSelected.value = getItemProduct.picUrl[0];
    newPicture.value = "";
  }

  function runImage(url) {
    testImage(url).then(record.bind(null, url), record.bind(null, url));
  }

  runImage(newPicture.value);
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
