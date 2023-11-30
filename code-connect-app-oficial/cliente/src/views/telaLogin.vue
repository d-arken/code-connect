<script>
import bannerLoginCadastro from "../components/banner/BannerLoginCadastro.vue";
import inputPadrao from "../components/input/inputPadrao.vue";
import botaoPadrao from "../components/button/botaoPadrao.vue";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "TelaLogin",
  components: {
    bannerLoginCadastro,
    inputPadrao,
    botaoPadrao,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const loginInvalido = ref(false);

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
        const token = localStorage.getItem("token")
        if (token) {
          router.push("/chat");
        } else {
          throw new Error("Login invalido");
        }
      } catch (error) {
        loginInvalido.value = true;
        console.error("Erro ao fazer login:", error);
      }
    };

    return {
      setEmail,
      setSenha,
      loginInvalido,
      login,
    };
  },
};
</script>

<template>
  <div>
    <bannerLoginCadastro />
    <form class="formulario" @submit.prevent="login">
      <inputPadrao
        :inputType="'Email'"
        :placeholder-input="'Email'"
        :inputInvalido="loginInvalido"
        @pegarValueInput="setEmail"
      />
      <inputPadrao
        :inputType="'password'"
        :placeholder-input="'Senha'"
        :inputInvalido="loginInvalido"
        @pegarValueInput="setSenha"
      />
      <span v-if="loginInvalido" class="mensagem-erro">
        E-mail ou senha incorretos.
      </span>
      <botaoPadrao :evento="login" />
      <p class="cadastro_texto"> Não tem uma conta? <router-link to="/cadastro" class="cadastro_link"> Cadastrar-se </router-link>
      </p>
    </form>
  </div>
</template>

<style scoped>
.cadastro_link {
  text-transform: uppercase;
  color: var(--purple);
  padding-top: 40px;
}
.cadastro_texto {
  color: var(--gray-light);
  padding-bottom: 40px;
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
