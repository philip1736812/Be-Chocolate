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
        unit: "kg",
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
        id: 548125478563219,
        storeName: "CocoaLaLa Craft To Bar",
        type: "cacaoPods",
        price: 151,
        unit: "kg",
        remaining: 35,
        soldCount: 1112,
        picUrl: [
          "https://cdn.shopify.com/s/files/1/0447/0453/articles/Aduna_Super-Cacao_Pod_tree_bfbbcdc1-502c-4b62-a2bd-e56529f41947.jpg?v=1578334469",
          "https://img.theculturetrip.com/wp-content/uploads/2018/05/cacao.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbD31hdMrFmwPEp7qvAynCXIzjn_XhJb-Fgetj07Ko_q2WZAadiKO2Ufp3uKEzRwJUEg8&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuTgPSiOM08zyZKyArJ-FpR23miSsn4hVZFWQ3pHW3t91BYFqAMV16Ko4_2oxwRFuYzME&usqp=CAU",
        ],
      },
      {
        id: 152365214589652,
        storeName: "Cherubin Chocolate Cafe",
        type: "cacaoPods",
        price: 154,
        unit: "kg",
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
        unit: "kg",
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
        unit: "kg",
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
        unit: "kg",
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
    chocolatePlateItems: [
      {
        id: 612478541236548,
        storeName: "CocoaLaLa Craft To Bar",
        type: "chocolatePlate",
        price: 156,
        unit: "kg",
        remaining: 50,
        soldCount: 2542,
        picUrl: [
          "https://homemadehooplah.com/wp-content/uploads/2021/05/chocolate-truffles-1-1200-700x1048.jpg",
          "https://www.scotchandscones.com/wp-content/uploads/2018/06/temper-chocolate-dipped-treats-square.jpeg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSePXjJlWZEDvEpHz1HmOPCM1U8FFG2hNacpQfjXE40lKRSQ-Qd5hMN2p_E3AtlwzDH7II&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSp-d-oRVP6fEQyRFqFoB_ouX45v4Xaf5T0A&usqp=CAU",
        ],
      },
    ],
    cacaoBeanItems: [
      {
        id: 875315624895236,
        storeName: "CocoaLaLa Craft To Bar",
        type: "cacaoBean",
        price: 175,
        unit: "kg",
        remaining: 150,
        soldCount: 785,
        picUrl: [
          "https://cdn.britannica.com/82/230782-050-120FFCA0/Woman-holding-cocoa-beans-in-her-hands.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMMYX6Y01lTTXK2AbxjdaHdfp2ek9l-Ba5qyPZewmwGEhLVp-uyObcRqnn_HgUjXmcrqQ&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTttyn7NmskrvFj5wqRAc95rOqunok8ZqnUcw&usqp=CAU",
          "https://i.insider.com/591b5d7514429326228b5b7b?width=1000&format=jpeg&auto=webp",
        ],
      },
    ],
    cocoaPowdersItems: [],
    cocoaButterItems: [],
    chocolateItems: [],
    chocolateBarItems: [...craftChocolateStore.craftChocolateProduct],
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
