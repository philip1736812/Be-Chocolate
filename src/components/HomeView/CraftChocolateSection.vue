<template>
  <div
    id="craftChocolateSection"
    class="container mx-auto w-full h-32 rounded-lg px-14 py-8"
  >
    <div class="w-2/4 h-full flex flex-col justify-center">
      <p class="text-3xl mb-4 font-bold">Craft Chocolate</p>
      <p class="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem id saepe,
        voluptatem repellat ullam sequi vel vitae iste enim molestias.
      </p>

      <div class="mt-6 text-lg">
        <base-button mode="mainBtn" @click="goToHash"> View Craft </base-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";

export default {
  components: { BaseButton },
  methods: {
    goToHash() {
      this.$router.push({ name: "craftChocolate" });
    },
  },
};
</script>

<style lang="scss" scoped>
#craftChocolateSection {
  height: 319px;
  background-image: url("@/assets/Home/CraftChocolateSection.png");
  background-repeat: no-repeat, repeat;
  background-color: #cccccc;
  background-size: cover;
  color: #f0f0f0;
}
</style>
