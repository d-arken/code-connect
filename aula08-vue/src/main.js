import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import JogoQuiz from "./components/JogoQuiz.vue";
import JogoDaVelha from "./components/JogoDaVelha.vue";

const routes = [
  { path: "/jogo/quiz", name: "quiz", component: JogoQuiz },
  {
    path: "/jogo/jogo-da-velha",
    name: "jogo-da-velha",
    component: JogoDaVelha,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
