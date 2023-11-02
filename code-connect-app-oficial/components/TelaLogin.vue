<template>
  <div>
    <BannerLoginCadastro>
    </BannerLoginCadastro> 
    <FormContainer>
      <form>
        <inputEmail @email-valido="handleEmailValid"></inputEmail>
        <inputPassword @password-valido="handlePasswordValid"></inputPassword>
        <p class="senhaEsquecida">Forgot Password</p>
        <botaoSubmit @enviar="login"></botaoSubmit>
      </form>
      <section class="cadastro">
        <p class="cadastro_texto">Don't have account? <router-link to="/cadastro" class="cadastro_link">Sign UP</router-link></p>
      </section>
    </FormContainer>
  </div>
</template>

<script>
import inputEmail from "./form/inputEmail.vue";
import inputPassword from "./form/inputPassword.vue";
import botaoSubmit from "./form/botaoSubmit.vue";
import BannerLoginCadastro from "./banner/BannerLoginCadastro.vue"
import FormContainer from "./container/FormContainer.vue"
import "/assets/reset.css"
import "/assets/global.css"

export default {
  name: "TelaLogin",
  components: {
    FormContainer,
    BannerLoginCadastro,
    inputEmail,
    inputPassword,
    botaoSubmit,
  },
  data() {
    return {
      emailValid: "",
      passwordValid: "",
    };
  },
  methods: {
    handleEmailValid(email) {
      this.emailValid = email;
    },
    handlePasswordValid(senha) {
      this.passwordValid = senha;
    },
    async login() {
      if (this.emailValid && this.passwordValid) {
        const response = await fetch(
          "https://run.mocky.io/v3/25eb88e7-53e6-40cf-926f-214c6bfa83e1"
        );
        if (response.ok) {
          alert("certo")
          this.$router.push("/");
        }
      }
    },
  }
}
</script>

<style scoped>
  .senhaEsquecida, .cadastro_link {
    text-transform: uppercase;
    color: var(--purple);
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .cadastro {
    text-align: center;
    padding: 40px;
  }
  .cadastro_texto {
    color: var(--gray-light);
  }

</style>