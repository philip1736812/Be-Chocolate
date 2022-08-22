<template>
  <div class="card_container" @mouseenter="hover" @mouseleave="mouseOut">
    <div class="content" :class="{ hover: isHover }">
      <p class="storeName">{{ product.storeName }}</p>
      <h2>{{ product.price }} Bath/kg.</h2>
      <p class="remaining">
        Remaining: <strong> {{ product.remaining }} kg.</strong>
      </p>

      <div class="addToCart" :class="{ buttonShow: isHover }">
        <button>
          <font-awesome-icon icon="fa-cart-arrow-down" />
          <font-awesome-icon v-if="false" icon="fa-plus" />
        </button>
        <p v-if="false" class="cart">In Cart: <strong> 1 kg.</strong></p>
      </div>
    </div>
    <div class="picture">
      <p>IMG</p>
      <p>IMG</p>
      <p>IMG</p>
      <p>IMG</p>
      <p>IMG</p>
      <p class="sold"><strong>Sold:</strong> {{ product.soldCount }} time</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      isHover: false,
    };
  },
  methods: {
    hover() {
      this.isHover = true;
    },
    mouseOut() {
      this.isHover = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.card_container {
  display: grid;
  grid-template-columns: 0.5fr 1fr;

  max-width: 963px;
  width: 75%;

  border: 1px solid #efefef;
  background: #f6f6f6;
  border-radius: 10px;
  margin: 15px auto;
  padding: 17px 44px;

  .content {
    transform: translateY(30px);
    transition: all 0.25s ease-in-out;

    padding-right: 1rem;
    & > * {
      color: #444444;
    }

    &.hover {
      transform: translateY(0px);
    }

    p.storeName {
      font-size: 23px;
      margin: 0 0 7px 0;
    }

    h2 {
      font-size: 34px;
      font-weight: 700px;
      margin-bottom: 5px;
    }

    p.remaining {
      font-size: 18px;
      font-weight: 400;
      margin-bottom: 26px;
    }

    .addToCart {
      display: flex;
      align-items: center;

      transition: all 0.25s ease-in-out;
      opacity: 0;

      &.buttonShow {
        opacity: 1;
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
          background: #7979799a;
          color: #fff;
        }
      }
      p.cart {
        font-size: 25px;
        margin: 0 0 0 1rem;
      }
    }
  }

  .picture {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-left: 1rem;

    p.sold {
      position: absolute;
      bottom: 0;
      right: 0;

      font-size: 17px;
    }
  }
}
</style>
