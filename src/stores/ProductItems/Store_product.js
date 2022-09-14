import { defineStore } from "pinia";
import { useCraftChocolateStore } from "../CraftChocolate/Store_craftChocolate";

import { computed, ref } from "vue";

export const useProductStore = defineStore("productItems", () => {
  const allProducts = {
    cacaoPodsItems: [
      {
        id: Math.trunc(Math.random() * (999999 - 100000) + 100000),
        storeName: "Lala Chocolate",
        type: "cacaoPods",
        price: 150,
        remaining: 75,
        soldCount: 1523,
        picUrl: [
          "http://drive.google.com/uc?export=view&id=1qy5eJcY7mx_d0R9M1t45Ad0g64-oHgFk",
          "http://drive.google.com/uc?export=view&id=1C1fpqACbRp34a63WXpv5Dn49ZzmDh53V",
          "http://drive.google.com/uc?export=view&id=1rzsUy1uht3MzfQAgyhvASDxNeCcRYJph",
          "http://drive.google.com/uc?export=view&id=1t3pBZCbIaTECaF_nXH4KrAB1zOg5dxGX",
        ],
      },
      {
        id: Math.trunc(Math.random() * (999999 - 100000) + 100000),
        storeName: "Cherubin Chocolate Cafe",
        type: "cacaoPods",
        price: 154,
        remaining: 40,
        soldCount: 750,
        picUrl: [
          "http://drive.google.com/uc?export=view&id=1qy5eJcY7mx_d0R9M1t45Ad0g64-oHgFk",
          "http://drive.google.com/uc?export=view&id=1C1fpqACbRp34a63WXpv5Dn49ZzmDh53V",
          "http://drive.google.com/uc?export=view&id=1rzsUy1uht3MzfQAgyhvASDxNeCcRYJph",
          "http://drive.google.com/uc?export=view&id=1t3pBZCbIaTECaF_nXH4KrAB1zOg5dxGX",
        ],
      },
      {
        id: Math.trunc(Math.random() * (999999 - 100000) + 100000),
        storeName: "Bake Bake",
        type: "cacaoPods",
        price: 180,
        remaining: 150,
        soldCount: 200,
        picUrl: [
          "http://drive.google.com/uc?export=view&id=1qy5eJcY7mx_d0R9M1t45Ad0g64-oHgFk",
          "http://drive.google.com/uc?export=view&id=1C1fpqACbRp34a63WXpv5Dn49ZzmDh53V",
          "http://drive.google.com/uc?export=view&id=1rzsUy1uht3MzfQAgyhvASDxNeCcRYJph",
          "http://drive.google.com/uc?export=view&id=1t3pBZCbIaTECaF_nXH4KrAB1zOg5dxGX",
        ],
      },
      {
        id: Math.trunc(Math.random() * (999999 - 100000) + 100000),
        storeName: "Sweety Secret",
        type: "cacaoPods",
        price: 148,
        remaining: 10,
        soldCount: 1950,
        picUrl: [
          "http://drive.google.com/uc?export=view&id=1qy5eJcY7mx_d0R9M1t45Ad0g64-oHgFk",
          "http://drive.google.com/uc?export=view&id=1C1fpqACbRp34a63WXpv5Dn49ZzmDh53V",
          "http://drive.google.com/uc?export=view&id=1rzsUy1uht3MzfQAgyhvASDxNeCcRYJph",
          "http://drive.google.com/uc?export=view&id=1t3pBZCbIaTECaF_nXH4KrAB1zOg5dxGX",
        ],
      },
    ],
  };
  const productSelectedFromNav = ref("");

  const getProduct = computed(() => {
    const nav =
      productSelectedFromNav.value == ""
        ? "cacaoPodsItems"
        : productSelectedFromNav.value + "Items";

    return allProducts[nav] && allProducts[nav].slice(0, 4);
  });

  const filterProduct = (name) => {
    productSelectedFromNav.value = name;
  };

  return { getProduct, filterProduct };
});
