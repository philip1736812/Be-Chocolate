<template>
  <div class="lg:container w-full xl:w-8/12 mx-auto my-12 text-slate-800">
    <section
      class="grid grid-cols-6 lg:grid-cols-7 bg-white px-8 py-4 rounded-lg text-sm text-stale-800"
    >
      <h2 class="col-span-2 lg:col-span-3">Products</h2>
      <p class="text-center">Unit Price</p>
      <p class="text-center">Quantity</p>
      <p class="text-center">Total Price</p>
      <p class="text-center">Actions</p>
    </section>

    <div class="flex flex-col space-y-4 divide-y mb-32 divide-slate-200">
      <transition-group name="cartList" mode="out-in">
        <item-in-cart
          v-for="item in getCartItem"
          :itemInCart="item"
          :key="item.id"
          @clickSelected="clickSelected"
        ></item-in-cart>
      </transition-group>
    </div>

    <transition name="move-in-out" mode="out-in">
      <div
        v-if="(newCartArr.length -= 0)"
        class="fixed w-full h-28 xl:w-10/12 mx-auto bottom-0 right-1/2 translate-x-1/2 bg-white rounded-lg shadow-md p-4 flex items-center"
      >
        <div class="flex flex-1 items-center">
          <h2 class="mr-6">
            <span class="inline mr-2"><font-awesome-icon icon="fa-tag" /></span>
            Platform Voucher:
          </h2>
          <base-button
            @click="toggleCodeVoucher"
            class="text-sky-600 hover:text-sky-800 border-dashed border-sky-600 hover:border-sky-900 transition-all rounded-sm border px-3 py-1"
            >Select Or Enter Code</base-button
          >
        </div>
        <div class="flex flex-row items-center">
          <h2 class="mr-6 text-lg">
            Total Selected
            <span class="font-bold text-red-700"
              >({{ newCartArr.length }})</span
            >
            :<span class="ml-6">{{ getTotalPrice }}</span>
          </h2>
          <base-button link :to="{ name: 'checkOutCart' }" mode="mainBtn">
            Check Out
          </base-button>
        </div>
      </div>
    </transition>

    <teleport to="body">
      <transition name="fade" mode="out-in">
        <div v-if="isActiveCodeVoucherView">
          <div>
            <code-voucher-view
              @closeCodeVoucher="closeCodeVoucher"
            ></code-voucher-view>
          </div>
          <div
            @click="closeCodeVoucher"
            class="fixed z-40 right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 w-full h-full overlay bg-black opacity-20"
          ></div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script>
import { useIndexStore } from "@/stores/Store_index";
import { userCartList } from "../../stores/Cart/Cart_items";
import itemInCart from "../../components/CheckOut/ItemInCart.vue";
import BaseButton from "../../components/UI/BaseButton.vue";
import { numberFormat } from "../../components/hooks/UseNumberFormat";
import CodeVoucherView from "./CodeVoucherView.vue";

export default {
  components: {
    itemInCart,
    BaseButton,
    CodeVoucherView,
  },
  setup() {
    const indexStore = useIndexStore();
    const cartList = userCartList();

    return { indexStore, cartList };
  },
  data() {
    return {
      notSelectedItems: [],
      newCartArr: null,
      isActiveCodeVoucherView: false,
    };
  },
  mounted() {
    this.indexStore.isActiveCartList = false;
  },
  computed: {
    getCartItem() {
      this.newCartArr = this.cartList.itemInCart.slice();
      return this.cartList.itemInCart;
    },
    getCartAmount() {
      return this.cartList.itemInCartAmount;
    },
    getTotalPrice() {
      const newCart =
        this.notSelectedItems.length <= 0
          ? this.cartList.cart.slice()
          : this.newCartArr;

      return numberFormat(
        newCart.length <= 0
          ? 0
          : newCart
              .map((item) => item.prodItem_qty * item.price)
              .reduce((prev, crr) => prev + crr)
      );
    },
  },
  methods: {
    clickSelected(isSelected, itemId) {
      const newCart = this.cartList.cart.slice();

      if (isSelected) {
        const filterCart = newCart.find((item) => item.id === itemId);
        this.newCartArr.push(filterCart);
        return;
      }

      this.newCartArr = this.newCartArr.filter((item) => item.id !== itemId);
      this.notSelectedItems.push(itemId);
    },
    toggleCodeVoucher() {
      this.isActiveCodeVoucherView = !this.isActiveCodeVoucherView;
    },
    closeCodeVoucher() {
      this.isActiveCodeVoucherView = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.move-in-out-enter-active {
  animation: move-in-out 0.35s ease-in;
}

.move-in-out-leave-active {
  animation: move-in-out 0.35s ease-out reverse;
}

@keyframes move-in-out {
  0% {
    transform: translate(50%, 300px);
  }

  85% {
    transform: translate(50%, -20px);
  }

  100% {
    transform: translate(50%, 0);
  }
}

.cartList-enter-active {
  position: absolute;
  animation: cartList 0.3s ease-in;
}

.cartList-leave-active {
  animation: cartList 0.3s ease-out reverse;
}

@keyframes cartList {
  0% {
    opacity: 0;
    transform: translateX(-200px);
  }

  85% {
    opacity: 1;
    transform: translateX(10px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fade-enter-active {
  animation: fade 0.15s ease-in;
}

.fade-leave-active {
  animation: fade 0.15s ease-out reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
