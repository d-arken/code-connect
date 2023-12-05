<script setup>
import navBar from "@/components/navBar.vue";
import customInput from "@/components/custom/customInput.vue";
import customButton from "@/components/custom/customButton.vue";
import { useStore } from "vuex";
import { onMounted, computed, ref } from "vue";

const store = useStore();
const dadosAtual = computed(() => store.state.perfil.dadosAtual)

const dadosAlterado = ref({
      name: '',
      email: '',
      password: '',
    });

const buscarPerfil = () => {
  store.dispatch("buscarPerfil", )
}

const alterarPerfil = async () => {
  await store.dispatch("alterarPerfil", dadosAlterado.value)
}

onMounted(() => {
  buscarPerfil();
})
</script>

<template>
  <div class="perfil-page">
    <navBar />
    <main class="perfil-main">
      <div class="perfil-banner"></div>
      <form @submit.prevent="alterarPerfil" class="perfil_form">
        <div class="form-container">
          <div class="form-imagem">
            <img src="../assets/img/fotoPerfil.svg" />
          </div>
          <customInput
            :inputType="'Text'"
            :placeholderInput="'Nome'"
            :valueDefault="dadosAtual.name"
            :valueInput="(e) => (dadosAlterado.name = e.target.value)"
            :customStyle="{
              background: 'transparent',
              border: '#3a444c 1px solid',
              color: 'white',
            }"
          />
          <customInput
            :inputType="'Email'"
            :placeholderInput="'Email'"
            :valueDefault="dadosAtual.email"
            :valueInput="(e) => (dadosAlterado.email = e.target.value)"
            :customStyle="{
              background: 'transparent',
              border: '#3a444c 1px solid',
              color: 'white',
            }"
          />
          <customInput
            :inputType="'Password'"
            :placeholderInput="'Alterar Senha'"
            :valueInput="(e) => (dadosAlterado.password = e.target.value)"
            :customStyle="{
              background: 'transparent',
              border: '#3a444c 1px solid',
              color: 'white',
            }"
          />
          <div class="form-button">
            <customButton :valueButton="'Enviar'" :evento="alterarPerfil"/>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<style scoped>
.perfil-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #17202a;
}
.perfil-main {
  border: solid #3a444c 1px;
  width: 85%;
  max-width: 600px;
}
.perfil-banner {
  height: 150px;
  background: #3a444c;
}
.form-container {
  width: 16rem;
  margin: 0 auto;
}
.form-imagem {
  border-radius: 40px;
  text-align: center;
  margin-top: -5rem;
}
.form-button {
  display: flex;
  width: 100%;
}

@media (max-width: 480px) {
  .perfil-page {
    flex-direction: column;
    justify-content: flex-start;
  }
  .perfil-main {
    width: 100%;
  }
}
</style>
