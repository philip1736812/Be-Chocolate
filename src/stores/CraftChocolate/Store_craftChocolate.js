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
        {
          id: Math.trunc(Math.random() * (999999 - 100000) + 100000),
          name: "Dark Soymilk",
          storeName: "ZORZAL",
          type: "CraftChocolate",
          price: 128,
          description:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at quaerat quidem doloremque ut vero voluptatem, earum consequuntur molestias ipsum, veritatis ea magni, perferendis sunt. Corrupti, quae earum. Omnis, enim.",
          pictureUrl:
            "https://cdn.shopify.com/s/files/1/0586/6740/1390/files/slowcocoa_original_milk_with_book_assortment_closeup_c2958a19-6ee2-4e27-96fb-626950eb5e28.jpg?v=1644961375",
        },
        {
          id: Math.trunc(Math.random() * (999999 - 100000) + 100000),
          name: "Organic Craft Chocolate",
          storeName: "Organic Union Republic",
          type: "CraftChocolate",
          price: 131,
          description:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at quaerat quidem doloremque ut vero voluptatem, earum consequuntur molestias ipsum, veritatis ea magni, perferendis sunt. Corrupti, quae earum. Omnis, enim.",
          pictureUrl:
            "https://helenathailand.co/wp-content/uploads/elementor/thumbs/CraftChoc07-ommxmxu1pksn8ah4h30g7ukaas6fhbk1oqs3bzo70o.jpg",
        },
        {
          id: Math.trunc(Math.random() * (999999 - 100000) + 100000),
          name: "Green & Black's Organic Dark Chocolate 70%",
          storeName: "Ethical Cocoa",
          type: "CraftChocolate",
          price: 142,
          description:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at quaerat quidem doloremque ut vero voluptatem, earum consequuntur molestias ipsum, veritatis ea magni, perferendis sunt. Corrupti, quae earum. Omnis, enim.",
          pictureUrl:
            "https://cf.shopee.co.th/file/6bf75b560a5c65c7695228c29e465da7",
        },
        {
          id: Math.trunc(Math.random() * (999999 - 100000) + 100000),
          name: "Single Origin Ecuador",
          storeName: "Hemisphere Craft Chocolate",
          type: "CraftChocolate",
          price: 146,
          description:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at quaerat quidem doloremque ut vero voluptatem, earum consequuntur molestias ipsum, veritatis ea magni, perferendis sunt. Corrupti, quae earum. Omnis, enim.",
          pictureUrl:
            "https://cdn.shopify.com/s/files/1/0012/5825/8532/products/IMG_8686_1024x1024@2x.jpg?v=1616683059",
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
