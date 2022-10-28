<template>
  <div>
    <header
      class="h-60 lg:h-96 w-full px-3 xl:p-20 sm:p-8 flex flex-col items-center justify-center text-slate-200"
    >
      <h2 class="text-lg sm:text-2xl font-medium mb-8">
        Find Your Ingredient.
      </h2>
      <base-search-bar
        action="submit"
        @submitSearchEmit="submitSearch"
      ></base-search-bar>
      <p
        class="w-full text-base sm:text-lg font-normal text-slate-200 text-start"
      >
        <strong>Ex.</strong> Chocolate bar, Coco nib
      </p>
    </header>
    <main>
      <teleport to="body">
        <cart-balloon></cart-balloon>
      </teleport>

      <teleport to="body">
        <transition name="popUp" mode="out-in">
          <div
            v-if="
              activeWelcomePopUp && isAuth && isGuestId && !isActiveWelcomePopUp
            "
          >
            <who-are-guest-pop-up
              @closeNameWelcome="closeNameWelcome"
              @submitNameForm="submitName"
            ></who-are-guest-pop-up>
            <div
              @click="closeNameWelcome"
              class="z-40 w-full h-full overlay bg-black fixed right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 opacity-20"
            ></div>
          </div>
        </transition>
      </teleport>

      <div
        class="itemNav_container relative grid grid-cols-3 sm:grid-cols-4 md:flex md:items-center md:justify-center mx-auto py-14 before:right-1/2 before:translate-x-1/2"
      >
        <base-card-nav
          v-for="prod in productsNav"
          :key="prod.name"
          :navName="prod.name"
          :urlNav="prod.picUrl"
          :activeProduct="selectedNavName"
          @productSelected="selectedNav"
          @clickThisNav="selectedNav"
        ></base-card-nav>
      </div>

      <div class="mt-3 mb-20">
        <div
          class="hotItemsTopic mx-auto flex items-end max-w-5xl w-full xl:w-9/12 mb-4 px-3 xl:px-0"
        >
          <div class="flex flex-1">
            <font-awesome-icon
              icon="fa-fire-flame-curved"
              class="hotIcon text-sm"
            />
            <h2 class="text-lg md:text-xl text-slate-700">Hot Items</h2>
          </div>
          <div class="flex justify-center items-center text-slate-700">
            <font-awesome-icon
              icon="fa-angle-left"
              class="text-right cursor-pointer"
              @click="prevHotItems"
            />
            <transition name="hotItems" mode="out-in">
              <p
                class="w-28 md:w-36 xl:w-44 overflow-hidden text-base md:text-lg font-light text-center mx-3 text-slate-500"
              >
                {{ hotItem }}
              </p>
            </transition>
            <font-awesome-icon
              icon="fa-angle-right"
              class="text-left cursor-pointer"
              @click="nextHotItems"
            />
          </div>
        </div>
        <transition name="hotItems" mode="out-in">
          <section
            class="relative showHotItem px-4 lg:px-0"
            v-if="getProducts && getProducts.length !== 0"
          >
            <base-product-card
              v-for="item in getProducts"
              :key="item"
              :product="item"
              @selectedProductToCart="addToCart"
              @deletedProduct="deleteSelectedProd"
            ></base-product-card>

            <div class="text-center mt-8">
              <base-button
                class="mt-6"
                link
                :to="{
                  name: 'productType',
                  params: {
                    productTypeName: `${selectedNavName || 'cacaoPods'}`,
                  },
                }"
              >
                See All
              </base-button>
            </div>
          </section>
          <div class="haveNoItem" v-else>
            <p>Have No Products</p>
          </div>
        </transition>
      </div>

      <section class="craftChocolate mb-8 px-2 sm:p-0">
        <craft-chocolate-section></craft-chocolate-section>
      </section>
    </main>
  </div>
</template>

<script>
import { useProductStore } from "@/stores/ProductItems/Store_product";
import { userCartList } from "@/stores/Cart/Cart_items";
import { useIndexStore } from "../../stores/Store_index";

import BaseCardNav from "@/components/UI/BaseCardNav.vue";
import BaseProductCard from "@/components/UI/BaseProductCard.vue";
import CraftChocolateSection from "@/components/HomeView/CraftChocolateSection.vue";
import CartBalloon from "@/components/TheNavigator/CartBalloon.vue";
import BaseSearchBar from "@/components/UI/BaseSearchBar.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
import WhoAreGuestPopUp from "./WhoAreGuestPopUp.vue";

export default {
  components: {
    BaseCardNav,
    BaseProductCard,
    CraftChocolateSection,
    CartBalloon,
    BaseSearchBar,
    BaseButton,
    WhoAreGuestPopUp,
  },
  setup() {
    const cartList = userCartList();
    const productItems = useProductStore();
    const indexStore = useIndexStore();

    return { cartList, productItems, indexStore };
  },
  data() {
    return {
      productsNav: [
        {
          name: "Cacao Pods",
          picUrl:
            "https://drive.google.com/uc?id=1wX3sQsWiGy6966WUOLkU_Fj7zGcnHxe8",
        },
        {
          name: "Chocolate Plate",
          picUrl:
            "https://drive.google.com/uc?id=1PR2EOctLjV6YA4evyLqe7VzniwfEGkdg",
        },
        {
          name: "Cacao Bean",
          picUrl:
            "https://drive.google.com/uc?id=1DPWC6zn3LLHkdJb23AEjsyEpfXzjkbZp",
        },
        {
          name: "Cocoa Powders",
          picUrl:
            "https://drive.google.com/uc?id=1qrDs-i_qwQfWC84YPE1rPyioF-ANbrQR",
        },
        {
          name: "Cocoa Butter",
          picUrl:
            "https://drive.google.com/uc?id=1sr2_giCe1nFLoCydU94tDRwmTydPEoz8",
        },
        {
          name: "Chocolate",
          picUrl:
            "https://drive.google.com/uc?id=1aUF-tJ77XS2lUUWiKMoCjMG3djfW10q0",
        },
        {
          name: "Craft Chocolate",
          picUrl:
            "https://drive.google.com/uc?id=1y1wzm59mJdg6jFDL4zAAYRwVHxqV7-jZ",
        },
      ],

      productCardActive: false,
      hoverKey: null,
      activeWelcomePopUp: false,
    };
  },
  mounted() {
    setTimeout(() => {
      if (this.indexStore.AlreadyActiveGuestPopUp) return;
      this.activeWelcomePopUp = true;
    }, 500);
  },
  computed: {
    getProducts() {
      return this.productItems.getAllProductType?.slice(0, 4);
    },

    itemInCart() {
      return this.cartList.itemInCart;
    },
    selectedNavName() {
      return this.productItems.activeProductFromNav.replace("Items", "");
    },
    hotItem() {
      return this.selectedNavName.replace(/([A-Z])/g, " $1").trim();
    },
    isAuth() {
      return this.indexStore.isAuthentication;
    },
    isGuestId() {
      return this.indexStore.isGuestId;
    },
    isActiveWelcomePopUp() {
      return this.indexStore.AlreadyActiveGuestPopUp;
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
      this.productItems.activeProduct(name);
    },
    submitSearch() {
      this.$router.push({ name: "searchResult" });
    },
    nextHotItems() {
      this.productItems.next_prev_hotProduct("next");
    },
    prevHotItems() {
      this.productItems.next_prev_hotProduct("prev");
    },
    closeNameWelcome() {
      this.indexStore.AlreadyActiveGuestPopUp = true;
      this.activeWelcomePopUp = false;
    },
    submitName(str) {
      this.indexStore.AlreadyActiveGuestPopUp = true;
      this.indexStore.sentStrName_welcomeForm(str);
      this.closeNameWelcome();
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-image: url("@/assets/Home/front-view-sweet-chocolate-assortment-dark-board.png");
  background-repeat: no-repeat, repeat;
  background-color: #cccccc;
  background-size: cover;

  p {
    max-width: 1200px;
  }
}

main {
  .itemNav_container {
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
    font-size: 1.2rem;
  }
  .hotItemsTopic {
    .hotIcon {
      font-size: 2rem;
      margin-right: 1.5rem;
      color: rgb(208, 56, 1, 1);
    }

    section.showHotItem {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      margin: 6px auto 6rem auto;
    }

    &::before {
      position: absolute;
      width: 70%;
      content: "";
      border-bottom: 1px solid #e8e8e8;
      padding: 0 0 40px 0;

      bottom: -60%;
    }

    a {
      font-size: 15px;
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

  .popUp-enter-active {
    animation: popUpTransition 0.25s ease-in;
  }

  .popUp-leave-active {
    animation: popUpTransition 0.25s ease-in reverse;
  }

  @keyframes popUpTransition {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    85% {
      transform: scale(1.3);
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
