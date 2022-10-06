<template>
  <section class="text-slate-800">
    <div class="bg-white mt-3 px-8 py-4 rounded-lg flex text-sm">
      <h2 class="mr-6 font-medium">
        <span
          ><font-awesome-icon icon="fa-store" class="mr-1 md:mr-2 text-sm"
        /></span>
        {{ itemInCart.storeName }}
      </h2>
      <p class="text-sm font-light"><span>-</span> {{ itemInCart.type }}</p>
    </div>
    <div class="px-3 md:px-8 py-4 grid grid-cols-11 my-4">
      <div class="col-span-3 grid lg:grid-cols-5">
        <div class="flex col-span-3 items-center">
          <input
            type="checkbox"
            name="product"
            :value="itemInCart.id"
            v-model="isSelectedItem"
            @change="clickSelectedEmit"
            id="product"
            class="rounded-full mr-1.5 md:mr-4"
          />
          <div class="text-sm flex flex-col md:flex-row items-center">
            <img
              :src="itemInCart.picUrl"
              :alt="itemInCart.storeName"
              class="w-12 h-12 object-cover m-0 md:mr-4 rounded-md"
            />
            <p class="mt-2 md:m-0">{{ itemInCart.name || itemInCart.type }}</p>
          </div>
        </div>
      </div>
      <div
        class="col-span-2 flex items-center justify-end md:justify-center text-sm"
      >
        <p>{{ getPrice }}</p>
      </div>
      <div
        class="col-span-3 md:col-span-3 flex items-center justify-end md:justify-center text-sm"
      >
        <base-button class="w-8 h-8 rounded-lg bg-white" @click="decreaseItem"
          ><font-awesome-icon icon="fa-minus" class="text-sm"
        /></base-button>
        <div class="mx-2 md:mx-4">
          {{ itemInCart.prodItem_qty }}
        </div>
        <base-button class="w-8 h-8 rounded-lg bg-white" @click="increaseItem"
          ><font-awesome-icon icon="fa-plus" class="text-sm"
        /></base-button>
      </div>
      <div
        class="col-span-2 flex items-center justify-end md:justify-center text-sm"
      >
        {{ getTotalPrice }}
      </div>
      <div
        class="col-span-1 flex items-center justify-end md:justify-center text-sm text-slate-800"
        @click="allDelete"
      >
        <font-awesome-icon icon="fa-trash" />
      </div>
    </div>
  </section>
</template>

<script>
import { userCartList } from "../../stores/Cart/Cart_items";
import BaseButton from "../UI/BaseButton.vue";
import { numberFormat } from "../hooks/UseNumberFormat";

export default {
  components: { BaseButton },
  props: {
    itemInCart: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const cartList = userCartList();
    return { cartList };
  },

  data() {
    return {
      isSelectedItem: true,
    };
  },
  computed: {
    getPrice() {
      return numberFormat(this.itemInCart.price);
    },
    getTotalPrice() {
      return numberFormat(this.itemInCart.price * this.itemInCart.prodItem_qty);
    },
    isSelected() {
      return this.isSelectedItem;
    },
  },

  methods: {
    decreaseItem() {
      this.cartList.deleteFromCart(this.itemInCart.id);
    },

    increaseItem() {
      this.cartList.addToTheCart(this.itemInCart);
    },
    allDelete() {
      this.cartList.deleteFromCart(this.itemInCart.id, true);
    },
    clickSelectedEmit() {
      this.$emit("clickSelected", this.isSelected, this.itemInCart.id);
    },
  },
};
</script>
