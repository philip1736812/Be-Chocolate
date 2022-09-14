<template>
  <router-view name="navigation"></router-view>
  <router-view v-slot="slotProps">
    <transition name="mainRoute-animated" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from "./components/TheNavigator/TheHeader.vue";

export default {
  components: { TheHeader },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  font-family: "Montserrat", sans-serif;
}

.mainRoute-animated-enter-active {
  animation: fade-in-out 0.25s ease-in;
}

.mainRoute-animated-leave-active {
  animation: fade-in-out 0.25s ease-in reverse;
}

@keyframes fade-in-out {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
