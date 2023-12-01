import { createStore } from "vuex";
import login from "./modules/login"
import cadastro from "./modules/cadastro";
import validacoes from "./modules/validacoes";

const store = createStore({
  modules: {
    login,
    cadastro,
    validacoes,
  }
});

export default store;
