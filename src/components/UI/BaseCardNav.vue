<template>
  <div>
    <base-button
      @mouseenter="selectedNav"
      @mouseleave="clearIntervalFn"
      link
      :to="{ name: 'productType', params: { productTypeName: routeUrlGen } }"
      class="itemNav"
    >
      <img :src="urlNav" :alt="navName" />
      <p>{{ navName }}</p>
    </base-button>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  props: ["navName", "urlNav"],
  components: { BaseButton },
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
  },
};
</script>

<style lang="scss" scoped>
.itemNav {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 0.4fr;

  width: 179px;
  height: 179px;
  border: 1px solid #f4f4f4;
  margin: 0 20px;
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
  p {
    font-size: 18px;
    text-align: center;
  }
}
</style>
