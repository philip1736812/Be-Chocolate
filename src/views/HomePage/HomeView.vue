<template>
  <div>
    <header>
      <h2>Find Your Ingredient.</h2>
      <base-search-bar></base-search-bar>
      <p><strong>Ex.</strong> Chocolate bar, Coco nib</p>
    </header>
    <main>
      <teleport to="body">
        <cart-balloon></cart-balloon>
      </teleport>

      <div class="itemNav_container">
        <base-card-nav
          v-for="prod in productsNav"
          :key="prod.name"
          :navName="prod.name"
          :urlNav="prod.pictureUrl"
          @productSelected="selectedNav"
        ></base-card-nav>
      </div>

      <transition name="hotItems" mode="out-in">
        <section class="showHotItem" v-if="getProducts">
          <div class="hotItemsTopic">
            <font-awesome-icon icon="fa-fire-flame-curved" />
            <h2>Hot Items</h2>
            <p>{{ hotItem }}</p>
          </div>
          <base-product-card
            v-for="item in getProducts"
            :key="item"
            :product="item"
            @selectedProductToCart="addToCart"
            @deletedProduct="deleteSelectedProd"
          ></base-product-card>

          <base-button
            link
            :to="{
              name: 'productType',
              params: { productTypeName: `${selectedNavName || 'cacaoPods'}` },
            }"
          >
            See All
          </base-button>
        </section>
        <div class="haveNoItem" v-else>
          <p>Have No Products</p>
        </div>
      </transition>

      <section class="craftChocolate">
        <craft-chocolate-section></craft-chocolate-section>
      </section>
    </main>
  </div>
</template>

<script>
import { useProductStore } from "@/stores/ProductItems/Store_product";
import { userCartList } from "@/stores/Cart/Cart_items";

import BaseCardNav from "@/components/UI/BaseCardNav.vue";
import BaseProductCard from "@/components/UI/BaseProductCard.vue";
import CraftChocolateSection from "@/components/HomeView/CraftChocolateSection.vue";
import CartBalloon from "@/components/TheNavigator/CartBalloon.vue";
import BaseSearchBar from "@/components/UI/BaseSearchBar.vue";
import BaseButton from "@/components/UI/BaseButton.vue";

export default {
  components: {
    BaseCardNav,
    BaseProductCard,
    CraftChocolateSection,
    CartBalloon,
    BaseSearchBar,
    BaseButton,
  },
  setup() {
    const cartList = userCartList();
    const productItems = useProductStore();

    return { cartList, productItems };
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
      selectedNavName: "",
    };
  },
  computed: {
    getProducts() {
      return this.productItems.getProduct;
    },

    itemInCart() {
      return this.cartList.itemInCart;
    },

    hotItem() {
      return (
        this.selectedNavName.replace(/([A-Z])/g, " $1").trim() || "cacao Pods"
      );
    },
  },
  methods: {
    addToCart(prod) {
      this.cartList.addToTheCart(prod);
    },

    deleteSelectedProd(prodId) {
      this.cartList.deleteFromCart(prodId);
    },

    selectedNav(name) {
      this.selectedNavName = name;
      this.productItems.filterProduct(name);
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

  p {
    max-width: 1200px;
    width: 100%;
    text-align: start;
    font-size: 18px;
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

  .haveNoItem {
    text-align: center;
    margin: 0 auto;
    padding: 8rem 0;
    font-size: 2rem;
  }

  section.showHotItem {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin: 6px auto 6rem auto;

    .hotItemsTopic {
      max-width: 963px;
      width: 75%;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      svg {
        font-size: 2rem;
        margin-right: 1.5rem;
        color: rgb(208, 56, 1, 1);
      }

      h2 {
        font-size: 1.875rem;
      }

      p {
        margin: 0 1rem 0 1rem;
        font-size: 1.5rem;
        color: rgb(100, 116, 139, 1);
      }
    }

    &::before {
      position: absolute;
      width: 70%;
      content: "";
      border-bottom: 1px solid #e8e8e8;
      padding: 0 0 40px 0;

      bottom: -47%;
    }

    a {
      font-size: 20px;
      color: #0042a6;
      text-decoration: underline;
    }
  }

  .hotItems-enter-active {
    animation: fadeTransition 0.25s ease-in;
  }

  .hotItems-leave-active {
    animation: fadeTransition 0.25s ease-in reverse;
  }

  @keyframes fadeTransition {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
