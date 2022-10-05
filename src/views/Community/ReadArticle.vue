<template>
  <div class="fixed w-full h-full">
    <div
      class="absolute w-full h-full right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2"
    >
      <in-development></in-development>
    </div>
  </div>
</template>

<script>
import InDevelopment from "../../components/PageNotFound/InDevelopment.vue";

export default {
  components: { InDevelopment },
};
</script>
