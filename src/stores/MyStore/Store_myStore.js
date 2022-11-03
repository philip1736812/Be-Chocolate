import { defineStore } from "pinia";
import { useProductStore } from "../../stores/ProductItems/Store_product";
import { useIndexStore } from "../Store_index";
import { reactive, computed } from "vue";
import axios from "axios";

export const useMyStore = defineStore("myStore", () => {
  const myStoreName = "CocoaLaLa Craft To Bar";
  const productItems = useProductStore();
  const indexStore = useIndexStore();

  // Generate inventory from store keys
  let inventory = reactive({});
  for (const value of Object.keys(productItems.allProducts)) {
    inventory[value] = [];
  }

  // Load inventory from Firebase
  const loadInventoryFromFirebase = async () => {
    try {
      if (!indexStore.getUserInfo) return;
      const userId = indexStore.getUserInfo.userId;
      const token = indexStore.getUserInfo.idToken;

      const loadRes = await axios.get(
        `https://be-chocolate-default-rtdb.asia-southeast1.firebasedatabase.app/user/${userId}/myInventoryItem.json?auth=${token}`
      );

      if (loadRes.statusText !== "OK")
        throw new Error(`cannot load inventory, please try later!`);
      const { data } = await loadRes;

      inventory = reactive({
        ...data.myInventoryItem,
      });
    } catch (err) {
      console.warn(err.message);
    }
  };

  // Update inventory to Firebase
  const updateInventoryToFirebase = async () => {
    try {
      const updateRes = await axios.put(
        `https://be-chocolate-default-rtdb.asia-southeast1.firebasedatabase.app/user/${userId}/myInventoryItem.json?auth=${token}`,
        {
          myInventoryItem: inventory,
        }
      );

      if (!updateRes.statusText !== "OK")
        throw new Error(`cannot update item in inventory, please try later.`);

      const { data } = updateRes;
      console.log(data);
    } catch (err) {
      console.warn(err.message);
    }
  };

  const updateInventory = (prod) => {
    const itemTarget = inventory[`${prod.type}Items`];
    const isOldItem = itemTarget.some((prodId) => prodId === prod.id);
    if (isOldItem) return;

    itemTarget.push(prod.id);
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
  };
});
