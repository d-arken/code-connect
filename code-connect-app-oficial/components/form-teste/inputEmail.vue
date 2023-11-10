<template>
  <div>
    <input
    class="inputEmail"
    :class="{'error': erroMensagem}"
    type="email" 
    v-model="email"
    @blur="validarEmail"
    placeholder="Email"
    required>
    <span class="mensagemErro" v-if="erroMensagem">Email inválido</span>
  </div>
</template>

<script>
  export default {
    name: "inputEmail",
    data() {
      return {
        email: "",
        erroMensagem: null
      };
    },
    methods: {
      validarEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;

        if(this.email && !emailRegex.test(this.email)) {
          this.erroMensagem = true
        } else {
          this.erroMensagem = false
          this.$emit('email-valido', this.email)
        }
      }
    },
  }
</script>

<style scoped>
  .inputEmail {
    background: var(--bg-input);
    padding: 13px 20px;
    height: 50px;
    width: 100%;
    max-width: 600px;
    border-radius: 30px;
    font-size: 16px;
    outline: none;
    margin-top: 20px;
  }
  .inputEmail::placeholder {
    color: var(--color-placehold);
  }

  .inputEmail:focus {
    border: 2px solid var(--outline-input);
  }

  .mensagemErro {
    display: block;
    color: var(--error);
  }
  .error {
    border: 2px solid var(--error);
  }
</style>