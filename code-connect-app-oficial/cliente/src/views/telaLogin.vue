<template>
  <div>
    <bannerLoginCadastro> </bannerLoginCadastro>
    <formGroup>
      <form>
        <inputPadrao
          :inputType="'Email'"
          :placeholder-input="'Email'"
          :inputInvalido="loginInvalido"
          @pegarValueInput="pegarEmailValue"
        />
        <inputPadrao
          :inputType="'password'"
          :placeholder-input="'Senha'"
          :inputInvalido="loginInvalido"
          @pegarValueInput="pegarSenhaValue"
        />
        <span v-if="loginInvalido" class="mensagem-erro">
          E-mail ou senha incorretos.
        </span>
      </form>
      <botaoPadrao :evento="login" />
      <section class="cadastro">
        <p class="cadastro_texto">
          Não tem uma conta?
          <router-link to="/cadastro" class="cadastro_link"
            >Cadastrar-se</router-link
          >
        </p>
      </section>
    </formGroup>
  </div>
</template>

<script>
import axios from "axios";
import bannerLoginCadastro from "../components/banner/BannerLoginCadastro.vue";
import formGroup from "../components/form/FormGroup.vue";
import inputPadrao from "../components/input/inputPadrao.vue";
import botaoPadrao from "../components/button/botaoPadrao.vue";


export default {
  name: "TelaLogin",
  components: {
    bannerLoginCadastro,
    formGroup,
    inputPadrao,
    botaoPadrao,
  },
  data() {
    return {
      dadosUsuario: {
        email: "",
        senha: "",
      },
      loginInvalido: false,
    };
  },
  methods: {
    pegarEmailValue(email) {
      this.dadosUsuario.email = email;
    },
    pegarSenhaValue(senha) {
      this.dadosUsuario.senha = senha;
    },
    async login() {
      try {
        const response = await axios.post(
          "http://localhost:3333/login",
          this.dadosUsuario
        );

        if (response.data) {
          localStorage.setItem("token", response.data.token);
          console.log("Login feito!");
          this.$router.push("/chat");
        }
      } catch (error) {
        console.error("Erro ao fazer login:", error);
        this.loginInvalido = true;
      }
    },
  },
};
</script>

<style scoped>
.senhaEsquecida,
.cadastro_link {
  text-transform: uppercase;
  color: var(--purple);
  padding-top: 40px;
}
.cadastro_texto {
  color: var(--gray-light);
  padding-bottom: 40px;
}
</style>
