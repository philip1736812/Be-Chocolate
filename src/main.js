import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
import "flowbite";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faCartArrowDown,
  faPlus,
  faMinus,
  faCartShopping,
  faStore,
  faFireFlameCurved,
  faRightToBracket,
  faFilter,
  faSquarePollVertical,
  faArrowLeft,
  faComments,
  faBars,
  faHouse,
  faArrowRightFromBracket,
  faCookieBite,
  faStar,
  faShop,
  faXmark,
  faFaceSadTear,
} from "@fortawesome/free-solid-svg-icons";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const axiosInstance = axios.create({
  withCredentials: true,
});
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.config.globalProperties.$axios = { ...axiosInstance };

// font awesome
library.add(
  faUser,
  faMagnifyingGlass,
  faCartArrowDown,
  faPlus,
  faMinus,
  faCartShopping,
  faStore,
  faFireFlameCurved,
  faRightToBracket,
  faFilter,
  faSquarePollVertical,
  faArrowLeft,
  faComments,
  faBars,
  faHouse,
  faCookieBite,
  faArrowRightFromBracket,
  faStar,
  faShop,
  faXmark,
  faFaceSadTear
);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
