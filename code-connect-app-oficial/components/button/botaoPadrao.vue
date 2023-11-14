<template>
  <div>
    <input
      class="botao"
      type="submit"
      @click="evento"
      :value="valueBotao"
    />
  </div>
</template>

<script>
export default {
  name: 'botaoSubmit',
  props: {
    evento: Function,
    valueBotao: String,
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
    max-width: 400px;
    margin-top: 40px;
    margin-bottom: 40px;
    cursor: pointer;
  }


</style>