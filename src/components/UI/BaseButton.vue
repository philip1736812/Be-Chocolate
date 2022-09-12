<template>
  <!-- mode flat or outline Style -->
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>

<style lang="scss" scoped>
.mainBtn {
  width: auto;
  padding: 0.7rem 2rem;
  background: #d8612f;
  color: #fff;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  a {
    width: 100%;
    height: 100%;
  }

  &:hover {
    background: #c75626;
  }

  &:active {
    background: #993f19;
  }
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}
</style>
