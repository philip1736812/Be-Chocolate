<template>
  <form @input.prevent="$emit('submitSearchEmit', inputSearchText)">
    <input
      type="text"
      placeholder="Craft Chocolate..."
      v-model="inputSearchText"
    />
    <button>
      <font-awesome-icon class="searchIcon" icon="fa-magnifying-glass" />
    </button>
  </form>
</template>

<script>
export default {
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
  font-size: 30px;
  color: #646464;
  transition: all 0.25s ease-in;

  &:hover {
    color: #444444;
    transform: scale(1.1);
  }
}

form {
  position: relative;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
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
  color: #444444;

  &::placeholder {
    font-size: 16px;
  }

  &:focus {
    border: 1px solid #858585;
  }
}
</style>
