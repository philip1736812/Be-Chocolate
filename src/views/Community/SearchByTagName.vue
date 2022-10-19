<template>
  <div class="container w-full md:w-3/4 px-2 mx-auto">
    <div class="mt-20">
      <h1 class="font-medium">
        <span class="font-light text-sm"> Search By #</span> {{ hashTagName }}
      </h1>
    </div>
    <main class="mt-8">
      <div class="grid 2xl:grid-cols-4 xl:grid-cols-3 sm:grid-cols-2 gap-4">
        <article-frame
          v-for="item in getArticle"
          :key="item.id"
          :articleContent="item"
        ></article-frame>
      </div>
    </main>
  </div>
</template>

<script>
import InDevelopment from "../../components/PageNotFound/InDevelopment.vue";
import ArticleFrame from "../../components/CommunityView/ArticleFrame.vue";

import { useCommunityStore } from "../../stores/Article/Store_articleCommunity";

export default {
  components: { InDevelopment, ArticleFrame },
  props: ["hashTagName"],
  setup() {
    const communityStore = useCommunityStore();

    return { communityStore };
  },
  computed: {
    getArticle() {
      return this.communityStore.getArticle.filter((item) =>
        item.hashTag.find((hashTag) => {
          return (
            hashTag.trim().replace(" ", "").toLowerCase() ==
            this.hashTagName.trim().replace(" ", "").toLowerCase()
          );
        })
      );
    },
  },
};
</script>
