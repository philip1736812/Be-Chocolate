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
          rating: {
            ratingStar: 10,
            vote: 35400,
          },
          description:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at quaerat quidem doloremque ut vero voluptatem, earum consequuntur molestias ipsum, veritatis ea magni, perferendis sunt. Corrupti, quae earum. Omnis, enim.",
          pictureUrl: [
            "https://bk.asia-city.com/sites/default/files/u143767/clean.jpg",
            "https://image.springnews.co.th/uploads/images/contents/w1024/2022/07/ynPWvXv4amxEujSBoenx.webp",
          ],
        },
        {
          id: Math.trunc(Math.random() * (999999 - 100000) + 100000),
          name: "Salty Nuts",
          storeName: "Pridi Cacoa Fevier",
          type: "CraftChocolate",
          price: 154,
          rating: {
            ratingStar: 9.1,
            vote: 34100,
          },
          description:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at quaerat quidem doloremque ut vero voluptatem, earum consequuntur molestias ipsum, veritatis ea magni, perferendis sunt. Corrupti, quae earum. Omnis, enim.",
          pictureUrl: [
            "http://www.masalathai.com/2015/wp-content/uploads/2020/11/Xoconat-3.jpg",
            "https://p16.topbuzzcdn.com/img/tos-alisg-v-a3e477-sg/5664a02fa7ed4be590d5e0dc0976e439~0x1600.jpg",
          ],
        },
        {
          id: Math.trunc(Math.random() * (999999 - 100000) + 100000),
          name: "Kan Vale Original",
          storeName: "Kan Vela",
          type: "CraftChocolate",
          price: 180,
          rating: {
            ratingStar: 10,
            vote: 36800,
          },
          description:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at quaerat quidem doloremque ut vero voluptatem, earum consequuntur molestias ipsum, veritatis ea magni, perferendis sunt. Corrupti, quae earum. Omnis, enim.",
          pictureUrl: [
            "https://thestandard.co/wp-content/uploads/2022/02/Kanvela-4.jpeg?x42168",
            "https://thestandard.co/wp-content/uploads/2022/02/Kanvela_COVER.jpg",
          ],
        },
        {
          id: Math.trunc(Math.random() * (999999 - 100000) + 100000),
          name: "Paradai Pure Original",
          storeName: "Paradai",
          type: "CraftChocolate",
          price: 148,
          rating: {
            ratingStar: 8.4,
            vote: 25000,
          },
          description:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at quaerat quidem doloremque ut vero voluptatem, earum consequuntur molestias ipsum, veritatis ea magni, perferendis sunt. Corrupti, quae earum. Omnis, enim.",
          pictureUrl: [
            "https://th-test-11.slatic.net/p/f902e5cdffd13475235fc07bf2a1466a.jpg",
            "https://cf.shopee.co.th/file/e7fff6db203b7b6ed2a1c65e745d9fe6",
          ],
        },
        {
          id: Math.trunc(Math.random() * (999999 - 100000) + 100000),
          name: "Dark Soymilk",
          storeName: "ZORZAL",
          type: "CraftChocolate",
          price: 128,
          rating: {
            ratingStar: 3.3,
            vote: 12000,
          },
          description:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at quaerat quidem doloremque ut vero voluptatem, earum consequuntur molestias ipsum, veritatis ea magni, perferendis sunt. Corrupti, quae earum. Omnis, enim.",
          pictureUrl: [
            "https://cdn.shopify.com/s/files/1/0586/6740/1390/files/slowcocoa_original_milk_with_book_assortment_closeup_c2958a19-6ee2-4e27-96fb-626950eb5e28.jpg?v=1644961375",
          ],
        },
        {
          id: Math.trunc(Math.random() * (999999 - 100000) + 100000),
          name: "Organic Craft Chocolate",
          storeName: "Organic Union Republic",
          type: "CraftChocolate",
          price: 131,
          rating: {
            ratingStar: 0,
            vote: 0,
          },
          description:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at quaerat quidem doloremque ut vero voluptatem, earum consequuntur molestias ipsum, veritatis ea magni, perferendis sunt. Corrupti, quae earum. Omnis, enim.",
          pictureUrl: [
            "https://helenathailand.co/wp-content/uploads/elementor/thumbs/CraftChoc07-ommxmxu1pksn8ah4h30g7ukaas6fhbk1oqs3bzo70o.jpg",
          ],
        },
        {
          id: Math.trunc(Math.random() * (999999 - 100000) + 100000),
          name: "Green & Black's Organic Dark Chocolate 70%",
          storeName: "Ethical Cocoa",
          type: "CraftChocolate",
          price: 142,
          rating: {
            ratingStar: 7.3,
            vote: 28605,
          },
          description:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at quaerat quidem doloremque ut vero voluptatem, earum consequuntur molestias ipsum, veritatis ea magni, perferendis sunt. Corrupti, quae earum. Omnis, enim.",
          pictureUrl: [
            "https://cf.shopee.co.th/file/6bf75b560a5c65c7695228c29e465da7",
            "https://www.tastingtable.com/img/gallery/can-you-get-sick-from-eating-2-year-old-chocolate/l-intro-1654198813.jpg",
          ],
        },
        {
          id: Math.trunc(Math.random() * (999999 - 100000) + 100000),
          name: "Single Origin Ecuador",
          storeName: "Hemisphere Craft Chocolate",
          type: "CraftChocolate",
          price: 146,
          rating: {
            ratingStar: 2.8,
            vote: 1065,
          },
          description:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at quaerat quidem doloremque ut vero voluptatem, earum consequuntur molestias ipsum, veritatis ea magni, perferendis sunt. Corrupti, quae earum. Omnis, enim.",
          pictureUrl: [
            "https://cdn.shopify.com/s/files/1/0012/5825/8532/products/IMG_8686_1024x1024@2x.jpg?v=1616683059",
          ],
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
