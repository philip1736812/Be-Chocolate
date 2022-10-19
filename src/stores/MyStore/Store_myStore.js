import { defineStore } from "pinia";

export const useMyStore = defineStore("myStore", () => {
  const myStoreName = "CocoaLaLa Craft To Bar";

  const inventory = {
    cacaoPodsItems: [548125478563219],
    chocolatePlateItems: [612478541236548],
    cacaoBeanItems: [875315624895236],
    chocolateBarItems: [567841296523015, 412549632589415],
  };

  return { myStoreName, inventory };
});
