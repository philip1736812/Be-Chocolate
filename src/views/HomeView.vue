<template>
  <header>
    <h2>Find Your Ingredient.</h2>
    <form action="">
      <input type="text" placeholder="Craft Chocolate..." />
      <button>
        <font-awesome-icon class="searchIcon" icon="fa-magnifying-glass" />
      </button>
      <p><strong>Ex.</strong> Chocolate bar, Coco nib</p>
    </form>
  </header>
  <main>
    <div class="itemNav_container">
      <base-card-nav
        v-for="prod in productsNav"
        :key="prod.name"
        :navName="prod.name"
        :urlNav="prod.pictureUrl"
      ></base-card-nav>
    </div>

    <section class="showHotItem">
      <base-product-card
        v-for="item in cacaoPodsItems"
        :key="item"
        :product="item"
      ></base-product-card>
    </section>
  </main>
</template>

<script>
import { mapState } from "pinia";
import BaseCardNav from "../components/TheNavigator/BaseUI/BaseCardNav.vue";
import BaseProductCard from "../components/TheNavigator/BaseUI/BaseProductCard.vue";
import { useProductStore } from "../stores/Store_index";

export default {
  components: { BaseCardNav, BaseProductCard },
  data() {
    return {
      productsNav: [
        {
          name: "Cacao Pods",
          pictureUrl:
            "https://drive.google.com/uc?id=1wX3sQsWiGy6966WUOLkU_Fj7zGcnHxe8",
        },
        {
          name: "Chocolate Plate",
          pictureUrl:
            "https://drive.google.com/uc?id=1PR2EOctLjV6YA4evyLqe7VzniwfEGkdg",
        },
        {
          name: "Cacao Bean",
          pictureUrl:
            "https://drive.google.com/uc?id=1DPWC6zn3LLHkdJb23AEjsyEpfXzjkbZp",
        },
        {
          name: "Cocoa Powders",
          pictureUrl:
            "https://drive.google.com/uc?id=1qrDs-i_qwQfWC84YPE1rPyioF-ANbrQR",
        },
        {
          name: "Cocoa Butter",
          pictureUrl:
            "https://drive.google.com/uc?id=1sr2_giCe1nFLoCydU94tDRwmTydPEoz8",
        },
        {
          name: "Chocolate",
          pictureUrl:
            "https://drive.google.com/uc?id=1aUF-tJ77XS2lUUWiKMoCjMG3djfW10q0",
        },
        {
          name: "Chocolate Bar",
          pictureUrl:
            "https://drive.google.com/uc?id=1y1wzm59mJdg6jFDL4zAAYRwVHxqV7-jZ",
        },
      ],

      productCardActive: false,
      hoverKey: null,
    };
  },
  computed: {
    ...mapState(useProductStore, ["cacaoPodsItems"]),
  },
};
</script>

<style lang="scss" scoped>
header {
  height: 376px;
  background-image: url("../assets/Home/front-view-sweet-chocolate-assortment-dark-board.png");
  background-repeat: no-repeat, repeat;
  background-color: #cccccc;
  background-size: cover;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  color: #f0f0f0;

  h2 {
    font-size: 25px;
    margin: 0 0 34px 0;
  }

  form {
    position: relative;
    width: 65%;

    button {
      cursor: pointer;
      position: absolute;
      top: 10px;
      right: 13px;
      background: none;
      border: none;
    }

    .searchIcon {
      font-size: 30px;
      color: #646464;
      transition: all 0.25s ease-in;

      &:hover {
        color: #444444;
        transform: scale(1.1);
      }
    }

    input {
      width: 100%;
      height: 49px;
      border-radius: 10px;
      outline: none;
      padding: 0 1.3rem;
      margin: 0 0 0.6rem 0;
      font-size: 19px;
      border: 1px solid #c4c4c4;
      transition: all 0.25s ease-in;

      &::placeholder {
        font-size: 16px;
      }

      &:focus {
        border: 1px solid #858585;
      }
    }

    p {
      font-size: 18px;
    }
  }
}

main {
  .itemNav_container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 65px auto;

    &::before {
      position: absolute;
      width: 70%;
      content: "";
      border-bottom: 1px solid #e8e8e8;
      padding: 0 0 40px 0;

      bottom: -50px;
    }
  }

  section.showHotItem {
    margin-top: 6rem;
  }
}
</style>
