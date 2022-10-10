import { defineStore } from "pinia";
import axios from "axios";

import { useCraftChocolateStore } from "../CraftChocolate/Store_craftChocolate";

export const useCommentsAndReviewStore = defineStore({
  id: "commentAndReviewStore",
  state() {
    return {
      comments: [],
    };
  },

  actions: {
    async loadComment() {
      const craftChocolateStore = useCraftChocolateStore();
      const idMockUp = craftChocolateStore.craftChocolateProduct.map(
        (item) => item.id
      );

      // get Mockup JSON Comments
      const commentsRes = await axios.get(
        `https://jsonplaceholder.typicode.com/comments`
      );

      const res = await commentsRes;
      const { data } = res;

      const newResComment = data
        .filter((item) => item.postId <= idMockUp.length)
        .map((item) => {
          const newPostId = (item.postId = idMockUp[item.postId - 1]);
          return {
            ...item,
            postId: newPostId,
            rating: {
              ratingStar: Math.floor(Math.random() * 10) + 1,
            },
          };
        });

      this.comments = newResComment;
    },
  },
});
