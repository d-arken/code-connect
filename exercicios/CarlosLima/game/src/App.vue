<template>
  <div class="container">
    <h1 class="titulo">Adivinhe o número</h1>
    <input v-model="tentativa" class="resposta" type="number" />
    <button class="tentar" @click="VerificarResposta">Tentar</button>
    <h3 class="resultado">{{ dica }}</h3>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      numeroAleatorio: Math.round(Math.random() * 100) + 1,
      tentativa: 0, // Inicialize tentativa com um valor padrão
      dica: "Número entre 1 a 100"
    };
  },
  methods: {
    VerificarResposta() {
      if (this.tentativa > this.numeroAleatorio) {
        this.dica = `O número é menor que ${this.tentativa}`;
        return;
      }

      if (this.tentativa < this.numeroAleatorio) {
        this.dica = `O número é maior que ${this.tentativa}`;
        return;
      }

      this.dica = `Você acertou`;
    }
  }
};
</script>

<style>
 .container {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh; /* Ajusta a altura para preencher a tela verticalmente */
  justify-content: center; /* Centraliza vertical e horizontalmente */
}

.titulo {
  font-size: 36px;
  text-align: center;
  margin-bottom: 20px; /* Espaço inferior para separar o título da entrada */
}

.resposta {
  font-size: 24px;
  padding: 12px; /* Reduz o preenchimento para um visual mais limpo */
  text-align: center;
  width: 100%; /* Ocupa toda a largura do container */
  border: 2px solid #333; /* Adiciona uma borda para destacar a entrada */
  border-radius: 5px; /* Cantos arredondados */
}

.tentar {
  margin-top: 20px; /* Espaço superior entre o input e o botão */
  padding: 12px 24px; /* Mais preenchimento para o botão */
  font-size: 18px; /* Texto do botão maior */
  background-color: #007BFF; /* Cor de fundo azul */
  color: white; /* Texto branco */
  border: none; /* Remove a borda */
  cursor: pointer; /* Altera o cursor ao passar o mouse */
  transition: background-color 0.3s; /* Efeito de transição suave ao passar o mouse */
  border-radius: 5px; /* Cantos arredondados */
}

.tentar:hover {
  background-color: #0056b3; /* Cor de fundo mais escura ao passar o mouse */
}

.resultado {
  margin-top: 20px; /* Espaço superior para separar o resultado */
  text-transform: uppercase;
  font-weight: bold; /* Texto em negrito para o resultado */
}

.verde {
  color: green;
}

.vermelho {
  color: red;
}

</style>