import { createApp } from "vue";
import App from "./App.vue";
import Login from "../components/TelaLogin.vue";
import Cadastro from "../components/TelaCadastro.vue";
import TelaInicio from "../components/TelaInicio.vue";

import * as VueRouter from "vue-router";

const routes = [
  { path: "/", component: TelaInicio },
  { path: "/login", component: Login },
  { path: "/cadastro", component: Cadastro },
];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);

app.mount("#app");
