<template>
  <header ref="header">
    <ul>
      <li>
        <router-link to="/">
          <img
            src="../../assets/TheNavigation/ChocolateBar_logo.png"
            alt="BeChocolate"
          />
        </router-link>
      </li>
      <li>
        <router-link to="/"> Home </router-link>
        <router-link to="#"> Craft Chocolate </router-link>
        <router-link to="#"> Rating </router-link>
        <router-link to="#"> Community </router-link>
        <router-link to="#"> Your Shop </router-link>
      </li>
      <li>
        <div class="cartIcon" @click="activeCart">
          <router-link to="#">
            <img
              src="../../assets/TheNavigation/shopping-bag 2.png"
              alt="Cart"
            />
          </router-link>
          <div class="numberItems">{{ cartAmount }}</div>

          <transition name="cartListDraw">
            <cart-list
              v-if="cartIsHover"
              @closeOverlayCart="closeCart"
              :userCart="userCartData"
              :cartAmount="cartAmount"
            ></cart-list>
          </transition>
        </div>
        <router-link to="#">
          <font-awesome-icon icon="fa-solid fa-user" size="lg" />
          Profile
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
import { userCartList } from "@/stores/Cart/Cart_items";
import { useIndexStore } from "@/stores/Store_index";
import CartList from "./cartList.vue";

export default {
  components: { CartList },
  setup() {
    const cartList = userCartList();
    const indexStore = useIndexStore();

    return { cartList, indexStore };
  },
  mounted() {
    const observer = this.getObserver;
    observer.observe(this.$refs.header);
  },
  data() {
    return {
      cartIsHover: false,
    };
  },
  methods: {
    activeCart() {
      this.cartIsHover = true;
    },
    closeCart() {
      this.cartIsHover = false;
    },
  },
  computed: {
    cartAmount() {
      return this.cartList.itemInCartAmount;
    },
    userCartData() {
      return this.cartList.itemInCart;
    },
    getObserver() {
      return this.indexStore.getObserver;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #f5f5f5;
  height: 140px;
}

ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 116px;
  list-style: none;

  li {
    display: flex;
    margin: auto 0;

    .cartIcon {
      position: relative;

      .numberItems {
        position: absolute;
        top: 0;
        right: -10px;
        width: 25px;
        height: 25px;
        background: red;
        border-radius: 50%;
        color: #f5f5f5;
        text-align: center;
      }
    }

    img {
      display: inline;
      width: 40px;
    }
    & > a {
      position: relative;

      margin: auto 2rem;
      text-decoration: none;
      font-size: 20px;
      font-weight: normal;
      color: #44342b;

      &:hover {
        font-weight: bold;
      }

      &.router-link-active {
        font-weight: bold;
      }

      // &::before {
      //   position: absolute;
      //   content: "💢";

      //   bottom: -20px;
      //   right: 0;
      //   transform: translate(-50%, 50%);
      // }
    }
  }
}

.cartListDraw-enter-active {
  animation: expandDraw 0.25s ease-in;
}

.cartListDraw-leave-active {
  animation: expandDraw 0.25s ease-out reverse;
}

@keyframes expandDraw {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
