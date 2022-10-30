<template>
  <div
    class="fixed z-50 right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-6/12 h-5/6 bg-white rounded-sm shadow-md"
  >
    <div
      class="absolute right-8 top-6 cursor-pointer"
      @click="$emit('closeCodeVoucher')"
    >
      <font-awesome-icon icon="fa-xmark" class="text-lg" />
    </div>
    <in-development :canGoBack="false"></in-development>
  </div>
</template>

<script>
import InDevelopment from "../../components/PageNotFound/InDevelopment.vue";

export default {
  components: { InDevelopment },
  emits: ["closeCodeVoucher"],
};
</script>
