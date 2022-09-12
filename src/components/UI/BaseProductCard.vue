<template>
  <div
    class="card_container"
    @mouseenter="hover"
    @mouseleave="mouseOut"
    :class="{ containerHover: isHover }"
  >
    <div
      class="content"
      :class="{ hover: isHover, selected: selected_prod && qty_thisItem >= 1 }"
    >
      <base-button link to="/" class="storeName">
        <font-awesome-icon icon="fa-store" />{{
          product.storeName
        }}</base-button
      >
      <h2>{{ product.price }} Bath/kg.</h2>
      <p class="remaining">
        Remaining: <strong> {{ product.remaining }} kg.</strong>
      </p>

      <div
        class="addToCart"
        :class="{
          buttonShow: isHover,
          btnSelected: selected_prod && qty_thisItem >= 1,
          selectedItem: selected_prod,
        }"
      >
        <transition name="minusBtn" mode="out-in">
          <button v-if="selected_prod && qty_thisItem >= 1" @click="deleteProd">
            <font-awesome-icon icon="fa-minus" />
          </button>
        </transition>

        <transition name="qty" mode="out-in">
          <p v-if="selected_prod && qty_thisItem >= 1" class="qtyProduct">
            {{ qty_thisItem }} kg
          </p>
        </transition>

        <transition name="addCart" mode="out-in">
          <button
            @click="selectedItem"
            v-if="
              !selected_prod || qty_thisItem === 0 || qty_thisItem === undefined
            "
          >
            <font-awesome-icon icon="fa-cart-arrow-down" />
          </button>

          <button v-else @click="selectedItem">
            <font-awesome-icon icon="fa-plus" />
          </button>
        </transition>
      </div>
    </div>
    <div class="picture">
      <p>IMG</p>
      <p>IMG</p>
      <p>IMG</p>
      <p>IMG</p>
      <p>IMG</p>
      <p class="sold"><strong>Sold:</strong> {{ product.soldCount }} time</p>
    </div>

    <transition name="addedCart" mode="out-in">
      <div v-if="isAddedInCart" class="addedInCart">
        <font-awesome-icon icon="fa-cart-arrow-down" />
      </div>
    </transition>
  </div>
</template>

<script>
import { userCartList } from "@/stores/Cart/Cart_items";
import BaseButton from "./BaseButton.vue";

export default {
  components: { BaseButton },
  props: ["product"],
  setup() {
    const cartList = userCartList();

    return { cartList };
  },
  data() {
    return {
      isHover: false,
      selected_prod: false,
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
  },
  methods: {
    hover() {
      this.isHover = true;
    },
    mouseOut() {
      this.isHover = false;
    },
    selectedItem() {
      this.isHover = true;
      this.selected_prod = true;

      this.$emit("selectedProductToCart", {
        id: this.product.id,
        type: this.product.type,
        price: this.product.price,
        storeName: this.product.storeName,
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
  position: relative;
  display: grid;
  grid-template-columns: 0.5fr 1fr;

  max-width: 963px;
  width: 75%;

  border: 1px solid #efefef;
  border-radius: 10px;
  margin: 15px auto;
  padding: 17px 44px;
  background: #fff;

  transition: all 0.25s ease-in-out;

  &.containerHover {
    box-shadow: 1px 1px 10px 1px rgba(50, 50, 50, 0.25);
    background: #fff;
  }

  .content {
    transform: translateY(30px);
    transition: all 0.25s ease-in-out;

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

    a.storeName {
      font-size: 23px;
      margin: 0 0 7px 0;

      & > svg {
        margin-right: 1rem;
      }
    }

    h2 {
      font-size: 34px;
      font-weight: 700px;
      margin-bottom: 5px;
    }

    p.remaining {
      font-size: 18px;
      font-weight: 400;
      margin-bottom: 26px;
    }

    .addToCart {
      display: flex;
      align-items: center;

      transition: all 0.25s ease-in-out;
      opacity: 0;

      &.buttonShow {
        opacity: 1;
      }

      &.btnSelected {
        opacity: 1;

        button {
          width: 45px;

          background: #d8612f;
          color: #fff;
          border: none;
        }
      }

      .qtyProduct {
        font-size: 26px;
        font-weight: bold;
        margin: 0 2.6rem;
      }

      button {
        width: 100%;
        height: 45px;
        border-radius: 10px;
        font-size: 25px;
        background: #fafafa;
        border: 1px solid #444444;
        cursor: pointer;
        transition: all 0.25s ease-in-out;

        &:hover {
          background: #d8612f;
          border: none;
          color: #fff;
        }
      }
      p.cart {
        font-size: 25px;
        margin: 0 0 0 1rem;
      }
    }
  }

  .picture {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-left: 1rem;

    p.sold {
      position: absolute;
      bottom: 0;
      right: 0;

      font-size: 17px;
    }
  }

  .addedInCart {
    position: absolute;
    top: -14px;
    right: -14px;
    width: 40px;
    height: 40px;

    border-radius: 50%;
    background: red;
    color: #fafafa;
    font-size: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.minusBtn-enter-active,
.qty-enter-active,
.addCart-enter-active,
.addedCart-enter-active {
  animation: scale 0.25s ease-in;
}

.minusBtn-leave-active,
.qty-leave-active,
.addCart-leave-active,
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
