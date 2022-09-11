<template>
  <div class="itemNav">
    <img :src="urlNav" :alt="navName" />
    <p>{{ navName }}</p>
  </div>
</template>

<script>
export default {
  props: ["navName", "urlNav"],
};
</script>

<style lang="scss" scoped>
.itemNav {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 0.4fr;

  width: 179px;
  height: 179px;
  border: 1px solid #f4f4f4;
  margin: 0 20px;
  border-radius: 10px;
  cursor: pointer;
  background: none;
  transition: all 0.25s ease-in-out;

  &.itemNav:hover {
    background: #FFF;
  }

  img {
    margin: auto;
  }
  p {
    font-size: 18px;
    text-align: center;
  }
}
</style>
