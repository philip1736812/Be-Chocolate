<template>
  <teleport to="body">
    <transition name="popUp">
      <div
        v-if="
          activeWelcomePopUp && isAuth && isGuestId && !isActiveWelcomePopUp
        "
      >
        <who-are-guest-pop-up
          @closeNameWelcome="closeNameWelcome"
          @submitNameForm="submitName"
        ></who-are-guest-pop-up>
        <div
          @click="closeNameWelcome"
          class="z-40 w-full h-full overlay bg-black fixed right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 opacity-20"
        ></div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import { useIndexStore } from "@/stores/Store_index";

import WhoAreGuestPopUp from "../../views/HomePage/WhoAreGuestPopUp.vue";

export default {
  components: { WhoAreGuestPopUp },

  setup() {
    const indexStore = useIndexStore();

    return { indexStore };
  },
  data() {
    return { activeWelcomePopUp: false };
  },
  mounted() {
    setTimeout(() => {
      if (this.indexStore.AlreadyActiveGuestPopUp) return;
      this.activeWelcomePopUp = true;
    }, 500);
  },
  computed: {
    isActiveWelcomePopUp() {
      return this.indexStore.AlreadyActiveGuestPopUp;
    },
    isAuth() {
      return this.indexStore.isAuthentication;
    },
    isGuestId() {
      return this.indexStore.isGuestId;
    },
  },
  methods: {
    closeNameWelcome() {
      this.indexStore.AlreadyActiveGuestPopUp = true;
      this.activeWelcomePopUp = false;
    },
    submitName(str) {
      this.indexStore.AlreadyActiveGuestPopUp = true;
      this.indexStore.sentStrName_welcomeForm(str);
      this.closeNameWelcome();
    },
  },
};
</script>

<style lang="scss" scoped>
.popUp-enter-active {
  animation: popUpTransition 0.25s ease-in;
}

.popUp-leave-active {
  animation: popUpTransition 0.25s ease-in reverse;
}

@keyframes popUpTransition {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
