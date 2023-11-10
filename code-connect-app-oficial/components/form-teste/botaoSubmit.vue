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
    props: {
      evento: enviarFormulario
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
  .botao:active {
    transition: 0.3s;
    background: rgb(82, 76, 76)
  }
</style>