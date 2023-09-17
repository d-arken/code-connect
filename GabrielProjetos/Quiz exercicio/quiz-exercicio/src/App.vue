<template>
  <div class="quiz">
    <h1 v-if="!jogoIniciado"> Bem-vindo ao quiz sobre Gabriel! </h1>
    
    <div v-if="!jogoIniciado">
      <button @click="iniciarJogo">Iniciar Jogo!</button>
    </div>

    <div class="buttons" v-if="jogoIniciado && !jogoFinalizado">
      <h1>{{ perguntalAtual.pergunta }}</h1>

      <button 
        v-for="(opcao, index) in perguntalAtual.opcoesDeReposta"
        :key = "index"
        @click="verificarResposta(opcao)"
        :class="{'opcaoClicada': opcaoClicada == opcao}"
      > {{ opcao }}
      </button>
      <button @click="proximaPergunta">Confirmar resposta</button>
    </div>

    <div v-if="jogoFinalizado">
      <h1>Quiz Finalizado!🔥</h1>
      <h2>Seus Acertos : {{ acertos}}</h2>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data() {
    return {
      opcaoClicada: "",
      acertos: 0,
      jogoIniciado: false,
      jogoFinalizado: false,
      perguntalAtual: {},
      inducePerguntaAtual: 0,
      perguntaRespondida: false,
      perguntasQuiz: [
        {
          pergunta: "Quantos anos Gabriel tem?",
          opcoesDeReposta: [10, 20, 30, 40],
          resposta: 20
        },
        {
          pergunta: "Onde Gabriel mora?",
          opcoesDeReposta: ["Rio Grande do Sul", "São Paulo", "Rio de Janeiro", "Minas Gerais"],
          resposta: "Rio Grande do Sul"
        },
        {
          pergunta: "Qual Linguagem de programação Gabriel está aprendendo no momento?",
          opcoesDeReposta: ["Java", "Ruby", "PHP", "Javascript"],
          resposta: "Javascript"
        },
        {
          pergunta: "Quantos gato ele tem?",
          opcoesDeReposta: [2, 4, 1,"nenhum"],
          resposta: 2
        }
      ],
    }
  },
  props: {},
  methods: {
    iniciarJogo() {
      this.jogoIniciado = true
      this.carregarPergunta()
    },
    carregarPergunta() {
      this.perguntalAtual = this.perguntasQuiz[this.inducePerguntaAtual]
      this.perguntaRespondida = false
    },
    verificarResposta(resposta){
      if(!this.perguntaRespondida){
        this.opcaoClicada = resposta
        if(resposta == this.perguntalAtual.resposta) {
          this.acertos++
        }
        this.perguntaRespondida = true
      }
    },
    proximaPergunta() {
      this.inducePerguntaAtual++;
      if(this.inducePerguntaAtual < this.perguntasQuiz.length) {
         this.carregarPergunta();
      } else {
        this.jogoFinalizado = true
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.quiz button {
  width: 300px;
  height: 35px;
  margin-bottom: 10px;
}

.opcaoClicada {
  background: rgb(52, 52, 192);
}
</style>
