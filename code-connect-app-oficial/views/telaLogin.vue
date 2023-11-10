<template>
  <div>
    <bannerLoginCadastro>
    </bannerLoginCadastro> 
    <formGroup>
      <form>
        <inputPadrao
          :inputType="'Email'"
          :placeholder-input="'Email'"
          :inputInvalido = "loginInvalido"
          @pegarValueInput="pegarEmailValue"
        />
        <inputPadrao 
          :inputType="'password'"
          :placeholder-input="'Senha'"
          :inputInvalido = "loginInvalido"
          @pegarValueInput="pegarSenhaValue"
        />
        <span v-if="loginInvalido" class="mensagem-erro"> E-mail ou senha incorretos. </span>
        <p class="senhaEsquecida">Forgot Password</p>
      </form>
      <botaoPadrao
        :evento="validarFormulario"
      />
      <section class="cadastro">
        <p class="cadastro_texto">Don't have account? <router-link to="/cadastro" class="cadastro_link">Sign UP</router-link></p>
      </section>
    </formGroup>
  </div>
</template>

<script>
import bannerLoginCadastro from "../components/banner/bannerLoginCadastro.vue"
import formGroup from "../components/form/formGroup.vue"
import inputPadrao from "../components/input/inputPadrao.vue"
import botaoPadrao from "../components/button/botaoPadrao.vue"
import "../assets/css/reset.css"
import "../assets/css/global.css"

export default {
  name: "TelaLogin",
  components: {
    bannerLoginCadastro,
    formGroup,
    inputPadrao,
    botaoPadrao
  },
  data() {
    return {
      emailValue: "",
      passwordValue: "",
      loginInvalido: false,
      contaValida: {
        email: "digi@gmail.com",
        senha: "digi1234"
      }
    };
  },
  methods: {
    pegarEmailValue(email) {
      this.emailValue = email;
    },
    pegarSenhaValue(senha) {
      this.passwordValue = senha;
    },
    validarFormulario() {
      const autenticacao = this.emailValue == this.contaValida.email && this.passwordValue == this.contaValida.senha
      if(!autenticacao) {
        this.loginInvalido = true
        return 
      }
      this.$router.push("/");
    },
  }
}
</script>

<style scoped>
  .senhaEsquecida, .cadastro_link {
    text-transform: uppercase;
    color: var(--purple);
    padding-top: 40px;
  }
  .cadastro_texto {
    color: var(--gray-light);
    padding-bottom: 40px;
  }

</style>