import { defineStore } from "pinia";

export const useIndexStore = defineStore({
  id: "indexStore",
  state() {
    return {
      observer: null,
      leaveHeader: false,
      isActiveCartList: false,
      isActiveNotification: false,
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
          this.leaveHeader = true;
          return;
        }

        this.leaveHeader = false;
        // this.observer.unobserve(target);
      });
    },
  },
});
