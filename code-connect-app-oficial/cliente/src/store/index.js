import { createStore } from "vuex";
import login from "./modules/login"
import cadastro from "./modules/cadastro";
import validacoes from "./modules/validacoes";
import chat from "./modules/chat"
import perfil from "./modules/perfil";

const store = createStore({
  modules: {
    login,
    cadastro,
    validacoes,
    chat,
    perfil
  }
});

export default store;
