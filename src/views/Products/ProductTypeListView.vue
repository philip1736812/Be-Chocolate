<template>
  <div>
    <div class="w-full"></div>

    {{ productTypeName }}
  </div>
</template>

<script>
import { useProductStore } from "../../stores/ProductItems/Store_product";

export default {
  props: ["productTypeName"],
  setup() {
    const productItems = useProductStore();

    return { productItems };
  },
  computed: {
    getProductName() {
      console.log(this.productItem[this.productTypeName + `items`]);
      return this.productItems;
    },
    productItem() {
      return `${this.productItem}${cacaoPodsItems}`;
    },
  },
};
</script>
