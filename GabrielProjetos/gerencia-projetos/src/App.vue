<template>
  <div>
    <header class="cabecalho">
      <h1 class="titulo">Qual próximo projeto?</h1>
      <p class="subTitulo">
        <span> &lt;</span>
        Capture ideias e mantenha o foco.
        <span> /&gt; </span>
      </p>
    </header>
    <main>
      <section class="formulario">
        <form class="formulario_form" @submit.prevent="adicionarProjeto">
          <input
            v-model="novoProjeto" 
            class="formulario_input"
            type="text"
            placeholder="Adicionar um novo projeto"
          />
          <input 
            class="formulario_botao" 
            type="submit" 
            value="Adicionar" />
        </form>
      </section>
      <section class="projetosPendentes">
        <div class="saida">
          <div>
            <span>Total: {{ totalDeProjetos }}</span>
          </div>
          <div>
            <span>Concluídas: {{ projetosConcluidos }} de {{ totalDeProjetos }}</span>
          </div>
        </div>
        <div class="projetos">
          <ul >
            <li 
            class="projeto" 
            v-for="(projeto, index) in listaProjetos" 
            :key="index">
              <input
                type="checkbox" 
                v-model="projeto.concluido">
              <p :class="{'concluido': projeto.concluido}">{{ projeto.nomeProjeto }}</p>
              <button class="botaoRemover" @click="removerProjeto(index)">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 64 64">
                <path d="M 28 7 C 25.243 7 23 9.243 23 12 L 23 15 L 13 15 C 11.896 15 11 15.896 11 17 C 11 18.104 11.896 19 13 19 L 15.109375 19 L 16.792969 49.332031 C 16.970969 52.510031 19.600203 55 22.783203 55 L 41.216797 55 C 44.398797 55 47.029031 52.510031 47.207031 49.332031 L 48.890625 19 L 51 19 C 52.104 19 53 18.104 53 17 C 53 15.896 52.104 15 51 15 L 41 15 L 41 12 C 41 9.243 38.757 7 36 7 L 28 7 z M 28 11 L 36 11 C 36.552 11 37 11.449 37 12 L 37 15 L 27 15 L 27 12 C 27 11.449 27.448 11 28 11 z M 32 23.25 C 32.967 23.25 33.75 24.034 33.75 25 L 33.75 45 C 33.75 45.966 32.967 46.75 32 46.75 C 31.033 46.75 30.25 45.966 30.25 45 L 30.25 25 C 30.25 24.034 31.033 23.25 32 23.25 z M 40.007812 23.25 C 40.972813 23.284 41.728313 24.094547 41.695312 25.060547 L 40.998047 45.146484 C 40.965047 46.092484 40.190953 46.836937 39.251953 46.835938 C 39.230953 46.835938 39.210453 46.833984 39.189453 46.833984 C 38.224453 46.799984 37.468953 45.989438 37.501953 45.023438 L 38.197266 24.9375 C 38.231266 23.9725 39.039813 23.223 40.007812 23.25 z M 23.990234 23.251953 C 24.954234 23.228953 25.766781 23.973453 25.800781 24.939453 L 26.498047 45.025391 C 26.532047 45.991391 25.776547 46.801938 24.810547 46.835938 C 24.790547 46.835937 24.769047 46.835938 24.748047 46.835938 C 23.810047 46.835938 23.033 46.091484 23 45.146484 L 22.302734 25.060547 C 22.268734 24.094547 23.024234 23.285953 23.990234 23.251953 z"></path>
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import "./assets/reset.css";
import "./assets/global.css";
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  data() {
    return {
      novoProjeto: "",
      listaProjetos: [
        {nomeProjeto: "gabriel", concluido: false},
        {nomeProjeto: "tiago", concluido: false},
        {nomeProjeto: "nina", concluido: false}
      ]
    };
  },
  methods: {
    adicionarProjeto() {
      this.listaProjetos.push({nomeProjeto: this.novoProjeto, concluido: false})
    },
    removerProjeto(index) {
      this.listaProjetos.splice(index, 1)
      console.log(this.listaProjetos);
    }
  },
  computed: {
    totalDeProjetos() {
      return this.listaProjetos.length
    },
    projetosConcluidos() {
      return this.listaProjetos.filter((projeto) => projeto.concluido).length
    }
  }
};
</script>

<style scoped>

.cabecalho {
  height: 180px;
  background: var(--bg-cabecalho);
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.titulo {
  color: var(--white);
  font-family: Roboto, sans-serif;
  font-size: 32px;
}
.subTitulo {
  color: var(--white);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  margin-top: 8px;
}
.subTitulo span {
  color: var(--purple);
}
.formulario_form {
  display: flex;
  justify-content: center;
  margin-top: -20px;
  padding: 0 12px;
  gap: 6px;
}
.formulario_input {
  background: var(--bg-input);
  width: 100%;
  height: 50px;
  max-width: 610px;
  border-radius: 10px;
  padding-left: 12px;
  color: var(--input-place-holder);
}
.formulario_botao {
  background: var(--bg-button);
  color: var(--white);
  width: 100px;
  height: 50px;
  border-radius: 10px;
  cursor: pointer;
}
.formulario_input::placeholder {
  color: var(--input-place-holder);
}
.projetosPendentes {
  margin: 28px auto;
  width: 90%;
  max-width: 720px;
}

.saida {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}
.saida span {
  color: var(--white)
}
.projeto {
  background: var(--bg-input);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding: 24px 24px 24px 12px;

}
.projeto p {
  color: var(--white);
}

.concluido {
  text-decoration: line-through;
  color: #999;
}

.botaoRemover {
  fill: var(--input-place-holder);
}

</style>


