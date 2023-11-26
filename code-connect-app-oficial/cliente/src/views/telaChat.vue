<template>
  <div class="chat">
    <chatMensagens :mensagens="messages" />
    <form class="chat__form" @submit.prevent="sendMessage">
      <div class="teste">
        <input
          type="text"
          class="chat__input"
          placeholder="Digite a mensagem que deseja enviar"
          v-model="newMessage"
          required
        />
        <button type="submit" class="chat__icons">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M13.8554 6.12111L8.1916 11.8227L1.56064 7.74147C0.691759 7.20657 0.867871 5.88697 1.8467 5.60287L17.5022 1.04743C18.3925 0.789782 19.2156 1.62446 18.949 2.51889L14.304 18.1582C14.013 19.1369 12.7082 19.3064 12.1809 18.4325L8.1916 11.8227" stroke="#242424" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <section class="chat__icons" @click="entrarPerfil">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.98493 13.3462C4.11731 13.3462 0.814453 13.931 0.814453 16.2729C0.814453 18.6148 4.09636 19.2205 7.98493 19.2205C11.8525 19.2205 15.1545 18.6348 15.1545 16.2938C15.1545 13.9529 11.8735 13.3462 7.98493 13.3462Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.98489 10.0059C10.523 10.0059 12.5801 7.94779 12.5801 5.40969C12.5801 2.8716 10.523 0.814453 7.98489 0.814453C5.44679 0.814453 3.3887 2.8716 3.3887 5.40969C3.38013 7.93922 5.42394 9.99731 7.95251 10.0059H7.98489Z" stroke="#130F26" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </section>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import chatMensagens from "../components/mensagens/chatMensagens.vue";

export default {
  name: "telaChat",
  components: {
    chatMensagens,
  },
  data() {
    return {
      messages: [],
      newMessage: "",
    };
  },
  methods: {
    async fetchMessages() {
      try {
        const response = await axios.get(
          "http://localhost:3333/mensagem/obterMensagem",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        this.messages = response.data;
      } catch (error) {
        console.error("Erro ao buscar mensagens:", error);
      }
    },
    async sendMessage() {
      try {
        await axios.post(
          "http://localhost:3333/mensagem/adicionarMensagem",
          { content: this.newMessage },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        this.fetchMessages();
        this.newMessage = "";
      } catch (error) {
        console.error("erro ao enviar mensagem", error);
      }
    },
    entrarPerfil() {
      this.$router.push("/perfil");
    }
  },
  created() {
    this.fetchMessages();
  },
};
</script>

<style scoped>
.chat {
  background-color: #e6e8e9;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.chat__form {
  background-color: var(--white);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.teste {
  padding: 40px 30px 15px 20px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  gap: 10px;
  max-width: 768px;
}
.chat__input {
  background-color: #e6e8e9;
  padding: 15px;
  border-radius: 40px;
  flex-grow: 1;
  font-size: 1rem;
}
.chat__icons {
  padding: 8px;
  border-radius: 15px;
  background: #e6e8e9;
  cursor: pointer;
}
</style>
