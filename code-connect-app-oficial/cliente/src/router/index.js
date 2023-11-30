import { createRouter, createWebHashHistory } from "vue-router"

import Login from "./views/telaLogin.vue";
import Cadastro from "./views/telaCadastro.vue";
import TelaInicio from "./views/telaInicio.vue";
import TelaChat from "./views/telaChat.vue"
import TelaPerfil from "./views/telaPerfil.vue"

const routes = [
  { path: "/", component: TelaInicio },
  { path: "/login", component: Login },
  { path: "/cadastro", component: Cadastro },
  { path: "/chat", component: TelaChat, meta: { requerAuth: true } },
  { path: "/perfil", component: TelaPerfil, meta: { requerAuth: true } },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if(to.meta.requerAuth) {
    const token = localStorage.getItem('token');
    return token ? next() : next("/login")
  }
  next()
})

export default router