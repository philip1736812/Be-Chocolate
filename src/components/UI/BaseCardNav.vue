<template>
  <div>
    <base-button
      @mouseenter="selectedNav"
      @mouseleave="clearIntervalFn"
      @click="clickThisNavEmit"
      link
      :to="{ name: 'productType', params: { productTypeName: routeUrlGen } }"
      class="itemNav w-full md:w-24 lg:w-28 lg:h-40 lg:h-32 xl:w-40 xl:h-40 border-2 border-slate-100 mx-auto mb-3 md:mb-2 lg:mb-6 xl:mb-0 md:mx-2 lg:mx-4 p-2 lg:p-4"
    >
      <img
        :src="urlNav"
        :alt="navName"
        class="w-16 h-20 lg:w-20 lg:h-24 object-contain"
      />
      <p class="text-sm md:text-base lg:text-lg text-center">{{ navName }}</p>
    </base-button>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  props: ["navName", "urlNav"],
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

  &.itemNav:hover {
    background: #fff;
  }

  img {
    margin: auto;
  }
}
</style>
