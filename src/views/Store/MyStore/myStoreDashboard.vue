<template>
  <div
    class="container w-full px-2 md:px-0 lg:w-3/4 mx-auto mt-12 text-slate-800"
  >
    <div
      class="w-full xl:w-3/4 mx-auto flex flex-col md:flex-row pb-12 md:pb-0 border-b items-center"
    >
      <img
        class="rounded-full w-36 h-36 m-8 md:m-16"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
        alt=""
      />
      <div>
        <div class="flex-1">
          <h2 class="text-lg font-medium mb-3">
            <span
              ><font-awesome-icon icon="fa-store" class="mr-1 md:mr-2 text-sm"
            /></span>
            {{ getStoreName }}
          </h2>
          <p class="text-sm text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iure
            ab fuga voluptates provident numquam?
          </p>
        </div>
        <div class="grid grid-cols-3 text-center mt-8 divide-x">
          <div>
            <h2>
              <span
                ><font-awesome-icon icon="fa-people-group" class="text-lg mr-2"
              /></span>
              Follower
            </h2>
            <p class="text-lg font-medium mt-3 text-slate-500">2053</p>
          </div>
          <div>
            <h2>
              <span
                ><font-awesome-icon icon="fa-thumbs-up" class="text-lg mr-2"
              /></span>
              Liked
            </h2>
            <p class="text-lg font-medium mt-3 text-slate-500">2054</p>
          </div>
          <div>
            <h2>
              <span
                ><font-awesome-icon
                  icon="fa-comments-dollar"
                  class="text-lg mr-2"
              /></span>
              Sold Out
            </h2>
            <p class="text-lg font-medium mt-3 text-slate-500">2058</p>
          </div>
        </div>
      </div>
    </div>
    <main class="w-full xl:w-3/4 mx-auto mt-8">
      <div class="border-b border-gray-200 dark:border-gray-700">
        <ul
          class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400"
        >
          <li
            class="mr-2 transition-all"
            @click="activeTab('myStore-dashboard')"
          >
            <base-button
              link
              :to="{ name: 'myStore-dashboard' }"
              :class="
                tabsActive == `myStore-dashboard`
                  ? tabsActiveStyleComputed
                  : tabsDisActiveStyleComputed
              "
              aria-current="page"
            >
              <svg
                aria-hidden="true"
                :class="
                  tabsActive == `myStore-dashboard`
                    ? iconActiveStyleComputed
                    : iconDisActiveStyleComputed
                "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                ></path>
              </svg>
              Dashboard
            </base-button>
          </li>
          <li
            class="mr-2 transition-all"
            @click="activeTab('myStore-inventory')"
          >
            <base-button
              link
              :to="{ name: 'myStore-inventory' }"
              :class="
                tabsActive == `myStore-inventory`
                  ? tabsActiveStyleComputed
                  : tabsDisActiveStyleComputed
              "
              aria-current="page"
            >
              <font-awesome-icon
                :class="
                  tabsActive == `myStore-inventory`
                    ? iconActiveStyleComputed
                    : iconDisActiveStyleComputed
                "
                icon="fa-boxes-stacked"
              />
              Inventory
            </base-button>
          </li>
          <li
            class="mr-2 transition-all"
            @click="activeTab('myStore-orderList')"
          >
            <base-button
              link
              :to="{ name: 'myStore-orderList' }"
              :class="
                tabsActive == `myStore-orderList`
                  ? tabsActiveStyleComputed
                  : tabsDisActiveStyleComputed
              "
            >
              <font-awesome-icon
                icon="fa-truck-ramp-box"
                :class="
                  tabsActive == `myStore-orderList`
                    ? iconActiveStyleComputed
                    : iconDisActiveStyleComputed
                "
              />
              Order List
            </base-button>
          </li>
        </ul>
      </div>

      <div class="my-8">
        <router-view v-slot="slotProps">
          <transition name="navigation" mode="out-in">
            <component :is="slotProps.Component"></component>
          </transition>
        </router-view>
      </div>
    </main>

    <guest-user-ask-name></guest-user-ask-name>
  </div>
</template>

<script>
import InDevelopment from "../../../components/PageNotFound/InDevelopment.vue";
import BaseButton from "../../../components/UI/BaseButton.vue";
import GuestUserAskName from "../../../components/PopUp/GuestUserAskName.vue";

import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useMyStore } from "../../../stores/MyStore/Store_myStore";

export default {
  components: { InDevelopment, BaseButton, GuestUserAskName },
  setup() {
    const route = useRoute();
    const tabsActive = ref(route.matched[1].name);
    const myStore = useMyStore();

    // computed style tabs && icon tabs
    const tabsActiveStyleComputed = computed(() => {
      return "inline-flex p-2 sm:p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 ";
    });
    const tabsDisActiveStyleComputed = computed(() => {
      return "inline-flex p-2 sm:p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300";
    });
    const iconActiveStyleComputed = computed(() => {
      return "mr-2 w-5 h-5 text-blue-600 dark:text-blue-500";
    });
    const iconDisActiveStyleComputed = computed(() => {
      return "mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500";
    });

    const getStoreName = computed(() => {
      return myStore.myStoreName;
    });

    const activeTab = (tagActive) => {
      tabsActive.value = tagActive;
    };

    return {
      tabsActive,
      tabsActiveStyleComputed,
      tabsDisActiveStyleComputed,
      iconActiveStyleComputed,
      iconDisActiveStyleComputed,
      activeTab,
      getStoreName,
    };
  },
};
</script>

<style lang="scss" scoped>
.navigation-enter-active {
  animation: fade-in-out 0.25s ease-in;
}

.navigation-leave-active {
  animation: fade-in-out 0.25s ease-in reverse;
}

@keyframes fade-in-out {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
