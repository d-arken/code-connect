import {
  validarNome,
  validarFormatoEmail,
  validarFormatoSenha,
} from "@/assets/utils/validacoes";

export default {
  state: {
    erros: {}
  },
  mutations: {
    SET_ERROS(state, erros) {
      state.erros = erros
    }
  },
  actions: {
    validarFormulario({ commit }, novoUsuario) {
      const erros = {};

      if (!validarNome(novoUsuario.nome)) {
        erros["nome"] = {
          invalid: true,
          mensagem: "O nome inserido deve conter mínimo quatro caracteres.",
        };
      }
      if (!validarFormatoEmail(novoUsuario.email)) {
        erros["email"] = {
          invalid: true,
          mensagem: "Insira o endereço de email no formato: nome@example.com",
        };
      }
      if (!validarFormatoSenha(novoUsuario.senha)) {
        erros["senha"] = {
          invalid: true,
          mensagem:
            "Senha deve conter pelo menos um número e no mínimo oito caracteres.",
        };
      }
      commit("SET_ERROS", erros);

      return Object.keys(erros).length === 0;
    },
  },
};
