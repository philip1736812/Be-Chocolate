<template>
  <!-- Dropdown menu -->
  <div
    id="dropdownNotification"
    class="absolute top-0 right-0 z-50 w-96 max-w-sm bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-800 dark:divide-gray-700 -translate-x-12 translate-y-12"
    aria-labelledby="dropdownNotificationButton"
    data-popper-reference-hidden=""
    data-popper-escaped=""
    data-popper-placement="bottom"
  >
    <div
      class="block text-lg py-2 px-4 font-lg text-center text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white"
    >
      Notifications
    </div>
    <div class="divide-y divide-gray-100 dark:divide-gray-700">
      <a
        href="#"
        class="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <div class="flex-shrink-0">
          <img
            class="w-11 h-11 rounded-full"
            src="/docs/images/people/profile-picture-1.jpg"
            alt="Jese image"
          />
          <div
            class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-blue-600 rounded-full border border-white dark:border-gray-800"
          >
            <svg
              class="w-3 h-3 text-white"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
              ></path>
              <path
                d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="pl-3 w-full">
          <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
            New message from
            <span class="font-semibold text-gray-900 dark:text-white"
              >Jese Leos</span
            >: "Hey, what's up? All set for the presentation?"
          </div>
          <div class="text-xs text-blue-600 dark:text-blue-500">
            a few moments ago
          </div>
        </div>
      </a>
    </div>

    <teleport to="body">
      <div
        class="overlay fixed top-0 right-0 bg-black w-full h-full opacity-10 z-40"
        @click="$emit('disActive')"
      ></div>
    </teleport>
  </div>
</template>
