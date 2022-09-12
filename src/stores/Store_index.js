import { defineStore } from "pinia";

export const useIndexStore = defineStore({
  id: "indexStore",
  state() {
    return {
      observer: null,
      leaveHeader: false,
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
