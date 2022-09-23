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
        return;
      }

      // update qty
      const updateCart = {
        ...hasItemProd,
        prodItem_qty: item_qty,
      };
      const newCart = remainCart.filter((product) => product.id !== prod.id);

      newCart.unshift(updateCart);

      this.cart = newCart;
    },
    deleteFromCart(prodId) {
      const inCart = this.cart.find((item) => item.id === prodId);
      if (inCart.prodItem_qty >= 1) {
        inCart.prodItem_qty -= 1;

        if (inCart.prodItem_qty !== 0) return;

        // update qty
        const newCart = this.cart.filter((product) => product.id !== inCart.id);

        this.cart = newCart;
      }
    },
  },
});
