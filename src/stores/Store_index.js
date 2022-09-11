import { defineStore } from "pinia";

export const useProductStore = defineStore({
  id: "productItems",
  state() {
    return {
      cacaoPodsItems: [
        {
          id: Math.trunc(Math.random() * (999999 - 100000) + 100000),
          storeName: "Lala Chocolate",
          type: "cacaoPods",
          price: 150,
          remaining: 75,
          soldCount: 1523,
        },
        {
          id: Math.trunc(Math.random() * (999999 - 100000) + 100000),
          storeName: "Cherubin Chocolate Cafe",
          type: "cacaoPods",
          price: 154,
          remaining: 40,
          soldCount: 750,
        },
        {
          id: Math.trunc(Math.random() * (999999 - 100000) + 100000),
          storeName: "Bake Bake",
          type: "cacaoPods",
          price: 180,
          remaining: 150,
          soldCount: 200,
        },
        {
          id: Math.trunc(Math.random() * (999999 - 100000) + 100000),
          storeName: "Sweety Secret",
          type: "cacaoPods",
          price: 148,
          remaining: 10,
          soldCount: 1950,
        },
      ],
    };
  },
});
