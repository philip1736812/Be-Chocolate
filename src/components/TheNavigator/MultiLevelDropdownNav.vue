<template>
  <div>
    <!-- drawer init and toggle -->
    <div class="text-center">
      <base-button
        class="text-slate-800 hover:text-white transition-all hover:bg-slate-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        type="button"
        data-drawer-target="drawer-disable-body-scrolling"
        data-drawer-show="drawer-disable-body-scrolling"
        data-drawer-body-scrolling="false"
        aria-controls="drawer-disable-body-scrolling"
        @click.stop="activeDropDown"
      >
        <font-awesome-icon icon="fa-bars" class="text-base" />
      </base-button>
    </div>

    <!-- drawer component -->
    <div
      id="drawer-disable-body-scrolling"
      class="fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800 transition-transform left-0 top-0 -translate-x-full"
      tabindex="-1"
      aria-labelledby="drawer-disable-body-scrolling-label"
      aria-hidden="true"
      @click="deActiveDropDown"
    >
      <h5
        id="drawer-disable-body-scrolling-label"
        class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
      >
        Menu
      </h5>
      <button
        type="button"
        data-drawer-dismiss="drawer-disable-body-scrolling"
        aria-controls="drawer-disable-body-scrolling"
        class="text-stale-400 bg-transparent hover:bg-gray-200 hover:text-slate-600 hover:text-slate-800 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Close menu</span>
      </button>
      <div class="py-4 overflow-y-auto">
        <div class="space-y-2 divide-y">
          <!-- User Profile Information -->
          <ul v-if="isAuthentication">
            <li class="flex flex-row flex-warp items-center">
              <div class="relative">
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                  alt=""
                />
                <span
                  class="top-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"
                ></span>
              </div>
              <div class="py-3 px-4 text-sm text-gray-900 dark:text-white">
                <div>Bonnie Green</div>
                <div class="font-medium truncate">name@flowbite.com</div>
              </div>
            </li>
          </ul>

          <!-- User Profile Control -->
          <ul v-if="isAuthentication" class="py-2 opacity-40">
            <li>
              <button
                type="button"
                class="flex items-center w-full p-2 text-base font-normal text-slate-600 hover:text-slate-800 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                disabled
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-slate-600 hover:text-slate-800 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="flex-1 ml-3 text-left whitespace-nowrap"
                  >E-commerce</span
                >
                <svg
                  class="w-6 h-6"
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
              <ul id="dropdown-example" class="hidden py-2 space-y-2">
                <li>
                  <a
                    href="#"
                    class="flex items-center w-full p-2 text-base font-normal text-slate-600 hover:text-slate-800 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >Products</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center w-full p-2 text-base font-normal text-slate-600 hover:text-slate-800 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >Billing</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center w-full p-2 text-base font-normal text-slate-600 hover:text-slate-800 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >Invoice</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-slate-600 hover:text-slate-800 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-slate-600 hover:text-slate-800 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                  ></path>
                  <path
                    d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                  ></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                <span
                  class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
                  >3</span
                >
              </a>
            </li>
          </ul>

          <!-- Page Navigator -->
          <ul class="py-2">
            <li>
              <base-button
                link
                :to="{ name: 'home' }"
                class="flex items-center p-2 text-base font-normal text-slate-600 hover:text-slate-800 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <font-awesome-icon icon="fa-house" class="text-lg" />
                <span class="ml-3">Home</span>
              </base-button>
            </li>
            <li>
              <base-button
                link
                :to="{ name: 'craftChocolate' }"
                class="flex items-center p-2 text-base font-normal text-slate-600 hover:text-slate-800 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <font-awesome-icon icon="fa-cookie-bite" class="text-lg" />
                <span class="flex-1 ml-3 whitespace-nowrap"
                  >Craft Chocolate</span
                >
              </base-button>
            </li>
            <li>
              <base-button
                link
                :to="{ name: 'rating' }"
                class="flex items-center p-2 text-base font-normal text-slate-600 hover:text-slate-800 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <font-awesome-icon icon="fa-star" class="text-lg" />
                <span class="flex-1 ml-3 whitespace-nowrap">Rating</span>
              </base-button>
            </li>
            <li>
              <base-button
                link
                :to="{ name: 'communityMall' }"
                class="flex items-center p-2 text-base font-normal text-slate-600 hover:text-slate-800 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <font-awesome-icon icon="fa-comments" class="text-lg" />
                <span class="flex-1 ml-3 whitespace-nowrap">Community</span>
              </base-button>
            </li>
            <li v-if="isAuthentication">
              <base-button
                link
                :to="{ name: 'myStore' }"
                class="flex items-center p-2 text-base font-normal text-slate-600 hover:text-slate-800 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <font-awesome-icon icon="fa-shop" class="text-lg" />
                <span class="flex-1 ml-3 whitespace-nowrap">My Shop</span>
              </base-button>
            </li>
          </ul>

          <!-- Sign Out and Other Config -->
          <ul class="py-2">
            <li v-if="isAuthentication">
              <base-button
                link
                @click="signOut"
                class="flex items-center p-2 text-base font-normal text-slate-600 hover:text-slate-800 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <font-awesome-icon
                  icon="fa-arrow-right-from-bracket"
                  class="text-lg"
                />
                <span class="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
              </base-button>
            </li>
            <li v-else>
              <base-button
                link
                :to="{ name: 'signIn' }"
                class="flex items-center p-2 text-base font-normal text-slate-600 hover:text-slate-800 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <font-awesome-icon
                  icon="fa-arrow-right-from-bracket"
                  class="text-lg"
                />
                <span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
              </base-button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useIndexStore } from "../../stores/Store_index";
import BaseButton from "../UI/BaseButton.vue";

export default {
  components: { BaseButton },
  setup() {
    const indexStore = useIndexStore();
    return { indexStore };
  },
  data() {
    return {
      drawer: null,
    };
  },
  mounted() {
    const targetEl = this.$el.querySelector("#drawer-disable-body-scrolling");

    // options with default values
    const options = {
      placement: "left",
      backdrop: true,
      bodyScrolling: false,
      edge: false,
      edgeOffset: "",
      backdropClasses:
        "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30",
    };

    this.drawer = new Drawer(targetEl, options);
  },
  computed: {
    isAuthentication() {
      return this.indexStore.isAuthentication;
    },
  },
  methods: {
    activeDropDown() {
      this.drawer.toggle();
    },
    deActiveDropDown() {
      this.drawer.hide();
    },
    signOut() {
      this.indexStore.signOutFn();
    },
  },
};
</script>

<style lang="scss" scoped>
.router-link-active {
  font-weight: bold;
}
</style>
