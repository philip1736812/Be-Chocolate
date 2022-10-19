<template>
  <div :class="style">
    <h2 class="font-medium text-base md:text-xl mb-3">
      Sorry! Page is not ready to show
    </h2>
    <p class="font-base text-lg md:text-lg mb-3">In Development Process</p>
    <p v-if="canGoBack" class="font-light text-sm md:text-lg">
      <span
        class="font-bold text-base text-indigo-700 hover:text-indigo-900 transition-all"
        ><base-button @click="$router.go(-1)">
          Back to last page</base-button
        ></span
      >
    </p>
  </div>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";

export default {
  components: { BaseButton },
  props: {
    canGoBack: {
      type: Boolean,
      default: true,
    },
    positionFixed: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    style() {
      if (this.positionFixed) {
        return "container w-9/12 md:w-2/4 px-8 md:p-12 fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 mx-auto text-center border-2 rounded-lg text-stale-800";
      } else {
        return "container w-9/12 md:w-2/4 px-8 md:p-12 relative mx-auto text-center border-2 rounded-lg text-stale-800";
      }
    },
  },
};
</script>
