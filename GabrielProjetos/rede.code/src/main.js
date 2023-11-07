import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router'
import TelaInicio from "../src/components/views/TelaInicio.vue"
import Login from "../src/components/views/TelaLogin.vue"
import Cadastro from "../src/components/views/TelaCadastro.vue"


const routes = [
  {path: "/", component: TelaInicio},
  {path: "/login", component: Login},
  {path: "/cadastro", component: Cadastro},
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

createApp(App)
  .use(router)
    .mount('#app')
