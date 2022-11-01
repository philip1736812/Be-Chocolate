import { defineStore } from "pinia";
import { useProductStore } from "../../stores/ProductItems/Store_product";
import { reactive } from "vue";

export const useMyStore = defineStore("myStore", () => {
  const myStoreName = "CocoaLaLa Craft To Bar";
  const productItems = useProductStore();

  // Generate inventory from store keys
  let inventory = reactive({});
  for (const value of Object.keys(productItems.allProducts)) {
    inventory[value] = [];
  }

  inventory = {
    ...inventory,
    cacaoPodsItems: [548125478563219],
    chocolatePlateItems: [612478541236548],
    cacaoBeanItems: [875315624895236],
    craftChocolateItems: [567841296523015, 412549632589415],
  };

  const updateInventory = (prod) => {
    const itemTarget = inventory[`${prod.type}Items`];
    const isOldItem = itemTarget.some((prodId) => prodId === prod.id);
    if (isOldItem) return;

    itemTarget.push(prod.id);
  };

  return { myStoreName, inventory, updateInventory };
});
