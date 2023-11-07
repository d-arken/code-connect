<template>
  <div>
    <h1>Tela Login</h1>
    <form>
      <inputPadrao 
        :inputType="'Email'" 
        :input-invalido="emailInvalido"
        :placeholder-Input="'Email'"
        @validar="validarEmail"
      ></inputPadrao>
        <!-- vmodel n está sendo utilizado por enquanto -->
      <inputPadrao
        :inputType="'password'"
        :input-invalido="senhaInvalida"
        :placeholder-Input="'Senha'"
        @validar="validarSenha"
      ></inputPadrao>
    </form>
    <button @click="login">teste</button>
  </div>
</template>

<script>
import inputPadrao from '../input/inputPadrao.vue'
import { validarFormatoEmail, validarFormatoSenha } from "../../utils/validacoes"
export default {
  name: 'TelaCadastro',
  components: {
    inputPadrao,
  },
  data() {
    return {
      emailValue: '',
      passwordValue: '',
      emailInvalido: false,
      senhaInvalida: false,
    };
  },
  methods: {
    validarEmail(value) {
      this.emailInvalido = !validarFormatoEmail(value)
    },
    validarSenha(value) {
      this.senhaInvalida = !validarFormatoSenha(value)
    },
    login() {
      if(!this.emailInvalido && !this.senhaInvalida) {
        console.log("login feito");
      } else {
        console.log("login incorreto");
      }
    }
  },
}
</script>

<style>

</style>
