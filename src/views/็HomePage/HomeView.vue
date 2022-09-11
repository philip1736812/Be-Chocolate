<template>
  <header>
    <h2>Find Your Ingredient.</h2>
    <form action="">
      <input type="text" placeholder="Craft Chocolate..." />
      <button>
        <font-awesome-icon class="searchIcon" icon="fa-magnifying-glass" />
      </button>
      <p><strong>Ex.</strong> Chocolate bar, Coco nib</p>
    </form>
  </header>
  <main>
    <div class="itemNav_container">
      <base-card-nav
        v-for="prod in productsNav"
        :key="prod.name"
        :navName="prod.name"
        :urlNav="prod.pictureUrl"
      ></base-card-nav>
    </div>

    <section class="showHotItem">
      <base-product-card
        v-for="item in cacaoPodsItems"
        :key="item"
        :product="item"
        @selectedProductToCart="addToCart"
        @deletedProduct="deleteSelectedProd"
      ></base-product-card>

      <router-link to="/"> See All </router-link>
    </section>
  </main>
</template>

<script>
import { mapState, mapActions } from "pinia";
import BaseCardNav from "@/components/UI/BaseCardNav.vue";
import BaseProductCard from "@/components/UI/BaseProductCard.vue";
import { useProductStore } from "@/stores/Store_index";
import { userCartList } from "@/stores/Cart/Cart_items";

export default {
  components: { BaseCardNav, BaseProductCard },
  setup() {
    const cartList = userCartList();

    return { cartList };
  },
  data() {
    return {
      productsNav: [
        {
          name: "Cacao Pods",
          pictureUrl:
            "https://drive.google.com/uc?id=1wX3sQsWiGy6966WUOLkU_Fj7zGcnHxe8",
        },
        {
          name: "Chocolate Plate",
          pictureUrl:
            "https://drive.google.com/uc?id=1PR2EOctLjV6YA4evyLqe7VzniwfEGkdg",
        },
        {
          name: "Cacao Bean",
          pictureUrl:
            "https://drive.google.com/uc?id=1DPWC6zn3LLHkdJb23AEjsyEpfXzjkbZp",
        },
        {
          name: "Cocoa Powders",
          pictureUrl:
            "https://drive.google.com/uc?id=1qrDs-i_qwQfWC84YPE1rPyioF-ANbrQR",
        },
        {
          name: "Cocoa Butter",
          pictureUrl:
            "https://drive.google.com/uc?id=1sr2_giCe1nFLoCydU94tDRwmTydPEoz8",
        },
        {
          name: "Chocolate",
          pictureUrl:
            "https://drive.google.com/uc?id=1aUF-tJ77XS2lUUWiKMoCjMG3djfW10q0",
        },
        {
          name: "Chocolate Bar",
          pictureUrl:
            "https://drive.google.com/uc?id=1y1wzm59mJdg6jFDL4zAAYRwVHxqV7-jZ",
        },
      ],

      productCardActive: false,
      hoverKey: null,
    };
  },
  computed: {
    ...mapState(useProductStore, ["cacaoPodsItems"]),

    itemInCart() {
      return this.cartList.itemInCart;
    },
  },
  methods: {
    addToCart(prod) {
      const hasItemProd = this.itemInCart.find(
        (product) => product.id === prod.id
      );
      const item_qty = hasItemProd ? (hasItemProd.prodItem_qty += 1) : 1;

      const remainCart = this.itemInCart.slice();
      // add to cart
      if (!hasItemProd) {
        const dataToCart = {
          ...prod,
          prodItem_qty: item_qty,
        };

        remainCart.unshift(dataToCart);
        this.cartList.addToTheCart(remainCart);
        return;
      }

      // update qty
      const updateCart = {
        ...hasItemProd,
        prodItem_qty: item_qty,
      };
      const newCart = remainCart.filter((product) => product.id !== prod.id);

      newCart.unshift(updateCart);
      this.cartList.addToTheCart(newCart);
    },

    deleteSelectedProd(prodId) {
      const inCart = this.cartList.cart.find(
        (item) => item.id === prodId
      );

      // delete Items
      // console.log(inCart.prodItem_qty--);
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  height: 376px;
  background-image: url("@/assets/Home/front-view-sweet-chocolate-assortment-dark-board.png");
  background-repeat: no-repeat, repeat;
  background-color: #cccccc;
  background-size: cover;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  color: #f0f0f0;

  h2 {
    font-size: 25px;
    margin: 0 0 34px 0;
  }

  form {
    position: relative;
    width: 65%;

    button {
      cursor: pointer;
      position: absolute;
      top: 10px;
      right: 13px;
      background: none;
      border: none;
    }

    .searchIcon {
      font-size: 30px;
      color: #646464;
      transition: all 0.25s ease-in;

      &:hover {
        color: #444444;
        transform: scale(1.1);
      }
    }

    input {
      width: 100%;
      height: 49px;
      border-radius: 10px;
      outline: none;
      padding: 0 1.3rem;
      margin: 0 0 0.6rem 0;
      font-size: 19px;
      border: 1px solid #c4c4c4;
      transition: all 0.25s ease-in;

      &::placeholder {
        font-size: 16px;
      }

      &:focus {
        border: 1px solid #858585;
      }
    }

    p {
      font-size: 18px;
    }
  }
}

main {
  .itemNav_container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto auto;
    padding: 65px 0;

    &::before {
      position: absolute;
      width: 70%;
      content: "";
      border-bottom: 1px solid #e8e8e8;
      padding: 0 0 40px 0;

      bottom: 28px;
    }
  }

  section.showHotItem {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin: 6px auto 6rem auto;

    &::before {
      position: absolute;
      width: 70%;
      content: "";
      border-bottom: 1px solid #e8e8e8;
      padding: 0 0 40px 0;

      bottom: 28px;
    }

    a {
      font-size: 20px;
      color: #0042a6;
      text-decoration: underline;
    }
  }
}
</style>
