<template>
  <div
    class="fixed z-50 flex flex-col items-center justify-center sm:flex-row w-11/12 md:w-7/12 xl:w-5/12 right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white px-6 py-4 rounded-md text-slate-800 shadow-md"
  >
    <div class="flex items-center mb-6 mr-0 sm:mr-6 sm:mb-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-24"
        viewBox="0 0 24 24"
        role="img"
      >
        <title>HEY icon</title>
        <path
          d="M19.57 6.698a5.724 5.724 0 00-2.644 1.572c-.84-2.952-2.65-7.42-4.415-8.15a1.283 1.283 0 00-1.181.05c-1.104.643-1.823 2.709-1.194 6.624C7.71 2.353 6.863 2.36 6.472 2.353a.956.956 0 00-.873.597c-.263.584-.79 2.406.494 6.327C4.547 7.16 4.072 6.89 3.526 6.917a.969.969 0 00-.821.557c-.463.873-.41 3.068 1.027 6.34a2.946 2.946 0 00-1.773-.73 1.06 1.06 0 00-.853.544c-.584 1.073.642 4.083 2.157 6.124C4.49 21.427 6.947 24 10.515 24a8.047 8.047 0 001.489-.141.654.654 0 00-.25-1.284c-2.965.578-5.2-1.052-6.553-2.515-2.021-2.19-2.908-4.82-2.959-5.622.424.173 1.644.892 4.018 3.934a.65.65 0 001.059-.757c-3.337-5.066-3.664-8.132-3.555-9.166.982 1 3.433 4.671 5.28 7.445a.642.642 0 00.88.199.642.642 0 00.238-.873C6.312 8.16 6.446 4.952 6.67 3.874c.577.584 2.11 2.618 5.34 9.626a.642.642 0 00.84.327.642.642 0 00.366-.827c-3.132-8.504-1.772-11.385-1.252-11.712.674 0 2.567 3.247 3.748 7.502.07.263.141.52.205.77a4.094 4.094 0 00-.385.924c-.64 2.355-1.283 7.7-.045 9.17a1.194 1.194 0 001.04.444 1.688 1.688 0 001.232-.757c1.15-1.675.475-5.879-.443-9.557a4.832 4.832 0 012.567-1.84 1.283 1.283 0 011.284.307c.526.59 1.445 2.798-1.34 10.583a.654.654 0 001.231.436c2.22-6.206 2.568-10.204 1.084-11.886A2.528 2.528 0 0019.57 6.7zm-2.888 11.918a.41.41 0 01-.218.186c-.48-.571-.48-3.953.045-6.727.995 4.795.417 6.2.173 6.54z"
        />
      </svg>
    </div>
    <div class="w-full grow">
      <h2 class="text-base font-medium">Who are My Guest?</h2>
      <p class="mb-4 text-sm">please tell me who you are</p>
      <div
        class="absolute right-6 top-4 cursor-pointer"
        @click="$emit('closeNameWelcome')"
      >
        <font-awesome-icon icon="fa-xmark" class="text-lg" />
      </div>
      <input
        type="text"
        placeholder="name or company"
        class="rounded-sm h-8 w-full"
        v-model="whoName"
      />
      <p v-if="errMessage" class="text-sm mt-1.5 text-red-700">
        ** {{ errMessage }}
      </p>
      <div class="flex justify-start items-center mt-6 space-x-8">
        <base-button mode="articleBtn" @click="submitNameFormEmit">
          Submit</base-button
        >
        <base-button mode="flat" @click="$emit('closeNameWelcome')">
          Close</base-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../../components/UI/BaseButton.vue";

export default {
  components: { BaseButton },
  emits: ["closeNameWelcome", "submitNameForm"],
  data() {
    return {
      whoName: "",
      errMessage: "",
    };
  },
  methods: {
    submitNameFormEmit() {
      if (this.whoName === "") {
        this.errMessage =
          "Please input your name or company at least 1 character.";

        return;
      }

      this.$emit("submitNameForm", this.whoName);
    },
  },
  watch: {
    whoName(str) {
      if (str === "") return;
      this.errMessage = "";
    },
  },
};
</script>
