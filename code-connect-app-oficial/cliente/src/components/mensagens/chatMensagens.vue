<!-- AQUI VAI SER ONDE O STORGE VAI ENTRAR -->

<template>
  <div class="mensagens" v-for="(mensagem, index) in mensagens" :key="index">
    <section class="dados">
      <span class="dados__nome"> {{ mensagem.name }} </span>
      <span class="dados__horario">enviado às {{ mensagem.timestamp }}h</span>
    </section>
    <p class="mensagem">{{ mensagem.content }}</p>
  </div>
</template>

<script>
export default {
  name: "chatMensagens",
  props: {
    mensagens: Object,
  },
};
</script>

<style scoped>
.mensagens {
  border-radius: 10px 10px 10px 0px;
  align-self: flex-start;
  padding: 15px;
  width: 100%;
  align-self: center;
  font-size: 1rem;
  font-weight: 500;
  margin: 20px 0 20px 0;
  line-height: 22px;
  border: solid #3A444C 1px;
}
.dados {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
.dados__nome {
  color: cadetblue;
  font-weight: 700;
}
.dados__horario {
  font-size: 10px;
  color: var(--white);
}
.mensagem{
  color: var(--white);
  word-wrap: break-word;
}
</style>
