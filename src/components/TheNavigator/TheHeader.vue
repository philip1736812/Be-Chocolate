<template>
  <header ref="header">
    <div
      class="header relative h-auto lg:h-24 py-4 px-4 md:py-8 sm:px-6 md:px-32 text-slate-800"
    >
      <ul>
        <li class="hidden xl:flex">
          <router-link :to="{ name: 'home' }" style="border: none">
            <img
              src="../../assets/TheNavigation/ChocolateBar_logo.png"
              alt="BeChocolate"
            />
          </router-link>
        </li>
        <li class="hidden xl:flex">
          <span>
            <router-link :to="{ name: 'home' }"> Home </router-link>
            <div class="relative w-full h-2.5">
              <transition name="routeCircle" mode="out-in">
                <div
                  v-if="routeUrl === 'home'"
                  class="absolute right-2/4 translate-x-2/4 w-2.5 h-2.5 mt-2 bg-slate-700 rounded-full"
                ></div>
              </transition>
            </div>
          </span>
          <span>
            <router-link :to="{ name: 'craftChocolate' }">
              Craft Chocolate
            </router-link>
            <div class="relative w-full h-2.5">
              <transition name="routeCircle" mode="out-in">
                <div
                  v-if="routeUrl === 'craftChocolate'"
                  class="absolute right-2/4 translate-x-2/4 w-2.5 h-2.5 mt-2 bg-slate-700 rounded-full"
                ></div>
              </transition>
            </div>
          </span>
          <span>
            <router-link :to="{ name: 'rating' }"> Rating </router-link>
            <div class="relative w-full h-2.5">
              <transition name="routeCircle" mode="out-in">
                <div
                  v-if="routeUrl === 'rating'"
                  class="absolute right-2/4 translate-x-2/4 w-2.5 h-2.5 mt-2 mx-auto bg-slate-700 rounded-full"
                ></div>
              </transition>
            </div>
          </span>
          <span>
            <router-link :to="{ name: 'communityMall' }">
              Community
            </router-link>
            <div class="relative w-full h-2.5">
              <transition name="routeCircle" mode="out-in">
                <div
                  v-if="routeUrl === 'communityMall'"
                  class="absolute right-2/4 translate-x-2/4 w-2.5 h-2.5 mt-2 mx-auto bg-slate-700 rounded-full"
                ></div>
              </transition>
            </div>
          </span>
          <span v-if="isAuthentication">
            <router-link :to="{ name: 'myStore' }"> My Store </router-link>
            <div class="relative w-full h-2.5">
              <transition name="routeCircle" mode="out-in">
                <div
                  v-if="routeUrl === 'myStore'"
                  class="absolute right-2/4 translate-x-2/4 w-2.5 h-2.5 mt-2 mx-auto bg-slate-700 rounded-full"
                ></div>
              </transition>
            </div>
          </span>
        </li>
        <div class="sliceBarNavigation block xl:hidden">
          <multi-level-dropdown-nav></multi-level-dropdown-nav>
        </div>
        <li class="flex items-center">
          <div class="notifications">
            <button
              id="dropdownNotificationButton"
              data-dropdown-toggle="dropdownNotification"
              class="inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400 mr-1 sm:mr-4"
              type="button"
              @click="activeNotifications"
            >
              <svg
                class="w-6 h-6 sm:w-8 sm:h-8"
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
              <div v-if="isNotificationActive && !isLeaveHeader" class="w-full">
                <notifications @disActive="activeNotifications"></notifications>
              </div>
            </transition>
          </div>

          <div class="mx-2" @click="activeCart">
            <div class="relative">
              <router-link to="#">
                <img
                  class="inline w-7 sm:w-9"
                  src="../../assets/TheNavigation/shopping-bag-2.png"
                  alt="Cart"
                />
              </router-link>
              <div
                class="numberItems absolute rounded-full bg-red-500 top-0 -right-2.5 text-center w-5 h-5 text-white sm:w-6 sm:h-6"
              >
                <p class="text-sm sm:text-base">
                  {{ cartAmount }}
                </p>
              </div>
            </div>

            <transition name="cartListDraw">
              <div
                v-if="!indexStore.getLeaveHeaderStatus"
                class="absolute right-1/2 translate-x-1/2 z-50 sm:right-24 sm:translate-x-0 lg:-translate-x-1/2 top-16 sm:top-20"
              >
                <cart-list
                  @closeOverlayCart="closeCart"
                  :userCart="userCartData"
                  :cartAmount="cartAmount"
                  :isActiveCartList="isCartActive"
                ></cart-list>
              </div>
            </transition>
          </div>

          <div class="relative h-full ml-8" v-if="!isAuthentication">
            <div class="inline-flex">
              <base-button link :to="{ name: 'signIn' }">
                <span
                  class="text-md md:text-lg font-medium transition-all hover:text-indigo-700"
                >
                  Sign In
                </span>
              </base-button>
              <p class="mx-3 text-xl font-bold">/</p>
              <base-button link :to="{ name: 'signUp' }">
                <span
                  class="text-md md:text-lg font-medium transition-all hover:text-indigo-700"
                >
                  Sign Up
                </span>
              </base-button>
            </div>
          </div>
          <div class="relative ml-8" v-else>
            <button
              id="dropdownAvatarNameButton"
              data-dropdown-toggle="dropdownAvatarName"
              class="static flex items-center text-lg font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
              type="button"
            >
              <span class="sr-only">Open user menu</span>
              <img
                class="mr-3 w-12 h-12 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt="user photo"
              />
              {{ getUserData.email }}
              <svg
                class="w-4 h-4 mx-1.5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>

            <user-profile
              id="dropdownAvatarName"
              :userData="getUserData"
              @signOutEmit="signOut"
            ></user-profile>
          </div>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { userCartList } from "@/stores/Cart/Cart_items";
import { useIndexStore } from "@/stores/Store_index";
import { onUpdated, ref } from "vue";
import CartList from "./cartList.vue";
import Notifications from "./Notifications.vue";
import UserProfile from "./UserProfile.vue";
import BaseButton from "../UI/BaseButton.vue";
import MultiLevelDropdownNav from "./MultiLevelDropdownNav.vue";

export default {
  components: {
    CartList,
    Notifications,
    UserProfile,
    BaseButton,
    MultiLevelDropdownNav,
  },
  data() {
    return {
      dropdownAvatarNameButton: null,
      dropdownAvatarName: null,
      dropdown: null,
      options: null,
    };
  },
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

    return {
      cartList,
      indexStore,
      header,
    };
  },
  mounted() {
    const observer = this.getObserver;
    if (!observer) return;

    observer.observe(this.header);

    // active profile dropdown
    this.dropdownAvatarButton = this.$el.querySelector(
      "#dropdownAvatarNameButton"
    );
    this.dropdownAvatar = this.$el.querySelector("#dropdownAvatarName");

    this.options = {
      placement: "bottom",
    };
    this.dropdown = new Dropdown(
      this.dropdownAvatar,
      this.dropdownAvatarButton,
      this.options
    );

    // Get Resize Window
    this.$nextTick(() => {
      this.indexStore.windowResize();
    });
  },
  beforeDestroy() {
    this.indexStore.windowRemoveResize();
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
    activeProfile() {
      this.dropdown.show();
    },
    signOut() {
      this.indexStore.signOutFn();
      this.$router.replace({ name: "home" });
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
    routeUrl() {
      return this.$route.name;
    },
    isAuthentication() {
      return this.indexStore.isAuthentication;
    },
    getUserData() {
      return this.indexStore.user;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  justify-content: space-between;
  align-items: center;

  background-color: #f5f5f5;
}

ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;

  li {
    margin: auto 0;
    transition: all 0.25s ease-in-out;

    & > span {
      position: relative;

      margin: auto 2rem;
      text-decoration: none;
      font-size: 20px;
      font-weight: normal;
      color: rgb(101, 112, 124);
      transition: all 0.3s ease-in-out;

      & > a:hover {
        // font-weight: bold;
        color: rgb(68, 76, 84);
      }

      & > a.router-link-active {
        font-weight: bold;
      }
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

.routeCircle-enter-active {
  animation: circleMoveIn 0.25s ease-in;
}

.routeCircle-leave-active {
  animation: circleMoveIn 0.25s ease-out reverse;
}

@keyframes circleMoveIn {
  0% {
    transform: translate(50%, 3rem);
    opacity: 0;
  }

  85% {
    transform: translate(50%, -0.3rem);
    opacity: 1;
  }

  100% {
    transform: translate(50%, 0rem);
    opacity: 1;
  }
}
</style>
