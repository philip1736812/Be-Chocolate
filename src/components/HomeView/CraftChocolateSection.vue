<template>
  <div
    id="craftChocolateSection"
    class="container mx-auto w-full h-60 md:h-60 rounded-lg px-4 py-4 md:px-14 md:py-8"
  >
    <div class="w-full md:w-2/4 h-full flex flex-col justify-center">
      <p class=" text-lg sm:text-xl md:text-2xl mb-2 sm:mb-4 font-bold">Craft Chocolate</p>
      <p class="text-sm md:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem id saepe,
        voluptatem repellat ullam sequi vel vitae iste enim molestias.
      </p>

      <div class="mt-6 text-lg">
        <base-button mode="mainBtn" @click="goToHash">
          <p class="text-sm sm:text-base">View Craft</p>
        </base-button>
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
  background-image: url("@/assets/Home/CraftChocolateSection.png");
  background-repeat: no-repeat, repeat;
  background-color: #cccccc;
  background-size: cover;
  color: #f0f0f0;
}
</style>
