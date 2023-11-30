import axios from "axios";
import { useRouter } from "vue-router";

export default {
  state: {
    dadosUsuario: {
      email: "",
      senha: "",
    },
    loginInvalido: false,
  },
  mutations: {
    SET_EMAIL(state, email) {
      state.dadosUsuario.email = email;
    },
    SET_SENHA(state, senha) {
      state.dadosUsuario.senha = senha
    },
    SET_LOGIN_INVALIDO(state, valor) {
      state.loginInvalido = valor
    }
  },
  actions: {
    async fazerLogin({ commit, state }) {
      const router = useRouter();
      try {
        const response = await axios.post("http://localhost:3333/login", state.dadosUsuario);

        if(response.data) {
          localStorage.setItem("token", response.data.token);
          console.log("Login feito");
          router.push("/chat");
        }
      } catch(error) {
        console.error("Erro ao fazer login:", error);
        commit('SET_LOGIN_INVALIDO', true)
      }
    }
  },
};
