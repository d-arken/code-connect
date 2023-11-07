<template>
  <div>
    <input 
      class="botao"
      type="submit"
      @click="evento"
      value="Enviar">
  </div>
</template>

<script>
  export default {
    name: "botaoSubmit",
    methods: {},
    props: {
      evento: Function
    }
  }
</script>

<style scoped>
  .botao {
    width: 50%;
    background: rgb(180, 165, 165);
    margin: 20px 0;
    padding: 14px 24px;
    border-radius: 30px;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--white);
  }
  .botao:active {
    transition: 0.5s;
    background: rgb(82, 76, 76)
  }
</style>