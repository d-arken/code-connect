<script>
import BannerLoginCadastro from "../components/banner/BannerLoginCadastro.vue";
import inputPadrao from "../components/input/inputPadrao.vue";
import botaoPadrao from "../components/button/botaoPadrao.vue";

import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "TelaCadastro",
  components: {
    BannerLoginCadastro,
    inputPadrao,
    botaoPadrao,
  },
  setup() {
    const store = useStore();
    const cadastroInvalido = ref(false);
    const erros  = computed(() => store.state.validacoes.erros)

    const setNome = (nome) => {
      store.commit("SET_NOME", nome);
    };
    const setEmail = (email) => {
      store.commit("SET_EMAIL", email);
    };
    const setSenha = (senha) => {
      store.commit("SET_SENHA", senha);
    };

    const cadastrar = async () => {
      try {
        await store.dispatch("fazerCadastro");
      } catch (error) {
        console.error("Erro ao fazer cadastro:", error);
        cadastroInvalido.value = true
      }
    };

    console.log(erros);
    return {
      setNome,
      setEmail,
      setSenha,
      cadastrar,
      erros
    }
  },
};
</script>

<template>
  <div>
    <BannerLoginCadastro />
    <form class="formulario" @submit.prevent="cadastrar">
      <inputPadrao
        :inputType="'text'"
        :input-invalido = "erros['nome']?.invalid"
        :placeholder-input="'Nome'"
        @pegarValueInput="setNome"
      />
      <span class="mensagem-erro">{{ erros['nome']?.mensagem }}</span>
      <inputPadrao
        :inputType="'email'"
        :input-invalido = "erros['email']?.invalid"
        :placeholder-input="'Confirmar Email'"
        @pegarValueInput="setEmail"
      />
      <span class="mensagem-erro">{{ erros['email']?.mensagem }}</span>
      <inputPadrao
        :inputType="'password'"
        :input-invalido = "erros['senha']?.invalid"
        :placeholder-input="'Senha'"
        @pegarValueInput="setSenha"
      />
      <span class="mensagem-erro">{{ erros['senha']?.mensagem }}</span>
      <div class="padding">
        <p> Já possui uma conta? <router-link class="link" to="/login">Log in</router-link></p>
      </div>
      <botaoPadrao :valueBotao="'Cadastrar-se'" :evento="cadastrar" />
    </form>
  </div>
</template>
<style scoped>
.mensagem-erro {
  color: var(--error);
}
.padding {
  padding-top: 40px;
}
.link {
  text-transform: uppercase;
  color: var(--purple);
}
.formulario {
  max-width: 768px;
  background: var(--white);
  border-radius: 28px;
  padding: 20px 30px 0 30px;
  margin: -40px auto 0 auto;
  text-align: center;
}

@media (min-width: 768px) {
  .formulario {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
}
</style>
