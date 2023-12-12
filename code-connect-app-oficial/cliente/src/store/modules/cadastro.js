import axios from "axios"

export default {
  state: {
    dadosCadastro: {
      nome: "",
      email: "",
      senha: "",
    },
    cadastroInvalido: false,
  },
  mutations: {
    SET_NOME(state, nome) {
      state.dadosCadastro.nome = nome;
    },
    SET_EMAIL(state, email) {
      state.dadosCadastro.email = email;
    },
    SET_SENHA(state, senha) {
      state.dadosCadastro.senha = senha;
    },
    SET_CADASTRO_INVALIDO(state, valor) {
      state.cadastroInvalido = valor;
    },
  },
  actions: {
    async fazerCadastro({ commit, state, dispatch  }) {
      const formularioValido = await dispatch("validarFormulario", state.dadosCadastro, {root: true})

      if(!formularioValido) {
        return
      }
      try {
        const response = await axios.post("http://localhost:3333/users", state.dadosCadastro )
        if(response.data.success) {
          console.log("conta criada com sucesso");
        }
      } catch(error) {
        console.error("Erro ao cadastrar usuario", error)
        commit("SET_CADASTRO_INVALIDO", true)
      }
    }
  },
};
