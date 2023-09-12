# Explicação do Script usado no quiz.

import { ref, computed } from 'vue': Aqui, estão sendo importados dois recursos do Vue.js: ref e computed. ref é usado para criar referências reativas a valores, enquanto computed é usado para calcular valores derivados com base em outras propriedades reativas.

const questoes = ref([...]): Aqui, é definida uma variável chamada questoes como uma referência reativa. Ela contém um array de objetos, cada um representando uma questão de um quiz. Cada objeto tem propriedades como questao, responder, opcoes e selecionado, que armazenam informações sobre a pergunta, a resposta correta e as opções de resposta.

const quizConcluido = ref(false): Uma variável reativa quizConcluido é definida para controlar se o quiz foi concluído ou não. Inicialmente, é definida como false, indicando que o quiz não está concluído.

const questaoAtual = ref(0): Uma variável reativa questaoAtual é definida para rastrear a questão atual que está sendo exibida. Inicialmente, é definida como 0, indicando a primeira questão.

const pontuacao = computed(() => {...}): Aqui, é definida uma propriedade computada pontuacao que calcula a pontuação do quiz com base nas respostas selecionadas. Ele percorre todas as questões e compara a opção selecionada com a resposta correta, incrementando a pontuação sempre que a resposta estiver correta.

const pontuacao = computed(() => {...}): Aqui, é definida uma propriedade computada pontuacao que calcula a pontuação do quiz com base nas respostas selecionadas. Ele percorre todas as questões e compara a opção selecionada com a resposta correta, incrementando a pontuação sempre que a resposta estiver correta.

const SetResponder = evt => {...}: Uma função chamada SetResponder é definida para definir a resposta selecionada para a questão atual. Ela recebe um evento (evt) que contém o valor da opção selecionada e atualiza a propriedade selecionado da questão atual com esse valor.

const ProximaQuestao = () => {...}: Uma função chamada ProximaQuestao é definida para avançar para a próxima questão quando o botão "Próxima" é clicado. Ela verifica se ainda existem mais questões para exibir. Se houver, incrementa o valor de questaoAtual, caso contrário, define quizConcluido como true para indicar que o quiz foi concluído.

## Recommended IDE Setup
