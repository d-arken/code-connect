import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router'
import telaInicio from "../src/components/views/TelaInicio.vue"
import Cadastro from "../src/components/views/TelaCadastro.vue"


const routes = [
  {path: "/cadastro", component: Cadastro},
  {path: "/", component: telaInicio}
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

createApp(App)
  .use(router)
    .mount('#app')
