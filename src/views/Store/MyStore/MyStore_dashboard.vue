<template>
  <div class="relative">
    <in-development :positionFixed="false" :canGoBack="false"></in-development>
  </div>
</template>

<script>
import InDevelopment from "../../../components/PageNotFound/InDevelopment.vue";

export default {
  components: { InDevelopment },
};
</script>
