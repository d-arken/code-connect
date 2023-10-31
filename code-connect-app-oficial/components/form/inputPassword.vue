<template>
  <div>
    <div>
      <input
        minlength="8"
        class="inputPassword"
        :class="{'error': erroMensagem}"
        type="password" 
        placeholder="Senha"
        v-model="senha"
        @blur="validarSenha"
        required>
    </div>
      <span class="mensagemErro" v-if="erroMensagem">A senha deve conter pelo menos 8 caracteres.</span>
  </div>
</template>

<script>
  export default {
    name: "inputPassword",
    data() {
      return {
        senha: "",
        erroMensagem: false
      };
    },
    methods: {
      validarSenha() {
        if(!this.senha) {
          this.erroMensagem = false
        }
        if(this.senha && this.senha.length < 8){
          this.erroMensagem = true
          return
        }
        if(this.senha.length >= 8) {
          this.erroMensagem = false
          this.$emit("password-valido", this.senha)
        }
      }
    },

  }
</script>

<style scoped>
.inputPassword {
    background: var(--bg-input);
    padding: 13px 20px;
    max-width: 600px;
    height: 50px;
    width: 100%;
    border-radius: 30px;
    font-size: 16px;
    outline: none;
    margin-top: 20px;
  }
  .inputPassword::placeholder {
    color: var(--color-placehold);
  }
  .inputPassword:focus {
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