<template>
  <div
    class="addToCart"
    :class="{
      buttonShow: isHover,
      btnSelected: selected_prod && qty_thisItem >= 1,
      selectedItem: selected_prod,
    }"
  >
    <transition name="minusBtn" mode="out-in">
      <button
        v-if="selected_prod && qty_thisItem >= 1"
        @click="$emit('deleteProd')"
      >
        <font-awesome-icon icon="fa-minus" />
      </button>
    </transition>

    <transition name="qty" mode="out-in">
      <p
        v-if="selected_prod && qty_thisItem >= 1"
        class="qtyProduct"
        :class="{ brightText: textBrightMode }"
      >
        {{ qty_thisItem }} kg
      </p>
    </transition>

    <transition name="addCart" mode="out-in">
      <button
        @click="selectedItemEmit"
        v-if="
          !selected_prod || qty_thisItem === 0 || qty_thisItem === undefined
        "
      >
        <font-awesome-icon icon="fa-cart-arrow-down" />
      </button>

      <button v-else @click="selectedItemEmit">
        <font-awesome-icon icon="fa-plus" />
      </button>
    </transition>
  </div>
</template>

<script>
import { useIndexStore } from "../../stores/Store_index";

export default {
  props: {
    qty_thisItem: {
      type: null,
      required: true,
    },
    isHover: {
      type: Boolean,
      default: true,
    },
    selected_prod: {
      type: Boolean,
      required: true,
      default: false,
    },
    textBrightMode: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup() {
    const indexStore = useIndexStore();

    return { indexStore };
  },
  emits: ["selectedItem", "deleteProd"],
  computed: {
    isAuthentication() {
      return this.indexStore.isAuthentication;
    },
  },
  methods: {
    selectedItemEmit() {
      if (!this.isAuthentication) {
        this.$router.replace({ name: "signIn" });
        return;
      }
      this.$emit("selectedItem");
    },
  },
};
</script>

<style lang="scss" scoped>
.addToCart {
  max-width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  transition: all 0.25s ease-in-out;
  opacity: 0;

  &.buttonShow {
    opacity: 1;
  }

  &.btnSelected {
    opacity: 1;

    button {
      width: 35px;

      background: rgb(249 115 22);
      color: #fff;
      border: none;
    }
  }

  .qtyProduct {
    font-size: 20px;
    font-weight: bold;
    margin: 0 1.4rem;
  }

  .brightText {
    color: #fff;
  }

  button {
    width: 100%;
    height: 35px;
    border-radius: 10px;
    font-size: 20px;
    background: #fafafa;
    border: 1px solid #444444;
    cursor: pointer;
    transition: all 0.25s ease-in-out;

    &:hover {
      background: rgb(249 115 22);
      border: none;
      color: #fff;
    }

    &:active {
      background: rgb(194 65 12);
      border: none;
      color: #fff;
    }
  }
  p.cart {
    font-size: 20px;
    margin: 0 0 0 1rem;
  }
}

.minusBtn-enter-active,
.qty-enter-active,
.addCart-enter-active,
.addedCart-enter-active {
  animation: scale 0.25s ease-in;
}

.minusBtn-leave-active,
.qty-leave-active,
.addCart-leave-active,
.addedCart-leave-active {
  animation: scale 0.25s ease-out reverse;
}

@keyframes scale {
  0% {
    transform: scale(0);
  }

  85% {
    transform: scale(1.06);
  }

  100% {
    transform: scale(1);
  }
}
</style>
