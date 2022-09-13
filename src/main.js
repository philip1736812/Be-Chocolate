import { createApp } from "vue";
import { createPinia } from "pinia";
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
} from "@fortawesome/free-solid-svg-icons";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// font awesome
library.add(
  faUser,
  faMagnifyingGlass,
  faCartArrowDown,
  faPlus,
  faMinus,
  faCartShopping,
  faStore,
  faFireFlameCurved
);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
