<template>
  <div class="container w-3/4 mx-auto">
    <form
      @submit.prevent="submitSignUp"
      class="absolute p-4 w-11/12 xl:w-full max-w-6xl right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >First name</label
          >
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            v-model="firstName"
            required
          />
        </div>
        <div>
          <label
            for="last_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Last name</label
          >
          <input
            type="text"
            id="last_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Doe"
            v-model="lastName"
            required
          />
        </div>
        <div>
          <label
            for="company"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Company</label
          >
          <input
            type="text"
            id="company"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="company"
            v-model="company"
            required
          />
        </div>
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Email address</label
        >
        <input
          type="email"
          id="email"
          v-model="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="john.doe@company.com"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Password</label
        >
        <input
          type="password"
          id="password"
          autocomplete="on"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="•••••••••"
          v-model="password"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="confirm_password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Confirm password</label
        >
        <input
          type="password"
          id="confirm_password"
          autocomplete="on"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="•••••••••"
          v-model="password"
          required
        />
      </div>
      <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            required
          />
        </div>
        <label
          for="remember"
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >I agree with the
          <a href="#" class="text-blue-600 hover:underline dark:text-blue-500"
            >terms and conditions</a
          >.</label
        >
      </div>
      <div class="flex flex-col sm:flex-row items-start sm:items-end">
        <base-button
          mode="articleBtn"
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mb-4 sm:m-0 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create Account
        </base-button>

        <div class="text-sm font-medium text-gray-500 dark:text-gray-300 ml-4">
          Have An Account?
          <base-button
            link
            :to="{ name: 'signIn' }"
            class="text-blue-700 hover:underline dark:text-blue-500"
            >Sign In</base-button
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { useIndexStore } from "../../stores/Store_index";
import BaseButton from "@/components/UI/BaseButton.vue";
import InDevelopment from "../../components/PageNotFound/InDevelopment.vue";

export default {
  components: { BaseButton, InDevelopment },
  setup() {
    const indexStore = useIndexStore();

    return { indexStore };
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async submitSignUp() {
      await this.indexStore.auth("signUp", {
        email: this.email,
        password: this.password,
        returnSecureToken: true,
      });

      this.$router.replace({ name: "signIn" });
    },
  },
};
</script>
