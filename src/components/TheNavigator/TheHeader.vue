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
        <router-link to="/craftChocolate"> Craft Chocolate </router-link>
        <router-link to="#"> Rating </router-link>
        <router-link to="#"> Community </router-link>
        <router-link to="#"> Your Shop </router-link>
      </li>
      <li>
        <div class="notifications">
          <button
            id="dropdownNotificationButton"
            data-dropdown-toggle="dropdownNotification"
            class="inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400 mr-4"
            type="button"
            @click="activeNotifications"
          >
            <svg
              class="w-8 h-8"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
              ></path>
            </svg>
            <div class="flex relative">
              <div
                class="inline-flex relative -top-2 right-3 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"
              ></div>
            </div>
          </button>

          <transition name="notificationPop">
            <div v-if="isNotificationActive && !isLeaveHeader">
              <notifications @disActive="activeNotifications"></notifications>
            </div>
          </transition>
        </div>
        <div class="cartIcon mx-2" @click="activeCart">
          <router-link to="#">
            <img
              src="../../assets/TheNavigation/shopping-bag 2.png"
              alt="Cart"
            />
          </router-link>
          <div class="numberItems">{{ cartAmount }}</div>

          <transition name="cartListDraw">
            <cart-list
              v-if="isCartActive && !indexStore.getLeaveHeaderStatus"
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
import { onUpdated, ref } from "vue";
import CartList from "./cartList.vue";
import Notifications from "./Notifications.vue";

export default {
  components: { CartList, Notifications },
  setup() {
    const cartList = userCartList();
    const indexStore = useIndexStore();
    const header = ref(null);

    onUpdated(() => {
      indexStore.createObserver().then((res) => {
        if (!res) return;
        res.observe(header.value);
      });
    });

    return { cartList, indexStore, header };
  },
  mounted() {
    const observer = this.getObserver;
    if (!observer) return;

    observer.observe(this.header);
  },
  methods: {
    activeCart() {
      this.indexStore.isActiveCartList = true;
    },
    closeCart() {
      this.indexStore.isActiveCartList = false;
    },
    activeNotifications() {
      this.indexStore.isActiveNotification =
        !this.indexStore.isActiveNotification;
    },
  },
  computed: {
    isCartActive() {
      return this.indexStore.isActiveCartList;
    },
    cartAmount() {
      return this.cartList.itemInCartAmount;
    },
    userCartData() {
      return this.cartList.itemInCart;
    },
    getObserver() {
      return this.indexStore.getObserver;
    },
    isNotificationActive() {
      return this.indexStore.isActiveNotification;
    },
    isLeaveHeader() {
      return this.indexStore.getLeaveHeaderStatus;
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
    transition: all 0.25s ease-in-out;

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
      width: 36px;
    }
    & > a {
      position: relative;

      margin: auto 2rem;
      text-decoration: none;
      font-size: 20px;
      font-weight: normal;
      color: rgb(101, 112, 124);

      &:hover {
        // font-weight: bold;
        color: rgb(68, 76, 84);
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

.cartListDraw-enter-active,
.notificationPop-enter-active {
  animation: expandDraw 0.25s ease-in;
}

.cartListDraw-leave-active,
.notificationPop-leave-active {
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
