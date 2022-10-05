<template>
  <div class="relative">
    <base-button
      @mouseenter="selectedNav"
      @mouseleave="clearIntervalFn"
      @click="clickThisNavEmit"
      link
      :to="{ name: 'productType', params: { productTypeName: routeUrlGen } }"
      class="itemNav w-full md:w-24 lg:w-28 lg:h-40 lg:h-32 xl:w-36 xl:h-36 border-2 border-slate-100 mx-auto mb-3 md:mb-2 lg:mb-3 xl:mb-0 md:mx-2 lg:mx-2 p-2 lg:p-2"
    >
      <img :src="urlNav" :alt="navName" class="w-16 h-16 object-contain" />
      <p class="text-sm text-center">{{ navName }}</p>
      <transition name="fade-ball">
        <div
          v-if="routeUrlGen === activeProduct"
          class="absolute right-2/4 translate-x-2/4 bottom-0 w-2 h-2 mt-2 mx-auto bg-slate-700 rounded-full"
        ></div>
      </transition>
    </base-button>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  props: ["navName", "urlNav", "activeProduct"],
  props: {
    navName: {
      type: String,
    },
    urlNav: {
      type: String,
    },
    activeProduct: {
      type: String,
      default: "cacaoPods",
    },
  },
  components: { BaseButton },
  emits: ["clickThisNav", "productSelected"],
  data() {
    return {
      productSelected: null,
      countingTime: 0,
      intervalFn: null,
    };
  },
  computed: {
    routeUrlGen() {
      return this.navName
        .split(" ")
        .map((str, i) => {
          return i === 0
            ? str.toLowerCase()
            : str[0].toUpperCase() + str.slice(1);
        })
        .join("");
    },
  },
  created() {},
  methods: {
    clearIntervalFn() {
      clearInterval(this.intervalFn);
    },
    selectedNav() {
      this.countingTime = 0;
      this.intervalFn = setInterval(() => {
        this.countingTime += 300;

        if (this.countingTime === 300) return;
        this.clearIntervalFn();

        this.productSelected = this.routeUrlGen;
        this.$emit("productSelected", this.productSelected);
      }, 300);
    },
    clickThisNavEmit() {
      this.productSelected = this.routeUrlGen;
      this.$emit("clickThisNav", this.productSelected);
    },
  },
};
</script>

<style lang="scss" scoped>
.itemNav {
  display: grid;
  grid-template-rows: 1fr 0.4fr;
  border-radius: 10px;
  cursor: pointer;
  background: none;
  transition: all 0.25s ease-in-out;

  img {
    margin: auto;
  }
}

.fade-ball-enter-active {
  animation: ball-fade-pop 0.25s ease-in;
}
.fade-ball-leave-active {
  animation: ball-fade-pop 0.25s ease-out reverse;
}

@keyframes ball-fade-pop {
  0% {
    opacity: 0;
    transform: translate(50%, 0) scale(0);
  }
  85% {
    transform: translate(50%, 0) scale(1.35);
    opacity: 1;
  }
  100% {
    transform: translate(50%, 0) scale(1);
    opacity: 1;
  }
}
</style>
