<script setup>
import BannerLoginCadastro from "../components/banner/BannerLoginCadastro.vue";
import customInput from "../components/custom/customInput.vue";
import customButton from "../components/custom/customButton.vue";
import designTitulo from "../components/design/designTitulo.vue";

import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
const loginInvalid = ref(false);

onMounted(() => {
  const token = localStorage.getItem("token");
  if (token) {
    router.push("/chat");
  }
});

const setEmail = (email) => {
  store.commit("SET_EMAIL", email);
};
const setSenha = (senha) => {
  store.commit("SET_SENHA", senha);
};
const login = async () => {
  try {
    await store.dispatch("fazerLogin");
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/chat");
    } else {
      throw new Error("Login invalido");
    }
  } catch (error) {
    loginInvalid.value = true;
    console.error("Erro ao fazer login:", error);
  }
};
</script>

<template>
  <div class="login-page">
    <div class="login-container">
      <designTitulo />
      <form class="login-form" @submit.prevent="login">
        <h2 class="login-subtitle">Faça seu login</h2>
        <customInput
          :inputType="'Email'"
          :placeholderInput="'Email'"
          :inputInvalid="loginInvalid"
          :valueInput="(e) => setEmail(e.target.value)"
        />
        <customInput
          :inputType="'password'"
          :placeholderInput="'Senha'"
          :inputInvalid="loginInvalid"
          :valueInput="(e) => setSenha(e.target.value)"
        />
        <span v-if="loginInvalid" class="mensagem-error">
          E-mail ou senha incorretos.
        </span>
        <customButton :evento="login" :valueButton="'Entrar'"/>
        <p class="cadastro_texto">
          Não tem uma conta?
          <router-link to="/cadastro" class="cadastro_link">
            Cadastrar-se
          </router-link>
        </p>
      </form>
    </div>
    <BannerLoginCadastro />
  </div>
</template>

<style scoped>
.mensagem-error {
  color: var(--error);
}
.login-page {
  display: flex;
  justify-content: center;
}
.login-subtitle {
  font-size: 1.3rem;
  color: var(--gray-light);
}
.login-container {
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
.login-form {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.cadastro_link {
  color: var(--purple);
  margin-top: 40px;
}
.cadastro_texto {
  color: var(--gray-light);
  padding-bottom: 40px;
}

@media (min-width: 1024px) {
  .login-container {
    margin: 0 50px;
  }
}
</style>
