import { defineStore } from "pinia";

export const userCartList = defineStore({
  id: "cartList",
  state() {
    return {
      cart: [],
    };
  },
  getters: {
    itemInCart(state) {
      return state.cart;
    },
    itemInCartAmount(state) {
      return state.cart.length;
    },
  },
  actions: {
    addToTheCart(payload) {
      this.cart = payload;
    },
  },
});
