<template>
  <div>
    <h1>Tela Cadastro</h1>
    <FormGroup>
      <inputPadrao 
        :inputType="'Email'" 
        :input-invalido="emailInvalido"
        :placeholder-Input="'Email'"
        @validar="validarEmail"
      ></inputPadrao>
      <inputPadrao 
        :inputType="'Email'" 
        :input-invalido="confirmarEmailInvalido"
        :placeholder-Input="'Confimar Email'"
        @validar="validarConfirmarEmail"
      ></inputPadrao>
      <inputPadrao
        :inputType="'password'"
        :input-invalido="senhaInvalida"
        :placeholder-Input="'Senha'"
        @validar="validarSenha"
      ></inputPadrao>
      <div class="color-white"> <router-link to="/login">Já possui uma conta?</router-link> </div>
      <BotaoSubmit :evento="cadastrarConta"></BotaoSubmit>
    </FormGroup>

    <div v-if="cadastroInvalido" class="mensagem-erro">
      <p>Cadastro inválido.</p>
      <p>Verifique se Email coincidem.</p>
      <p>Senha deve conter pelo menos um número e no minimo oito caracteres.</p>
    </div>
  </div>
</template>

<script>
import inputPadrao from '../input/inputPadrao.vue'
import FormGroup from '../form/FormGroup.vue'
import BotaoSubmit from "../botao/BotaoSubmit.vue"
import { validarFormatoEmail, validarFormatoSenha } from "../../utils/validacoes"

export default {
  name: 'TelaCadastro',
  components: {
    inputPadrao,
    FormGroup,
    BotaoSubmit
  },
  data() {
    return {
      emailValue: '',
      confirmarEmailValue:'',
      senhaValue: '',
      emailInvalido: false,
      confirmarEmailInvalido: false,
      senhaInvalida: false,
      cadastroInvalido: false,
    };
  },
  methods: {
    validarEmail(value) {
      this.emailValue = value
      this.emailInvalido = !validarFormatoEmail(value)
    },
    validarConfirmarEmail(value) {
      this.confirmarEmailValue = value
      this.confirmarEmailInvalido = this.confirmarEmailValue != this.emailValue && !validarFormatoEmail(value)
    },
    validarSenha(value) {
      this.senhaValue = value
      this.senhaInvalida = !validarFormatoSenha(value)
    },
    validarFormulario() {
      return !this.emailInvalido && !this.confirmarEmailInvalido && !this.senhaInvalida
    },
    cadastrarConta() {
      if(this.validarFormulario() && this.emailValue) {
        this.$router.push("/login")
        this.cadastroInvalido = false
      } else {
        console.log("login incorreto")
        this.cadastroInvalido = true
      } 

    }
  }
}
</script>

<style>
.mensagem-erro {
  color: red;
}
.color-white {
  color: white;
  margin-top: 20px;
}
</style>
