<template>
  <div>
    <bannerLoginCadastro>
    </bannerLoginCadastro>
    <formGroup>
      <form @submit.prevent="validarFormulario">
        <inputPadrao 
          :inputType="'email'"
          :input-invalido="erros['email']?.invalid"
          :placeholder-input="'Email'"
          @pegarValueInput="pegarValueEmail"
        />
        <span class="mensagem-erro">{{erros['email']?.mensagem  }}</span>
        <inputPadrao
          :inputType="'email'"
          :input-invalido="erros['confirmarEmail']?.invalid"
          :placeholder-input="'Confirmar Email'"
          @pegarValueInput = "pegarConfirmarEmailValue"
        />
        <span class="mensagem-erro">{{ erros['confirmarEmail']?.mensagem }}</span>
        <inputPadrao
          :inputType="'password'"
          :input-invalido="erros['senha']?.invalid"
          :placeholder-input="'Senha'"
          @pegarValueInput = "pegarSenhaValue"
        />
      </form>
      <span class="mensagem-erro">{{ erros['senha']?.mensagem }}</span>
      <div class="padding">
        <p>Já possui uma conta? <router-link class="link" to="/login">Log in</router-link></p>
      </div>
      <botaoPadrao
        :valueBotao="'Cadastrar-se'"
        :evento="validarFormulario"
      />
    </formGroup>
  </div>
</template>
<script>
  import bannerLoginCadastro from "../components/banner/bannerLoginCadastro.vue";
  import formGroup from "../components/form/formGroup.vue"
  import inputPadrao from "../components/input/inputPadrao.vue";
  import botaoPadrao from "../components/button/botaoPadrao.vue";
  import { validarFormatoEmail, validarFormatoSenha} from "../assets/utils/validacoes"
  import "../assets/css/reset.css"
  import "../assets/css/global.css"

  export default {
    name: "TelaCadastro",
    components: {
      bannerLoginCadastro,
      formGroup,
      inputPadrao,
      botaoPadrao
    },
    data() {
      return {
        emailValue: "",
        confirmarEmailValue: "",
        senhaValue: "",
        erros: {}
      }
    },
    methods: {
      pegarValueEmail(value) {
        this.emailValue = value
      },
      pegarConfirmarEmailValue(value) {
        this.confirmarEmailValue = value
      },
      pegarSenhaValue(value){
        this.senhaValue = value
      },
      validarFormulario() {
        this.erros = {}
        
        if(!validarFormatoEmail(this.emailValue)) {
          this.erros["email"] = {invalid: true, mensagem: "Insira o endereço de email no formato: nome@example.com"}
        }
        if(!validarFormatoEmail(this.confirmarEmailValue)) {
          this.erros["confirmarEmail"] = {invalid: true, mensagem: "Email não coincidem"}
        }
        if(!validarFormatoSenha(this.senhaValue)) {
          this.erros["senha"] = {invalid: true, mensagem: "Senha deve conter pelo menos um número e no minimo oito caracteres."}
        }
        if(Object.keys(this.erros).length === 0) {
          this.$router.push("/login")
        }
      }
    },
};
</script>
<style>
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
</style>
