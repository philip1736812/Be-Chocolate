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
      <p v-if="selected_prod && qty_thisItem >= 1" class="qtyProduct">
        {{ qty_thisItem }} kg
      </p>
    </transition>

    <transition name="addCart" mode="out-in">
      <button
        @click="$emit('selectedItem')"
        v-if="
          !selected_prod || qty_thisItem === 0 || qty_thisItem === undefined
        "
      >
        <font-awesome-icon icon="fa-cart-arrow-down" />
      </button>

      <button v-else @click="$emit('selectedItem')">
        <font-awesome-icon icon="fa-plus" />
      </button>
    </transition>
  </div>
</template>

<script>
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
  },
};
</script>

<style lang="scss" scoped>
.addToCart {
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
      width: 45px;

      background: #d8612f;
      color: #fff;
      border: none;
    }
  }

  .qtyProduct {
    font-size: 23px;
    font-weight: bold;
    margin: 0 1.4rem;
  }

  button {
    width: 100%;
    height: 45px;
    border-radius: 10px;
    font-size: 25px;
    background: #fafafa;
    border: 1px solid #444444;
    cursor: pointer;
    transition: all 0.25s ease-in-out;

    &:hover {
      background: #d8612f;
      border: none;
      color: #fff;
    }
  }
  p.cart {
    font-size: 25px;
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
