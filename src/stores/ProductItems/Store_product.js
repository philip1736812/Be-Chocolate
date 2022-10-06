import { defineStore } from "pinia";
import { useCraftChocolateStore } from "../CraftChocolate/Store_craftChocolate";

import { computed, ref } from "vue";

export const useProductStore = defineStore("productItems", () => {
  const craftChocolateStore = useCraftChocolateStore();

  const allProducts = {
    cacaoPodsItems: [
      {
        id: 152364785212535,
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
        id: 152365214589652,
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
        id: 124784125985632,
        storeName: "95 cacao cafe",
        type: "cacaoPods",
        price: 150,
        remaining: 60,
        soldCount: 350,
        picUrl: [
          "http://drive.google.com/uc?export=view&id=1qy5eJcY7mx_d0R9M1t45Ad0g64-oHgFk",
          "http://drive.google.com/uc?export=view&id=1C1fpqACbRp34a63WXpv5Dn49ZzmDh53V",
          "http://drive.google.com/uc?export=view&id=1rzsUy1uht3MzfQAgyhvASDxNeCcRYJph",
          "http://drive.google.com/uc?export=view&id=1t3pBZCbIaTECaF_nXH4KrAB1zOg5dxGX",
        ],
      },
      {
        id: 154826598712536,
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
        id: 985674125412369,
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
    // craftChocolateItems: craftChocolateStore.craftChocolateProduct,
    chocolatePlateItems: [],
    cacaoBeanItems: [],
    cocoaPowdersItems: [],
    cocoaButterItems: [],
    chocolateItems: [],
    chocolateBarItems: [],
  };

  const headerPic_productTypeList = {
    cacaoPods: [
      "http://drive.google.com/uc?export=view&id=1Qj8y3XsNEWnM-oVgEcxKmznVr1P91mES",
      "http://drive.google.com/uc?export=view&id=1IYgrseD6VDZ3WhrBO0ot6V_UBwwp_BGF",
      "http://drive.google.com/uc?export=view&id=12nXPwUZWorbCaI0m-Q88d-fV7LUkVXwp",
    ],

    chocolatePlate: [
      "http://drive.google.com/uc?export=view&id=1Qj8y3XsNEWnM-oVgEcxKmznVr1P91mES",
      "http://drive.google.com/uc?export=view&id=1IYgrseD6VDZ3WhrBO0ot6V_UBwwp_BGF",
      "http://drive.google.com/uc?export=view&id=12nXPwUZWorbCaI0m-Q88d-fV7LUkVXwp",
    ],
    cacaoBean: [],
    cocoaPowders: [],
    cocoaButter: [],
    chocolate: [],
    chocolateBar: [],

    craftChocolate: [
      "http://drive.google.com/uc?export=view&id=1Qj8y3XsNEWnM-oVgEcxKmznVr1P91mES",
      "http://drive.google.com/uc?export=view&id=1IYgrseD6VDZ3WhrBO0ot6V_UBwwp_BGF",
      "http://drive.google.com/uc?export=view&id=12nXPwUZWorbCaI0m-Q88d-fV7LUkVXwp",
    ],
  };

  const activeProductFromNav = ref("cacaoPodsItems");

  const activeProduct = (name) => {
    activeProductFromNav.value = name;
  };

  const getAllProductType = computed(() => {
    const nav =
      activeProductFromNav.value == ""
        ? "cacaoPodsItems"
        : activeProductFromNav.value;

    return allProducts[nav] && allProducts[nav];
  });

  // Next && Prev to change hot product view

  const crrProductIndex = ref(null);
  const next_prev_hotProduct = (mode) => {
    const allProduct = Object.keys(allProducts);

    const crrSelected = activeProductFromNav.value
      ? activeProductFromNav.value
      : "cacaoPodsItems";

    crrProductIndex.value = allProduct.findIndex((item) => {
      return item === crrSelected;
    });

    if (mode == "next") {
      crrProductIndex.value < allProduct.length - 1
        ? crrProductIndex.value++
        : (crrProductIndex.value = 0);
    } else {
      crrProductIndex.value > 0 &&
      crrProductIndex.value <= allProduct.length - 1
        ? crrProductIndex.value--
        : (crrProductIndex.value = 6);
    }

    activeProductFromNav.value = allProduct[crrProductIndex.value];
  };

  return {
    headerProduct: headerPic_productTypeList,
    allProducts,
    getAllProductType,
    activeProduct,
    activeProductFromNav,
    next_prev_hotProduct,
  };
});
