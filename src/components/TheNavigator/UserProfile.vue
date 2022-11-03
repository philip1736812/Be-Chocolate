<template>
  <div
    id="dropdownAvatarName"
    class="hidden z-50 w-56 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
    data-popper-reference-hidden=""
    data-popper-escaped=""
    data-popper-placement="bottom"
    style="
      position: absolute;
      inset: 0px auto auto 0px;
      margin: 0px;
      transform: translate(0px, 546px);
    "
  >
    <div class="py-3 px-4 text-sm text-gray-900 dark:text-white">
      <div class="text-sm font-bold">User Profile</div>
      <div class="truncate text-base">{{ userData.email }}</div>
    </div>
    <ul
      class="py-1 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
    >
      <li>
        <base-button
          link
          :to="{ name: 'myStore-dashboard' }"
          class="block text-sm py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Dashboard</base-button
        >
      </li>
      <li class="opacity-40">
        <a
          href="#"
          class="block text-sm py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Settings</a
        >
      </li>
      <li class="opacity-40">
        <a
          href="#"
          class="block text-sm py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Earnings</a
        >
      </li>
    </ul>
    <div class="py-1">
      <base-button
        @click="$emit('signOutEmit')"
        class="block w-full text-start text-sm py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >Sign out
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";

export default {
  components: { BaseButton },
  emit: ["signOutEmit"],
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
};
</script>
