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
      API_FIREBASE_KEY: `AIzaSyCeDgaXuYfNyKUnZqY4uVCn1THb_vJwCKw`,
      isAuth: false,
      user: null,
      errMessage: null,
    };
  },
  getters: {
    getObserver(state) {
      return state.observer;
    },
    getLeaveHeaderStatus(state) {
      return state.leaveHeader;
    },
    isAuthentication(state) {
      return state.isAuth;
    },
    getUserInfo(state) {
      return state.user;
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

    async auth(mode, dataForAuth) {
      try {
        let url;
        if (mode !== "signIn")
          url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_FIREBASE_KEY}`;
        else
          url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.API_FIREBASE_KEY}`;

        const authRes = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataForAuth),
        });

        if (!authRes.ok) {
          if (mode !== "signIn") {
            throw new Error(
              `Authentication failed. Check your filed in register form.`
            );
          }

          throw new Error(
            `Authentication failed. Please check your username and password.`
          );
        }

        const data = await authRes.json();

        if (mode == "signIn" && data.localId) this.isAuth = true;

        // Data from SignIn
        this.user = {
          email: data.email,
          expiresIn: data.expiresIn,
          idToken: data.idToken,
          userId: data.localId,
          registered: data.registered,
        };
      } catch (err) {
        this.errMessage = err.message;
        console.error(err.message);
      }
    },

    signOutFn() {
      this.user = null;
      this.isAuth = false;
    },
  },
});
