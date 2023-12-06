import axios from "axios";

export default {
  state: {
    mensagens: [],
  },
  mutations: {
    SET_MENSSAGENS(state, mensagens) {
      state.mensagens = mensagens;
      console.log(state.mensagens);
    },
  },
  actions: {
    async buscarMensagens({ commit }) {
      try {
        const response = await axios.get(
          "http://localhost:3333/mensagem",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        commit("SET_MENSSAGENS", response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async enviarMensagem({ dispatch }, novaMensagem) {
      try {
        await axios.post(
          "http://localhost:3333/mensagem",
          { content: novaMensagem },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        dispatch("buscarMensagens");
      } catch (error) {
        console.error("Erro ao enviar mensagem:", error);
      }
    },
  },
};
