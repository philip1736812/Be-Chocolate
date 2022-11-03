import { defineStore } from "pinia";
import { useIndexStore } from "../Store_index";
import axios from "axios";

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
      return state.cart?.length || 0;
    },
    getUserInfo() {
      const indexStore = useIndexStore();
      return indexStore.getUserInfo;
    },
  },
  actions: {
    addToTheCart(prod) {
      const hasItemProd = this.itemInCart.find(
        (product) => product.id === prod.id
      );
      const item_qty = hasItemProd ? (hasItemProd.prodItem_qty += 1) : 1;

      const remainCart = this.itemInCart.slice();
      // add to cart
      if (!hasItemProd) {
        const dataToCart = {
          ...prod,
          prodItem_qty: item_qty,
        };

        remainCart.unshift(dataToCart);
        this.cart = remainCart;
        this.updateInFireBase();

        return;
      }

      // update qty
      const updateCart = {
        ...hasItemProd,
        prodItem_qty: item_qty,
      };
      const indexNewCart = remainCart.findIndex(
        (product) => product.id === prod.id
      );
      const newCart = remainCart.filter((product) => product.id !== prod.id);

      newCart.splice(indexNewCart, 0, updateCart);

      // newCart.unshift(updateCart);

      this.cart = newCart;
      this.updateInFireBase();
    },
    deleteFromCart(prodId, isAllDelete = false) {
      const inCart = this.cart.find((item) => item.id === prodId);

      if (isAllDelete) {
        // update qty
        const newCart = this.cart.filter((product) => product.id !== inCart.id);

        this.cart = newCart;
        this.updateInFireBase();
        return;
      }

      if (inCart.prodItem_qty >= 1) {
        inCart.prodItem_qty -= 1;

        if (inCart.prodItem_qty !== 0) return;

        // update qty
        const newCart = this.cart.filter((product) => product.id !== inCart.id);

        this.cart = newCart;
        this.updateInFireBase();
      }
    },

    async updateInFireBase() {
      if (!this.getUserInfo) return;
      const userId = this.getUserInfo.userId;
      const token = this.getUserInfo.idToken;

      try {
        const updateCart = await axios.put(
          `https://be-chocolate-default-rtdb.asia-southeast1.firebasedatabase.app/user/${userId}/cart.json?auth=${token}`,
          {
            cart: this.cart,
          }
        );

        if (updateCart.statusText !== "OK")
          throw new Error(
            `UpdateCartError: ${updateCart.message}` ||
              `Something wrong! Please try later!`
          );

        const res = await updateCart;
        const { cart } = res.data;

        this.cart = cart;
      } catch (err) {
        console.error(err.message);
      }
    },

    async loadCartData() {
      if (!this.getUserInfo) return;
      const userId = this.getUserInfo.userId;
      const token = this.getUserInfo.idToken;

      try {
        const updateCart = await axios.get(
          `https://be-chocolate-default-rtdb.asia-southeast1.firebasedatabase.app/user/${userId}/cart.json?auth=${token}`
        );

        if (updateCart.statusText !== "OK")
          throw new Error(
            `load cart error: ${updateCart.message}` ||
              `Something wrong! Please try later!`
          );

        const res = await updateCart;

        if (!res.data) return;

        const { cart } = res.data;

        this.cart = cart;
      } catch (err) {
        console.error(err.message);
      }
    },
  },
});
