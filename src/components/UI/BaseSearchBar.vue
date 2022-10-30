<template>
  <form
    v-if="action == 'input'"
    @input.prevent="$emit('submitSearchEmit', inputSearchText)"
  >
    <input
      type="text"
      placeholder="search for..."
      class="w-full h-10 sm:h-10 rounded-md py-2.5"
      :class="classStyle"
      :value="inputSearchText"
      @input="(evt) => (inputSearchText = evt.target.value)"
    />
    <button>
      <font-awesome-icon
        class="searchIcon text-lg sm:text-xl"
        icon="fa-magnifying-glass"
      />
    </button>
  </form>

  <form
    v-else-if="action == 'submit'"
    @submit.prevent="$emit('submitSearchEmit', inputSearchText)"
  >
    <input
      type="text"
      placeholder="search for..."
      class="w-full h-10 sm:h-10 rounded-md py-2.5"
      :class="classStyle && classStyle"
      v-model="inputSearchText"
    />
    <button>
      <font-awesome-icon
        class="searchIcon text-lg sm:text-xl"
        icon="fa-magnifying-glass"
      />
    </button>
  </form>
</template>

<script>
export default {
  props: {
    action: {
      type: String,
      default: "input",
    },
    classStyle: {
      type: String,
    },
  },
  emits: ["submitSearchEmit"],
  data() {
    return { inputSearchText: "" };
  },
};
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 13px;
  background: none;
  border: none;
}

.searchIcon {
  color: #646464;
  transition: all 0.25s ease-in;

  &:hover {
    color: #444444;
    transform: scale(1.1);
  }
}

form {
  position: relative;
  max-width: 1249px;
  width: 100%;
  margin: 0 auto;
}

input {
  outline: none;
  font-size: 19px;
  border: 1px solid #c4c4c4;
  transition: all 0.25s ease-in;
  color: #444444;

  &::placeholder {
    font-size: 16px;
  }

  &:focus {
    border: 1px solid #858585;
  }
}
</style>
