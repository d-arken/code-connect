<!-- AQUI VAI SER ONDE O STORGE VAI ENTRAR -->


<template>
  <div class="chat__mensagens">
    <div class="mensagens" v-for="(mensagem, index) in mensagens" :key="index">
      <section class="dados">
        <span class="dados__nome"> {{ mensagem.name }} </span>
        <span class="dados__horario">enviado às {{ mensagem.timestamp }}h</span>
      </section>
      <p>{{ mensagem.content}}</p>
    </div>
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
.chat__mensagens {
  padding: 120px 30px 30px 20px;
  display: flex;
  flex-direction: column-reverse;
}
.chat__mensagens div {
  padding: 15px;
  width: 100%;
  max-width: 600px;
  align-self: center;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 15px;
  line-height: 22px;
}
.message--self {
  border-radius: 10px 10px 0px 10px;
  /* acho que é legal por uma cor diferente em alguma mensagem sua */
}
.mensagens {
  border-radius: 10px 10px 10px 0px;
  align-self: flex-start;
  background: white;
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
}
</style>
