<template>
  <div class="quiz">
    <img src="quiz.jpg" class="botao" />
    <h3 class="pergunta">{{ quiz[quizAtual].pergunta }}</h3>
    <div class="reposta-container">
      <AlternativaQuiz
        @click="confere(resposta)"
        v-for="(resposta, alternativa) in quiz[quizAtual].alternativas"
        :key="alternativa"
        :alternativa="alternativa"
      />
    </div>
  </div>
</template>

<script>
import AlternativaQuiz from "./AlternativaQuiz.vue";

export default {
  name: "JogoQuiz",
  components: { AlternativaQuiz },
  data() {
    return {
      quizAtual: 0,
      quiz: [
        {
          pergunta: "O que é um pontinho colorido no céu",
          alternativas: {
            Pombo: false,
            Estrela: false,
            Passaro: false,
            "Padre do balão": true,
          },
        },
        {
          pergunta: "Qual é a capital da França?",
          alternativas: {
            Londres: false,
            Berlim: false,
            Paris: true,
            Brasil: false,
          },
        },
        {
          pergunta: "Qual é o maior planeta do nosso sistema solar?",
          alternativas: {
            Terra: false,
            Vênus: false,
            Júpiter: true,
          },
        },
      ],
    };
  },
  props: {},
  methods: {
    confere(acertou) {
      if (acertou) {
        alert("Parabéns você acertou");

        if (this.quizAtual == this.quiz.length - 1) {
          const restart = confirm(
            "Parabéns você é muito inteligente! Quer recomençar?"
          );

          if (restart) {
            this.quizAtual = 0;
          }
        } else {
          this.quizAtual++;
        }
      } else {
        alert("Errow");
      }
    },
    alert(v) {
      alert(v);
    },
  },
  computed: {},
  mounted() {
    console.log("monteii");
    console.log(this.$route);
  },
};
</script>
<style scoped>
.pergunta {
  padding: 20px;
  border-top: 1px solid purple;
  border-bottom: 1px solid purple;

  font-size: 32px;
  background: rgba(130, 0, 130, 0.2);

  color: rgb(255, 192, 32);
  text-shadow: 2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000;
}

.resposta {
  padding: 20px;
  background: rgba(255, 192, 32, 0.4);
  border-radius: 60px;

  margin-left: 42px;
  margin-right: 42px;

  font-weight: bold;

  cursor: pointer;
  box-sizing: border-box;

  border: 1px solid transparent;

  color: #111;

  &:hover {
    border: 1px solid purple;
  }
}
</style>
