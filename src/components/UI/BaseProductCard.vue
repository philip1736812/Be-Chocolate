<template>
  <div
    class="card_container max-w-5xl w-full xl:w-9/12 relative grid grid-cols-7 mx-auto my-1 py-2 px-3.5 sm:px-9 xl:mb-2 xl:py-3 hover:py-4 xl:px-12 text-slate-800"
    @mouseenter="hover"
    @mouseleave="mouseOut"
    :class="{ containerHover: isHover }"
  >
    <div
      class="content col-span-5 xl:col-span-2 md:col-span-3"
      :class="{ hover: isHover, selected: selected_prod && qty_thisItem >= 1 }"
    >
      <base-button
        link
        :to="{ name: 'StoreInformation' }"
        class="storeName text-base sm:text-xl"
      >
        <font-awesome-icon icon="fa-store" class="text-lg sm:text-xl mr-3" />{{
          product.storeName
        }}</base-button
      >
      <h2 class="text-xl md:text-2xl font-medium mb-3 mt-1">
        {{ product.price }} Bath/kg.
      </h2>
      <p class="remaining mb-4">
        Only <strong> {{ product.remaining }} kg.</strong> left in stock!
      </p>

      <base-btn-add-to-cart
        :qty_thisItem="qty_thisItem"
        :selected_prod="selected_prod"
        :isHover="isHover"
        @selectedItem="selectedItem"
        @deleteProd="deleteProd"
      ></base-btn-add-to-cart>
    </div>

    <div
      class="pictureContainer col-span-2 xl:col-span-5 md:col-span-4 relative flex items-center sm:items-center justify-end"
    >
      <img
        class="pictureItems w-20 h-20 object-cover sm:w-24 sm:h-24 mx-1 xl:mx-1.5"
        v-for="picUrl in filterPictureByWidth"
        :key="picUrl"
        :src="picUrl"
        :alt="product.type"
      />
      <p class="sold">
        <strong>{{ product.soldCount }} </strong> Sold
      </p>
    </div>

    <transition name="addedCart" mode="out-in">
      <div
        v-if="isAddedInCart"
        class="addedInCart absolute w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-500 text-sm sm:text-xl -right-2.5 -top-1.5 sm:-top-2.5"
      >
        <font-awesome-icon icon="fa-cart-arrow-down" class="base-sm sm:text-base"/>
      </div>
    </transition>
  </div>
</template>

<script>
import { userCartList } from "@/stores/Cart/Cart_items";
import BaseButton from "./BaseButton.vue";
import BaseBtnAddToCart from "./BaseBtnAddToCart.vue";
import { useIndexStore } from "../../stores/Store_index";

export default {
  components: { BaseButton, BaseBtnAddToCart },
  props: ["product"],
  setup() {
    const cartList = userCartList();
    const indexStore = useIndexStore();

    return { cartList, indexStore };
  },
  data() {
    return {
      isHover: false,
      selected_prod: false,
      windowWidth: window.innerWidth,
      propsPicture: this.product.picUrl,
    };
  },
  computed: {
    qty_thisItem() {
      return this.cartList?.cart.find((prod) => prod.id === this.product.id)
        ?.prodItem_qty;
    },
    isAddedInCart() {
      return this.cartList.cart.length <= 0
        ? false
        : this.cartList.cart.find((el) => el.id === this.product.id);
    },
    filterPictureByWidth() {
      const windowWidth = this.indexStore.windowWidth;
      let newPicArr = this.propsPicture.slice();
      this.isHover = false;

      if (windowWidth >= 1024 && newPicArr.length > 5)
        return newPicArr.splice(5);
      else if (windowWidth < 1024 && windowWidth > 768 && newPicArr.length > 4)
        return newPicArr.splice(0, 4);
      else if (windowWidth <= 768 && windowWidth > 640 && newPicArr.length > 3)
        return newPicArr.splice(0, 3);
      else if (
        windowWidth <= 640 &&
        windowWidth > 540 &&
        newPicArr.length > 2
      ) {
        return newPicArr.splice(0, 2);
      } else if (windowWidth <= 540 && newPicArr.length > 1) {
        this.isHover = true;
        return newPicArr.splice(0, 1);
      } else return newPicArr;
    },
    isAuthentication() {
      return this.indexStore.isAuthentication;
    },
  },
  methods: {
    hover() {
      this.isHover = true;
    },
    mouseOut() {
      this.isHover = false;
    },
    selectedItem() {
      if (!this.isAuthentication) {
        this.$router.replace({ name: "signIn" });
        return;
      }

      this.isHover = true;
      this.selected_prod = true;

      this.$emit("selectedProductToCart", {
        id: this.product.id,
        type: this.product.type,
        price: this.product.price,
        storeName: this.product.storeName,
        picUrl:
          this.product.picUrl[
            Math.floor(Math.random() * this.product.picUrl.length)
          ],
      });
    },

    deleteProd() {
      this.$emit("deletedProduct", this.product.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.card_container {
  border: 1px solid #efefef;
  border-radius: 10px;
  background: #fff;

  transition: all 0.25s ease-in-out;

  &.containerHover {
    box-shadow: 1px 1px 10px 1px rgba(50, 50, 50, 0.25);
    background: #fff;
  }

  .content {
    transform: translateY(30px);
    transition: all 0.25s ease-in-out;
    max-width: 290.77px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    padding-right: 1rem;
    & > * {
      color: #444444;
    }

    &.hover {
      transform: translateY(0px);
    }

    &.selected {
      transform: translateY(0px);
    }
  }
  .pictureContainer {
    padding-left: 1rem;

    img.pictureItems {
      cursor: pointer;
      border-radius: 5px;
      max-width: 120px;
      transition: all 0.25s ease-in-out;

      &:hover {
        box-shadow: 1px 1px 10px 1px rgba(50, 50, 50, 0.6);
        transform: scale(1.05);
      }
    }

    p.sold {
      position: absolute;
      bottom: 0;
      right: 0;

      font-size: 17px;
    }
  }

  .addedInCart {
    color: #fafafa;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.addedCart-enter-active {
  animation: scale 0.25s ease-in;
}

.addedCart-leave-active {
  animation: scale 0.25s ease-out reverse;
}

@keyframes scale {
  0% {
    transform: scale(0);
  }

  85% {
    transform: scale(1.06);
  }

  100% {
    transform: scale(1);
  }
}
</style>
