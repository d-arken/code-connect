<template>
  <div>
    <input 
      class="botao"
      type="submit"
      @click="enviarFormulario"
      value="Log in">
  </div>
</template>

<script>
  export default {
    name: "botaoSubmit",
    methods: {
      enviarFormulario() {
        this.$emit("enviar")
      }
    }
  }
</script>

<style scoped>
  .botao {
    width: 100%;
    background: var(--bg-button);
    padding: 14px 24px;
    border-radius: 30px;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--white);
    max-width: 600px;
  }
</style>