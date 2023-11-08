<template>
  <div>
    <FormGroup>
      <h2 class="color-white">Criar conta</h2>
      <form @submit.prevent="">
        <inputPadrao
          :inputType="'Email'"
          :input-invalido="erros['email']?.invalid"
          :placeholder-Input="'Email'"
          @pegarValueInput="pegarValueEmail"
        ></inputPadrao>
        <span class="mensagem-erro">{{erros['email']?.mensagem  }}</span>
        <inputPadrao
          :inputType="'Email'"
          :input-invalido="erros['confirmarEmail']?.invalid"
          :placeholder-Input="'Confimar Email'"
          @pegarValueInput="pegarValueConfirmarEmail"
        ></inputPadrao>
        <span class="mensagem-erro">{{ erros['confirmarEmail']?.mensagem }}</span>
        <inputPadrao
          :inputType="'password'"
          :input-invalido="erros['senha']?.invalid"
          :placeholder-Input="'Senha'"
          @pegarValueInput="pegarValueSenha"
        ></inputPadrao>
        <span class="mensagem-erro">{{ erros['senha']?.mensagem }}</span>
      </form>
      <div class="color-white">
        <router-link to="/login">Já possui uma conta?</router-link>
      </div>
      <BotaoSubmit :evento="validarFormulario"></BotaoSubmit>
    </FormGroup>

    <div v-if="false" class="mensagem-erro">

      <p>Senha deve conter pelo menos um número e no minimo oito caracteres.</p>
    </div>
  </div>
</template>

<script>
import inputPadrao from "../input/inputPadrao.vue";
import FormGroup from "../form/FormGroup.vue";
import BotaoSubmit from "../botao/BotaoSubmit.vue";
import {
  validarFormatoEmail,
  validarFormatoSenha,
} from "../../utils/validacoes";

export default {
  name: "TelaCadastro",
  components: {
    inputPadrao,
    FormGroup,
    BotaoSubmit,
  },
  data() {
    return {
      emailValue: "",
      confirmarEmailValue: "",
      senhaValue: "",
      erros: {},
    };
  },
  methods: {
    pegarValueEmail(value) {
      this.emailValue = value;
    },
    pegarValueConfirmarEmail(value) {
      this.confirmarEmailValue = value;
    },
    pegarValueSenha(value) {
      this.senhaValue = value;
    },
    validarFormulario() {
      this.erros = {};

      if (!validarFormatoEmail(this.emailValue)) {
        this.erros["email"] = { invalid: true, mensagem: "Insira o endereço de email no formato: nome@example.com" };
      }
      if (!validarFormatoEmail(this.confirmarEmailValue)) {
        this.erros["confirmarEmail"] = { invalid: true, mensagem: "Email não coincidem"};
      }
      if (!validarFormatoSenha(this.senhaValue)) {
        this.erros["senha"] = { invalid: true, mensagem: "Senha deve conter pelo menos um número e no minimo oito caracteres." };
      }
      if (Object.keys(this.erros).length === 0) {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style>
.mensagem-erro {
  color: red;
}
.color-white {
  font-size: 1.3rem;
  color: white;
  padding: 20px 0 20px 0;
}
</style>
