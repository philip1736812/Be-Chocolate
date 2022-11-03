import { defineStore } from "pinia";
import { useProductStore } from "../ProductItems/Store_product";

export const useCraftChocolateStore = defineStore({
  id: "craftChocolateStore",
  state() {
    return {
      craftHeaderPic: [],
      craftChocolateProduct: [],
    };
  },

  getters: {
    getStoreProduct(state) {
      return state.craftChocolateProduct;
    },
  },

  actions: {
    // cannot load
    async genHeaderPic() {
      const productItems = useProductStore();

      const loadedItem = await productItems.loadProductFromFirebase();
      this.craftChocolateProduct = loadedItem.craftChocolateItems;

      let pic = [];
      this.craftHeaderPic = this.craftChocolateProduct.forEach((prod) => {
        prod.picUrl.forEach((picUrl) => {
          pic.unshift(picUrl);
        });
      });

      this.craftHeaderPic = [...pic];
    },
    async loadProductFromStore() {
      const productItems = useProductStore();

      const loadedItem = await productItems.loadProductFromFirebase();
      this.craftChocolateProduct = loadedItem.craftChocolateItems;
    },
  },
});
