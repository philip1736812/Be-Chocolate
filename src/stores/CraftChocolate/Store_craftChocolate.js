import { defineStore } from "pinia";

export const useCraftChocolateStore = defineStore({
  id: "craftChocolateStore",
  state() {
    return {
      craftChocolateProduct: [
        {
          id: Math.trunc(Math.random() * (999999 - 100000) + 100000),
          name: "Bad Ass Bar",
          storeName: "Xoconat",
          type: "CraftChocolate",
          price: 150,
          description:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at quaerat quidem doloremque ut vero voluptatem, earum consequuntur molestias ipsum, veritatis ea magni, perferendis sunt. Corrupti, quae earum. Omnis, enim.",
          pictureUrl:
            "http://drive.google.com/uc?export=view&id=1td1u1lr-8grAFGhRvMLPPu_FBbeaNyxs",
        },
        {
          id: Math.trunc(Math.random() * (999999 - 100000) + 100000),
          name: "Salty Nuts",
          storeName: "Pridi Cacoa Fevier",
          type: "CraftChocolate",
          price: 154,
          description:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at quaerat quidem doloremque ut vero voluptatem, earum consequuntur molestias ipsum, veritatis ea magni, perferendis sunt. Corrupti, quae earum. Omnis, enim.",
          pictureUrl:
            "http://drive.google.com/uc?export=view&id=1tCl1fThT0gsJz4ZVh27ibF4sygfgVpC2",
        },
        {
          id: Math.trunc(Math.random() * (999999 - 100000) + 100000),
          name: "Kan Vale Original",
          storeName: "Kan Vela",
          type: "CraftChocolate",
          price: 180,
          description:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at quaerat quidem doloremque ut vero voluptatem, earum consequuntur molestias ipsum, veritatis ea magni, perferendis sunt. Corrupti, quae earum. Omnis, enim.",
          pictureUrl:
            "http://drive.google.com/uc?export=view&id=1no9x1p3XcycZlzDgCjMgrxu5XMIdAti4",
        },
        {
          id: Math.trunc(Math.random() * (999999 - 100000) + 100000),
          name: "Paradai Pure Original",
          storeName: "Paradai",
          type: "CraftChocolate",
          price: 148,
          description:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at quaerat quidem doloremque ut vero voluptatem, earum consequuntur molestias ipsum, veritatis ea magni, perferendis sunt. Corrupti, quae earum. Omnis, enim.",
          pictureUrl:
            "http://drive.google.com/uc?export=view&id=1ZgAqch9nkI-DCCCpV8dq_UFRlYnp2uvN",
        },
      ],
    };
  },

  getters: {
    getStoreProduct(state) {
      return state.craftChocolateProduct;
    },
  },
});
