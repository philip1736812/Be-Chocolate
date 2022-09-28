import { defineStore } from "pinia";

export const useIndexStore = defineStore({
  id: "indexStore",
  state() {
    return {
      observer: null,
      leaveHeader: false,
      isActiveCartList: false,
      isActiveNotification: false,
      windowWidth: window.innerWidth,
    };
  },
  getters: {
    getObserver(state) {
      return state.observer;
    },
    getLeaveHeaderStatus(state) {
      return state.leaveHeader;
    },
  },
  actions: {
    createObserver() {
      this.observer = new IntersectionObserver(this.onElementObserved, {
        root: null,
        threshold: 0,
      });

      return new Promise((resolve) => {
        if (this.observer !== null) resolve(this.observer);
      });
    },

    onElementObserved(entries) {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) {
          this.isActiveCartList = false;
          this.leaveHeader = true;
          return;
        }

        this.leaveHeader = false;
        // this.observer.unobserve(target);
      });
    },

    windowResize() {
      window.addEventListener(
        "resize",
        () => (this.windowWidth = window.innerWidth)
      );
    },

    windowRemoveResize() {
      window.removeEventListener(
        "resize",
        () => (this.windowWidth = window.innerWidth)
      );
    },
  },
});
