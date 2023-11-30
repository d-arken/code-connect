import { createApp } from "vue";
import "../src/assets/css/global.css";
import "../src/assets/css/reset.css";
import App from "./App.vue";

import router from "./router";
import store from "./store";

createApp(App)
  .use(store)
    .use(router)
      .mount("#app");
