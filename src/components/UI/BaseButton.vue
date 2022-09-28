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
  background: rgb(249 115 22);
  color: #fff;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  @media (max-width: 640px) {
    padding: 0.2rem 1.3rem;
  }

  a {
    width: 100%;
    height: 100%;
  }

  &:hover {
    background: rgb(234 88 12);
  }

  &:active {
    background: rgb(194 65 12);
  }
}

.articleBtn {
  width: auto;
  padding: 0.7rem 2rem;
  background-color: rgb(51 65 85);

  color: #fff;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  a {
    width: 100%;
    height: 100%;
  }

  &:hover {
    background-color: rgb(30 41 59);
  }

  &:active {
    background-color: rgb(15 23 42);
  }
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}
</style>
