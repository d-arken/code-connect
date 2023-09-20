import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import JogoQuiz from "./components/JogoQuiz.vue";
import Oi from "./components/Oi.vue";

const routes = [
  { path: "/", name: "index", component: App },
  { path: "/jogo/quiz", name: "quiz", component: JogoQuiz },
  { path: "/oi", name: "oi", component: Oi },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
