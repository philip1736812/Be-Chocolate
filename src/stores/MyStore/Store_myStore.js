import { defineStore } from "pinia";
import { useProductStore } from "../../stores/ProductItems/Store_product";
import { useIndexStore } from "../Store_index";
import { reactive, computed, ref } from "vue";
import axios from "axios";

export const useMyStore = defineStore("myStore", () => {
  const myStoreName = ref("");
  const productItems = useProductStore();
  const indexStore = useIndexStore();

  const userId = ref(null);
  const token = ref(null);

  // Load Store Name
  const loadStoreName = async () => {
    userId.value = indexStore.getUserInfo.userId;
    token.value = indexStore.getUserInfo.idToken;

    const loadNameRes = await axios.get(
      `https://be-chocolate-default-rtdb.asia-southeast1.firebasedatabase.app/user/${userId.value}/myStoreName.json?auth=${token.value}`
    );

    const { data } = await loadNameRes;
    myStoreName.value = data;
  };

  // Generate inventory from store keys
  let inventory = reactive({});
  for (const value of Object.keys(productItems.allProducts)) {
    inventory[value] = [];
  }

  // Load inventory from Firebase
  const loadInventoryFromFirebase = async () => {
    try {
      if (!indexStore.getUserInfo) return;
      userId.value = indexStore.getUserInfo.userId;
      token.value = indexStore.getUserInfo.idToken;

      const loadRes = await axios.get(
        `https://be-chocolate-default-rtdb.asia-southeast1.firebasedatabase.app/user/${userId.value}/myInventoryItem.json?auth=${token.value}`
      );

      if (loadRes.statusText !== "OK")
        throw new Error(`cannot load inventory, please try later!`);
      const { data } = await loadRes;

      for (const value of Object.keys(productItems.getAllProduct)) {
        inventory[value] = data.myInventoryItem[value] || [];
      }
    } catch (err) {
      console.warn(err.message);
    }
  };

  // Update inventory to Firebase
  const updateInventoryToFirebase = async () => {
    try {
      const updateRes = await axios.put(
        `https://be-chocolate-default-rtdb.asia-southeast1.firebasedatabase.app/user/${userId.value}/myInventoryItem.json?auth=${token.value}`,
        {
          myInventoryItem: inventory,
        }
      );

      const res = await updateRes;
      if (res.statusText !== "OK")
        throw new Error(`cannot update item in inventory, please try later.`);

      const { data } = res;
      for (const value of Object.entries(data.myInventoryItem)) {
        const [name, val] = value;
        inventory[name] = val;
      }
    } catch (err) {
      console.warn(err.message);
    }
  };

  const updateInventory = (prod) => {
    const itemTarget = ref(inventory[`${prod.type}Items`]);
    const isOldItem = itemTarget.value?.some((prodId) => prodId === prod.id);
    if (isOldItem) return;

    // mockup create store simple ---> need user click open store
    if (!itemTarget.value) {
      for (const value of Object.keys(productItems.allProducts)) {
        inventory[value] = [];
      }

      itemTarget.value = inventory[`${prod.type}Items`];
    }

    itemTarget.value.push(prod.id);
    updateInventoryToFirebase();
  };

  const getAllItemInventory = computed(() => {
    return inventory;
  });

  return {
    myStoreName,
    inventory,
    updateInventory,
    loadInventoryFromFirebase,
    getAllItemInventory,
    loadStoreName,
  };
});
