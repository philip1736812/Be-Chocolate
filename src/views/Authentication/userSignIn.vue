<template>
  <div class="fixed px-3 sm:p-0 w-full h-full">
    <div
      class="absolute right-1/2 translate-x-1/2 top-0 translate-y-12 sm:translate-y-1/2"
    >
      <h1 class="text-base sm:text-lg font-medium mb-6">
        Register new Account or Use Guest account
      </h1>
      <div>
        <h3 class="text-sm sm:text-base font-medium">Guest Account:</h3>
        <p class="text-sm sm:text-base font-light">
          <span class="text-sm sm:text-base font-medium mr-3 mb-1"
            >Username:</span
          >guest.test@gmail.com
        </p>
        <p class="text-sm sm:text-base font-light">
          <span class="text-sm sm:text-base font-medium mr-3 mb-1"
            >Password:</span
          >1234569
        </p>
      </div>
    </div>
    <div
      class="absolute p-4 w-11/12 xl:w-full max-w-lg right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <form class="space-y-6" action="#" @submit.prevent="submitSignIn">
        <h5
          class="text-lg sm:text-xl font-medium text-gray-900 dark:text-white"
        >
          Sign in to our platform
        </h5>
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Your email</label
          >
          <input
            type="email"
            name="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com"
            v-model="email"
            required
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Your password</label
          >
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            autocomplete="on"
            v-model="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div class="flex items-start">
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="remember"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Remember me</label
            >
          </div>
          <a
            href="#"
            class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >Lost Password?</a
          >
        </div>
        <div class="w-full flex justify-center">
          <base-button mode="articleBtn" type="submit">
            Login to your account
          </base-button>
        </div>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?
          <base-button
            link
            :to="{ name: 'signUp' }"
            class="text-blue-700 hover:underline dark:text-blue-500"
            >Create account</base-button
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import BaseButton from "../../components/UI/BaseButton.vue";
import { useIndexStore } from "../../stores/Store_index";

export default {
  components: { BaseButton },
  setup() {
    const indexStore = useIndexStore();

    return { indexStore };
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async submitSignIn() {
      await this.indexStore.auth("signIn", {
        email: this.email,
        password: this.password,
        returnSecureToken: true,
      });

      if (!this.indexStore.isAuthentication) return;

      if (this.$route.query.next) {
        this.$router.replace({ name: this.$route.query.next });
        return;
      }
      this.$router.replace({ name: "home" });
    },
  },
};
</script>
