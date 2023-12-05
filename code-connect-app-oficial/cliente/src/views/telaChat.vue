<script setup>
import chatMensagens from "@/components/mensagens/chatMensagens.vue";
import navBar from "@/components/navBar.vue";

import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const mensagens = computed(() => store.state.chat.mensagens);
const novaMensagem = ref("");

const buscarMensagens = () => {
  store.dispatch("buscarMensagens");
};

const enviarMensagem = () => {
  store.dispatch("enviarMensagem", novaMensagem.value);
  novaMensagem.value = ""
};

onMounted(() => {
  buscarMensagens();
});
</script>

<template>
  <div class="chat-page">
    <navBar />
    <main class="chat-main">
      <form class="chat-form" @submit.prevent="enviarMensagem">
        <input
          class="chat-input"
          placeholder="'Digite a mensagem que deseja enviar'"
          v-model="novaMensagem"
          required
        />
        <button class="chat-button">Enviar</button>
      </form>
      <div class="chat-mensagens">
        <chatMensagens :mensagens="mensagens" />
      </div>
    </main>
  </div>
</template>
<style scoped>
.chat-page {
  min-height: 100vh;
  display: flex;
  justify-content: center; 
  background-color: #17202a;
}
.chat-main {
  border: solid #3a444c 1px;
  width: 85%;
  max-width: 600px;
}
.chat-form {
  border-bottom: solid #3a444c 1px;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 20px;
}
.chat-mensagens {
  padding: 20px 30px 0px 30px;
  display: flex;
  flex-direction: column-reverse;
}
.chat-input {
  padding: 18px;
  border-radius: 20px;
  color: white;
  width: 100%;
  border: #3a444c solid 1px;
  font-size: 1rem;
}
.chat-button {
  background-color: #1da1f2;
  color: white;
  border-radius: 20px;
  margin-left: 20px;
  padding: 18px;
  cursor: pointer;
}
@media (max-width: 480px) {
  .chat-page {
    flex-direction: column;
    justify-content: flex-start;
  }
  .chat-main {
    width: 100%;
  }
}
</style>
