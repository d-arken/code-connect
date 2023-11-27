import { createApp } from "vue";
import "../src/assets/css/global.css"
import "../src/assets/css/reset.css"
import App from "./App.vue";
import Login from "./views/telaLogin.vue";
import Cadastro from "./views/telaCadastro.vue";
import TelaInicio from "./views/telaInicio.vue";
import TelaChat from "./views/telaChat.vue"
import TelaPerfil from "./views/telaPerfil.vue"

import * as VueRouter from "vue-router";

const routes = [
  { path: "/", component: TelaInicio },
  { path: "/login", component: Login },
  { path: "/cadastro", component: Cadastro },
  { path: "/chat", component: TelaChat, meta: { requerAuth: true } },
  { path: "/perfil", component: TelaPerfil, meta: { requerAuth: true } },
];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if(to.meta.requerAuth) {
    const token = localStorage.getItem('token');
    return token ? next() : next("/login")
  }
  next()
})

const app = createApp(App);
app.use(router);

app.mount("#app");
