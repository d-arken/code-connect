import axios from "axios";

export default {
  state: {
    dadosUsuario: {
      email: "",
      password: "",
    },
    loginInvalido: false,
  },
  mutations: {
    SET_EMAIL(state, email) {
      state.dadosUsuario.email = email;
    },
    SET_SENHA(state, senha) {
      state.dadosUsuario.password = senha
    },
    SET_LOGIN_INVALIDO(state, valor) {
      state.loginInvalido = valor
    }
  },
  actions: {
    async fazerLogin({ commit, state }) {
      try {
        const response = await axios.post("http://localhost:3333/auth", state.dadosUsuario);

        if(response.data) {
          localStorage.setItem("token", response.data.token);
          console.log("Login feito");
        }
      } catch(error) {
        console.error("Erro ao fazer login:", error);
        commit('SET_LOGIN_INVALIDO', true)
      }
    }
  },
};
