<template>
  <div
    class="container w-9/12 md:w-2/4 px-8 md:p-12 fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 mx-auto text-center border-2 rounded-lg text-stale-800"
  >
    <h2 class="font-medium text-xl md:text-3xl mb-3">
      Sorry! Page is not ready to show
    </h2>
    <p class="font-base text-lg md:text-lg mb-3">In Development Process</p>
    <p class="font-light text-base md:text-lg">
      Recently site:
      <span
        class="font-bold text-lg text-indigo-700 hover:text-indigo-900 transition-all"
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
};
</script>
