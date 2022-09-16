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
        <div class="mt-12 mb-8">
          <h1>Filter</h1>
        </div>

        <div>
          <base-product-card
            v-for="prod in getProductName"
            :key="prod"
            :product="prod"
            @selectedProductToCart="addToCart"
            @deleteProd="deleteSelectedProd"
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

export default {
  props: ["productTypeName"],
  components: { CartBalloon, BaseProductCard },
  setup() {
    const productItems = useProductStore();
    const cartList = userCartList();

    return { productItems, cartList };
  },
  computed: {
    getProductName() {
      // for get data from store
      return this.productItems.getProduct;
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
  },
};
</script>
