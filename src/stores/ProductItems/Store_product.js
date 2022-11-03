import { defineStore } from "pinia";
import { useCraftChocolateStore } from "../CraftChocolate/Store_craftChocolate";
import { useIndexStore } from "../Store_index";
import axios from "axios";

import { computed, ref, reactive, isReactive } from "vue";

export const useProductStore = defineStore("productItems", () => {
  const craftChocolateStore = useCraftChocolateStore();
  const indexStore = useIndexStore();

  let allProducts = reactive({});

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
    cacaoJuice: [],
    craftChocolate: [
      "http://drive.google.com/uc?export=view&id=1Qj8y3XsNEWnM-oVgEcxKmznVr1P91mES",
      "http://drive.google.com/uc?export=view&id=1IYgrseD6VDZ3WhrBO0ot6V_UBwwp_BGF",
      "http://drive.google.com/uc?export=view&id=12nXPwUZWorbCaI0m-Q88d-fV7LUkVXwp",
    ],
  };

  // Load Product from Firebase
  const loadProductFromFirebase = async () => {
    try {
      const loadRes = await axios.get(
        `https://be-chocolate-default-rtdb.asia-southeast1.firebasedatabase.app/all_products.json`
      );

      if (loadRes.statusText !== "OK")
        throw new Error(`Cannot update item! please try later.`);

      const { data } = await loadRes;
      Object.entries(data.allProducts).forEach((item) => {
        const [name, value] = item;

        allProducts[name] = value;
      });

      return new Promise((resolve, reject) => {
        if (Object.keys(allProducts).length > 1) resolve(allProducts);
      });
    } catch (err) {
      indexStore.errMessage = err.message;
    }
  };

  // Update Product to Firebase
  const updateProductToFirebase = async () => {
    const token = indexStore.getUserInfo.idToken;

    try {
      const updateRes = await axios.put(
        `https://be-chocolate-default-rtdb.asia-southeast1.firebasedatabase.app/all_products.json?auth=${token}`,
        {
          allProducts,
        }
      );

      if (updateRes.statusText !== "OK")
        throw new Error(`Cannot update item! please try later.`);

      const { data } = await updateRes;

      Object.entries(allProducts).forEach((item) => {
        const [key, value] = item;

        allProducts[key] = data.allProducts[key];
      });
    } catch (err) {
      indexStore.errMessage = err.message;
    }
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

  // Action Edit Items in Inventory
  const editItemsStore = (prod) => {
    const oldItem = allProducts[`${prod.type}Items`]?.find(
      (item) => item.id === prod.id
    );

    let itemReplaceWithNewData;

    if (prod.type !== "craftChocolate") {
      itemReplaceWithNewData = {
        ...oldItem,
        id: prod.id,
        storeName: prod.storeName,
        type: prod.type,
        price: prod.price,
        unit: "kg",
        remaining: prod.remaining,
        soldCount: prod.soldCount,
        picUrl: prod.picUrl,
      };
    } else {
      itemReplaceWithNewData = {
        ...oldItem,
        id: prod.id,
        name: prod.name,
        storeName: prod.storeName,
        type: prod.type,
        price: prod.price,
        unit: "piece",
        rating: {
          ratingStar: 0,
          vote: 0,
        },
        description: prod.description,
        picUrl: prod.picUrl,
      };
    }

    // add new Product
    if (!oldItem) {
      allProducts[`${prod.type}Items`].push(itemReplaceWithNewData);

      // update data product in firebase
      updateProductToFirebase();

      return;
    }

    // Edit item with new Data
    const replaceIndex = allProducts[`${prod.type}Items`].findIndex(
      (item) => item.id === prod.id
    );
    allProducts[`${prod.type}Items`].splice(
      replaceIndex,
      1,
      itemReplaceWithNewData
    );

    // update data product in firebase
    updateProductToFirebase();
  };

  const getAllProduct = computed(() => {
    return allProducts;
  });

  return {
    headerProduct: headerPic_productTypeList,
    allProducts,
    getAllProductType,
    activeProduct,
    activeProductFromNav,
    next_prev_hotProduct,
    editItemsStore,
    loadProductFromFirebase,
    getAllProduct,
  };
});
