<template>
  <div
    class="fixed z-50 right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white rounded-lg border shadow-md w-11/12 md:6/12 md:flex-row md:max-w-xl p-6"
  >
    <a href="#" class="flex flex-col items-center">
      <div class="mx-6">
        <font-awesome-icon
          icon="fa-triangle-exclamation"
          class="text-6xl text-center text-red-700"
        />
      </div>
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5
          class="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white"
        >
          {{ errMsg || "Something Wrong! maybe try later" }}
        </h5>
      </div>
    </a>
    <div>
      <base-button mode="error" @click="$emit('closePopUp')">
        Close</base-button
      >
    </div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  components: { BaseButton },
  props: {
    errMsg: {
      type: String,
    },
  },
};
</script>
