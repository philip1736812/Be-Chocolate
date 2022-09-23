<template>
  <div class="my-20 text-slate-800">
    <div class="container w-3/4 mx-auto text-center">
      <h1 class="text-3xl font-medium mb-8">
        <span>
          <font-awesome-icon icon="fa-comments" class="mr-4 text-5xl" />
        </span>
        Let's Talk, Share, Learn and Fun
      </h1>
      <p class="w-3/4 mx-auto text-lg">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, a
        eaque itaque ipsam est earum, maxime doloremque ab repellendus voluptate
        saepe molestias culpa nihil veniam.
      </p>
    </div>
    <div class="container w-3/4 mx-auto mt-28">
      <div class="mb-8">
        <base-search-bar></base-search-bar>
      </div>
      <div class="h-60 overflow-hidden border-b-2 lg:border-0">
        <h2 class="text-lg font-medium">Top #Hashtag</h2>
        <div class="mt-4">
          <ul
            class="grid grid-cols-2 xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-3"
          >
            <li
              v-for="tag in getHashTag"
              :key="tag"
              class="min-w-20 bg-white rounded-lg border m-0.5"
            >
              <base-button class="w-full h-full p-2">
                <p class="font-medium text-left">
                  <span class="text-lg font-bold mr-0.5">#</span>
                  {{ tag }}
                </p>
              </base-button>
            </li>
          </ul>
        </div>
      </div>
      <p class="text-right text-sm font-medium mt-3">More #Hashtag</p>
    </div>

    <div class="container w-3/4 mx-auto mt-16">
      <div id="hotArticle" class="mb-6">
        <h2 class="text-2xl font-medium">Hot Article</h2>
      </div>
      <div id="newArticle">
        <div class="grid grid-cols-4 gap-4">
          <article-frame
            v-for="item in getArticle"
            :key="item.id"
            :articleContent="item"
          ></article-frame>
        </div>
      </div>
    </div>

    <div class="container w-3/4 mx-auto mt-16">
      <div id="hotArticle" class="mb-6">
        <h2 class="text-2xl font-medium">Last New Article</h2>
      </div>
      <div id="newArticle">
        <div class="grid grid-cols-4 gap-4">
          <article-frame
            v-for="item in getArticle"
            :key="item.id"
            :articleContent="item"
          ></article-frame>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCommunityStore } from "@/stores/Article/Store_articleCommunity";

import BaseSearchBar from "@/components/UI/BaseSearchBar.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
import ArticleFrame from "@/components/CommunityView/ArticleFrame.vue";

export default {
  components: { BaseSearchBar, BaseButton, ArticleFrame },
  setup() {
    const communityStore = useCommunityStore();

    return { communityStore };
  },
  computed: {
    getArticle() {
      return this.communityStore.getArticle;
    },
    getHashTag() {
      return this.communityStore.getHashTag;
    },
  },
};
</script>
