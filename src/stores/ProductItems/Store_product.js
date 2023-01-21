import { defineStore } from "pinia";
import { useIndexStore } from "../Store_index";
import axios from "axios";

import { computed, ref, reactive } from "vue";

export const useProductStore = defineStore("productItems", () => {
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
    cacaoBean: [
      "https://img.freepik.com/premium-photo/cocoa-beans-cocoa-fruits-wooden_33736-3343.jpg?w=2000",
      "https://i0.wp.com/www.onegreenplanet.org/wp-content/uploads/2014/05/Where_Chocolate_Comes_From_Imagicity_218.jpg?fit=1280%2C857&ssl=1",
      "https://img.freepik.com/premium-photo/cacao-beans-cut-test-which-is-brown-color-cut-test-as-beans-are-cut-lengthwise-through-middle-examine-inside-bean_33736-3889.jpg?w=2000",
    ],
    cocoaPowders: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSErMfKtKAkPjFHJkkFvzLyZtHE8r3MPEeC5A&usqp=CAU",
      "https://5.imimg.com/data5/SELLER/Default/2021/3/VW/FI/LL/4538979/premium-cocoa-powder-1000x1000.jpeg",
      "https://images-cdn.welcomesoftware.com/Zz1hN2Y2YmVjNzkzYjUxMWViOWE0MjYxNGU4ZjU5ODQ0Yw==/Zz0zMGJhN2Q0MWU2MGMxMWVhODc3MjBlMTg5NWRmNWQxMQ%3D%3D.jpg?width=1366",
    ],
    cocoaButter: [
      "https://cdn.shopify.com/s/files/1/1035/6955/articles/new_IMAGE_2798x.jpg?v=1563394517",
      "https://www.markrinchocolate.com/wp-content/uploads/2021/03/cocoa-butter-9.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvWj8otHOBUyGo4m4DUiwiBdC3mZrgEI2rABOOpJAUCRyc-l6HaP4OSZIbxa3i0bKuviA&usqp=CAU",
    ],
    cacaoJuice: [
      "https://imageio.forbes.com/blogs-images/eshachhabra/files/2018/01/RepurposedPod_38426-1200x899.jpg?height=532&width=711&fit=bounds",
      "https://cdn.shopify.com/s/files/1/0976/5364/articles/Taste_-_May__29_of_36_1100x.jpg?v=1567973317",
      "https://w0.peakpx.com/wallpaper/701/391/HD-wallpaper-margarita-cocktail-tequila-orange-liqueur-lime-juice-salt-frozen-margarita-lime-cocktail-glass.jpg",
    ],
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

      return new Promise((resolve) => {
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
        const [key] = item;

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
