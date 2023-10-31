<template>
  <div>
    <div class="logo">
    </div> 
    <form class="formulario">
      <inputEmail @email-valido="handleEmailValid"></inputEmail>
      <inputPassword @password-valido="handlePasswordValid"></inputPassword>
      <p class="senhaEsquecida">Forgot Password</p>
      <botaoSubmit @enviar="login"></botaoSubmit>
    </form>
    <section class="cadastro">
      <p class="cadastro_texto">Don't have account? <router-link to="/cadastro" class="cadastro_link">Sign UP</router-link></p>
    </section>
  </div>
</template>

<script>
import inputEmail from "./form/inputEmail.vue";
import inputPassword from "./form/inputPassword.vue";
import botaoSubmit from "./form/botaoSubmit.vue";
import "/assets/reset.css"
import "/assets/global.css"


export default {
  name: "TelaLogin",
  components: {
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
  .logo {
    height: 375px;
    background: url(../assets/img/logo.png);
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    z-index: 0;
  }
  .formulario {
    background: var(--white);
    border-radius: 28px 28px 0px 0px;
    padding-top: 20px;
    padding-left:30px;
    padding-right:30px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    top: -35px;
    z-index: 1;
  }
  .senhaEsquecida, .cadastro_link {
    text-transform: uppercase;
    color: var(--purple);
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .cadastro {
    text-align: center;
  }
  .cadastro_texto {
    color: var(--gray-light);
  }
</style>