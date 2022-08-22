<template>
  <router-view name="navigation"></router-view>
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/TheNavigator/TheHeader.vue";

export default {
  components: { TheHeader },
};
</script>
