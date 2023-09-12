<script setup>
   import { ref, computed } from 'vue'

   const questoes = ref([
    {
      questao: 'Qual o pais mais populoso do mundo ?',
      responder: 0,
      opcoes: [
        'China',
        'Estados unidos',
        'Africa'
      ],
      selecionado: null
    },
    {
    questao: 'Qual o maior ser vivo do mundo ?',
    responder: 1,
    opcoes: [
      'Baleia azul',
      'Fungos',
      'Girafa'
    ],
    selecionado: null
  },
  {
    questao: 'Quantas letras tem a maior palavra da lingua portuguesa ? ',
    responder: 0,
    opcoes: [
      '46',
      '48',
      '40'
    ],
    selecionado: null
  },
  {
    questao: 'Em que ano aconteceu a segunda guerra mundial ?',
    responder: 0,
    opcoes: [
      'Entre 1939 a 1945',
      'Entre 1839 a 1845',
      'Entre 1739 a 1745'
    ],
    selecionado: null
  },    
   ])

   const quizConcluido = ref(false)
   const questaoAtual = ref(0)

   const pontuacao = computed(() => {
    let value = 0
    questoes.value.map(q => {
      if (q.selecionado == q.responder){
        value++
      }
    })
    return value
   })

   const getquestaoAtual = computed(() => {
    let questao = questoes.value[questaoAtual.value]
    questao.index = questaoAtual.value
    return questao
   })

   const SetResponder = evt => {
    questoes.value[questaoAtual.value].selecionado = evt.target.value
    evt.target.value = null
   }
   
   const ProximaQuestao = () => {
    if (questaoAtual.value < questoes.value.length - 1){
      questaoAtual.value++
    }else {
      quizConcluido.value = true
    }
   } 
</script>

<template>
  <main class="app">
    <h1>QUIZ</h1>
    <section class="quiz" v-if="!quizConcluido">
      <div class="quiz-info">
        <span class="questoes"> {{ getquestaoAtual.questao }} </span>
        <span class="pontuacao"> Pontuação {{ pontuacao }} / {{ questoes.length }} </span>
      </div>

      <div class="opcoes">
        <label v-for="(opcao, index) in getquestaoAtual.opcoes" :key="index" :class="[
          'opcao',
          getquestaoAtual.selecionado == index
            ? index == getquestaoAtual.responder
              ? 'correta'
              : 'errada'
            : '',
          getquestaoAtual.selecionado != null && index != getquestaoAtual.selecionado
            ? 'desabilitar'
            : '',
        ]">
          <input type="radio" :name="getquestaoAtual.index" :value="index" v-model="getquestaoAtual.selecionado"
            :disabled="getquestaoAtual.selecionado" @change="SetResponder" />
          <span>{{ opcao }}</span>
        </label>
      </div>

      <button @click="ProximaQuestao" :disabled="!getquestaoAtual.selecionado">
        {{
          getquestaoAtual.index === questoes.length - 1
          ? 'Terminar'
          : getquestaoAtual.selecionado == null
            ? 'Selecione uma opção'
            : 'Próxima Questão'
        }}
      </button>
    </section>

    <section v-else>
      <h2>Você finalizou o quiz</h2>
      <p>Sua pontuação foi {{ pontuacao }} / {{ questoes.length }}</p>
    </section>
  </main>
</template>


<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "MontSerrat", sans-serif;
}

body{
  background-color: #8458c2;
  color: #FFF;
}

.app{
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 2rem;
  min-height: 100vh;
}

h1{
  font-size: 2em;
  margin-bottom: 2rem;
  color: #FFF;
}

.quiz{
  background-color: #4e376e;
  padding: 1rem;
  width: 100%;
  max-width: 640px;
  border-radius: 0.5rem;
}

.quiz-info{
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.quiz-info .questoes{
   color: #8f8f8f;
   font-size: 1.25rem; 
}

.quiz-info .pontuacao{
   color: #fff;
   font-size: 1.25rem;
   padding-left: 8px;
}

.opcoes{
  margin-bottom: 1rem;
}
 
.opcao{
  display: block;
  padding: 1rem;
  background-color: #271c36;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

.opcao:hover{
  background-color: #2d213f;
}

.opcao.correta{
   background-color: #2cce7d;
}

.opcao.errada{
    background-color: #ff5a5f;
}

.opcao:last-of-type {
  margin-bottom: 0;
}

.opcao input {
  display: none;
}

button {
  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: #2cce7d;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.25rem;
  border-radius: 0.2rem;
}

button.disabled {
  opacity: 0.5;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

p {
  color: #8f8f8f;
  font-size: 1.25rem;
  text-align: center;
}
</style>
