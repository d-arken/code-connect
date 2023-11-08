<template>
  <div>
    <h1>Tela de login</h1>
    <FormGroup>
      <form>
        <inputPadrao
          :inputType="'email'"
          :placeholder-input="'Email'"
          :input-invalido="loginInvalido"
          @pegarValueInput="valorInputEmail"
        ></inputPadrao>
        <inputPadrao
          :inputType="'password'"
          :placeholder-input="'Senha'"
          :input-invalido="loginInvalido"
          @pegarValueInput="valorInputSenha"
        ></inputPadrao>
        <span v-if="loginInvalido" class="mensagem-erro"> E-mail ou senha incorretos. </span>
      </form>
      <div class="color-white">
        <router-link to="/cadastro">Ainda não se registrou?</router-link>
      </div>
      <BotaoSubmit :evento="validarLogin"></BotaoSubmit>
    </FormGroup>
  </div>
</template>

<script>
import inputPadrao from "../input/inputPadrao.vue";
import FormGroup from "../form/FormGroup.vue";
import BotaoSubmit from "../botao/BotaoSubmit.vue";
export default {
  name: "TelaLogin",
  data() {
    return {
      emailValue: "",
      senhaValue: "",
      loginInvalido: false,
      contas: [
        {
          email: "digi@gmail.com",
          senha: "digi1234",
        },
        {
          email: "mais1code@gmail.com",
          senha: "mais1code",
        },
      ],
    };
  },
  components: {
    inputPadrao,
    FormGroup,
    BotaoSubmit,
  },
  methods: {
    valorInputEmail(value) {
      this.emailValue = value;
    },
    valorInputSenha(value) {
      this.senhaValue = value;
    },
    validarLogin() {
      for (const user of this.contas) {
        const autenticacao = user.email == this.emailValue && user.senha == this.senhaValue;
        if (autenticacao) {
          console.log("entrou");
          this.loginInvalido = false;
          return this.$router.push("/");
        }
      }
      return (this.loginInvalido = true);
    },
  },
};
</script>

<style>
.mensagem-erro {
  color: red;
  margin-top: 10px;
}

.color-white {
  color: white;
  margin-top: 20px;
}
</style>
