<template>
  <div
    class="w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 text-slate-800"
  >
    <div class="relative">
      <base-button link to="/" href="#">
        <img class="rounded-t-lg" :src="articlePicUrl" :alt="articleTopic" />
      </base-button>
      <div class="absolute top-2 right-2">
        <img
          class="w-10 h-10 rounded-full"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
        />
        <span
          class="top-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"
        ></span>
      </div>
    </div>
    <div class="p-5 flex flex-col items-stretch">
      <div class="lg:h-80 md:h-80 sm:h-96 self-stretch overflow-hidden">
        <p class="text-sm font-light">Posted 23/09/22</p>
        <base-button link to="/">
          <h5
            class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {{ articleTopic }}
          </h5>
        </base-button>
        <div class="mb-2 flex flex-wrap overflow-hidden">
          <div
            v-for="hashTag in articleHashTag"
            :key="hashTag"
            class="bg-slate-800 text-white m-0.5 px-1.5 rounded-md"
          >
            <p class="truncate whitespace-pre">
              <span class="font-bold inline text-sm"> #</span>{{ hashTag }}
            </p>
          </div>
        </div>
        <p
          class="mb-3 mt-2 h-28 overflow-hidden text-ellipsis text-lg font-normal text-gray-700 dark:text-gray-400"
        >
          {{ articleShortContent }}
        </p>
      </div>
      <div>
        <base-button
          link
          to="/"
          mode="articleBtn"
          href="#"
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            aria-hidden="true"
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";

export default {
  components: { BaseButton },
  props: {
    articleContent: {
      type: Object,
      required: true,
    },
  },

  computed: {
    articleId() {
      return this.articleContent.id;
    },
    articleTopic() {
      return this.articleContent.topic;
    },
    articleShortContent() {
      return this.articleContent.content[0];
    },
    articlePicUrl() {
      return this.articleContent.picHeaderUrl;
    },
    articleHashTag() {
      return this.articleContent.hashTag;
    },
  },
};
</script>
