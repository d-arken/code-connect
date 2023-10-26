<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input 
          type="email" 
          id="email"
          @blur="validarEmail" 
          v-model="email" 
          required>
      </div>
      <span class="error-message" v-if="emailError"> {{ emailError }}</span>
      <div>
        <label for="password">Senha:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Entrar</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "TelaLogin",
  data() {
    return {
      email: "",
      password: "",
      emailError: null
    }
  },
  methods: {
    validarEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;

      if(!emailRegex.test(this.email)) {
        this.emailError = "Formato de email inválido"
      } else {
        this.emailError = null
      }
    },
    async login() {
      if(this.emailError) {
        return
      }
      try {
        const response = await fetch("https://run.mocky.io/v3/25eb88e7-53e6-40cf-926f-214c6bfa83e1")
        if(response.ok) {
          console.log("entrou");
        }
      } catch(error) {
        console.log(error);
      }
    }
  }
};
</script>
<style>
  .error-message {
    color: red;
    border: red;
  }
</style>
