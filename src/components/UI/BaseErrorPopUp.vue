<template>
  <div
    class="fixed z-50 right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white rounded-lg border shadow-md w-11/12 md:6/12 md:flex-row md:max-w-xl p-6 text-slate-400"
  >
    <a href="#" class="flex flex-col items-center">
      <div class="mx-6">
        <font-awesome-icon
          v-if="mode === 'error'"
          icon="fa-triangle-exclamation"
          class="text-6xl text-center text-red-700"
        />
        <font-awesome-icon
          v-else
          icon="fa-circle-exclamation"
          class="text-6xl text-center text-yellow-400"
        />
      </div>
      <div
        class="flex flex-col items-center justify-between p-4 leading-normal"
      >
        <h5
          class="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white"
        >
          {{ errMsg || "Something Wrong! maybe try later" }}
        </h5>

        <p v-if="descriptionMsg !== ''" class="text-slate-700">
          {{ descriptionMsg }}
        </p>
      </div>
    </a>
    <div>
      <base-button
        v-if="mode === 'error'"
        mode="error"
        @click="$emit('closePopUp')"
      >
        Close</base-button
      >
      <div v-else class="flex space-x-4">
        <base-button mode="minimalBtn" @click="$emit('closePopUp')">
          Yes, Leave this site
        </base-button>
        <base-button mode="warning" @click="$emit('cancelAction')">
          Cancel
        </base-button>
      </div>
    </div>

    <teleport to="body">
      <div
        class="fixed overlay backdrop-blur-sm w-full h-full fixed z-40 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-black/30 rounded-md px-1.5 sm:px-3 py-2 cursor-pointer"
        @click="discardItem"
      ></div>
    </teleport>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  components: { BaseButton },
  emits: ["closePopUp", "cancelAction"],
  props: {
    errMsg: {
      type: String,
    },
    descriptionMsg: {
      type: String,
      default: "",
    },
    mode: {
      type: String,
      default: "error",
    },
  },
};
</script>
