import axios from "axios";

export default {
  state: {
    dadosAtual: {},
    dadosAlterado: {
      name: '',
      email: '',
      password: '',
    }
  },
  mutations: {
    SET_DADOS(state, dados) {
      state.dadosAtual = dados;
    },
    SET_DADOS_ALTERADOS(state, dados) {
      state.dadosAlterado = {...state.dadosAlterado, ...dados }
    }
  },
  actions: {
    async buscarPerfil({ commit }) {
      try {
        const response = await axios.get("http://localhost:3333/perfil", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        commit("SET_DADOS", response.data);
      } catch (error) {
        console.error("erro ao buscar perfil", error);
      }
    },
    async alterarPerfil({ commit }, dadosAlterados) {
      try {
        await axios.put(
          "http://localhost:3333/perfil/alterarPerfil",
          { content: dadosAlterados},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        commit('SET_DADOS_ALTERADOS', dadosAlterados)
      } catch (error) {
        console.error("erro ao alterar perfil:", error);
      }
    },
  },
};
