<script setup>
import BannerLoginCadastro from "../components/banner/BannerLoginCadastro.vue";
import customInput from "../components/custom/customInput.vue";
import customButton from "../components/custom/customButton.vue";
import designTitulo from "../components/design/designTitulo.vue";

import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const cadastroInvalido = ref(false);
const erros = computed(() => store.state.validacoes.erros);

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
    cadastroInvalido.value = true;
  }
};
</script>

<template>
  <div class="register-page">
    <BannerLoginCadastro />
    <div class="register-container">
      <designTitulo />
      <form class="register-form" @submit.prevent="cadastrar">
        <h2 class="register-subtitulo">Faça seu cadastro</h2>
        <customInput
          :inputType="'text'"
          :input-invalid="erros['nome']?.invalid"
          :placeholderInput="'Nome'"
          :valueInput="(e) => setNome(e.target.value)"
        /> 
        <span class="mensagem-erro">{{ erros["nome"]?.mensagem }}</span>
        <customInput
          :inputType="'email'"
          :input-invalid="erros['email']?.invalid"
          :placeholderInput="'Email'"
          :valueInput="(e) => setEmail(e.target.value)"
        />
        <span class="mensagem-erro">{{ erros["email"]?.mensagem }}</span>
        <customInput
          :inputType="'password'"
          :input-invalid="erros['senha']?.invalid"
          :placeholderInput="'Senha'"
          :valueInput="(e) => setSenha(e.target.value)"
        />
        <span class="mensagem-erro">{{ erros["senha"]?.mensagem }}</span>
        <div class="padding">
          <p>
            Já possui uma conta?
            <router-link class="link" to="/login">Log in</router-link>
          </p>
        </div>
        <customButton :valueButton="'Cadastrar'" :evento="cadastrar" />
      </form>
    </div>
  </div>
</template>
<style scoped>
.register-page {
  display: flex;
  justify-content: center;
}
.register-subtitulo {
  font-size: 1.3rem;
  color: var(--gray-light);
}
.register-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-width: 480px;
  width: 100%;
  background: var(--white);
  text-align: center;
  margin: 0 16px;
}
.register-form {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.mensagem-erro {
  color: var(--error);
}
.padding {
  padding-top: 40px;
}
.link {
  color: var(--purple);
}
.formulario {
  text-align: center;
}

@media (min-width: 1024px) {
  .register-container {
    margin: 0 50px;
  }
}
</style>
