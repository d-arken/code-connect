import { createApp } from "vue";
import App from "./App.vue";
import Login from "../views/telaLogin.vue";
import Cadastro from "../views/telaCadastro.vue";
import TelaInicio from "../views/telaInicio.vue";

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
