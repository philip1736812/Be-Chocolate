import { createApp } from "vue";
import { createPinia } from "pinia";
import "flowbite";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCircleUp, faCircleDown } from "@fortawesome/free-regular-svg-icons";
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
  faTrash,
  faTag,
  faAngleLeft,
  faAngleRight,
  faTriangleExclamation,
  faPeopleGroup,
  faThumbsUp,
  faCommentsDollar,
  faBoxesStacked,
  faTruckRampBox,
  faCircleExclamation,
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
  faFaceSadTear,
  faTrash,
  faTag,
  faAngleLeft,
  faAngleRight,
  faTriangleExclamation,
  faPeopleGroup,
  faThumbsUp,
  faCommentsDollar,
  faBoxesStacked,
  faTruckRampBox,
  faCircleExclamation,
  faCircleUp,
  faCircleDown
);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
