<template>
  <div class="container">
    <h1 class="titulo">Advinhe o número</h1>

    <div>
      <input v-model="dificuldade" id="facil" type="radio" value="10" />
      <label for="facil">Fácil</label>

      <input v-model="dificuldade" id="medio" type="radio" value="100" />
      <label for="medio">Médio</label>

      <input v-model="dificuldade" id="dificil" type="radio" value="1000" />
      <label for="dificil">Difícil</label>
    </div>
    <input v-model="tentativa" class="resposta" type="number" />
    <button class="tentar" @click="verificarResposta">Tentar</button>
    <h3 class="resultado">{{ dica }}</h3>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      dificuldade: 10,
      numeroAleatorio: null,
      tentativa: null,
      dica: "",
    };
  },
  methods: {
    verificarResposta() {
      if (this.tentativa > this.numeroAleatorio) {
        this.dica = `O número é menor que ${this.tentativa}`;
        return;
      }
      if (this.tentativa < this.numeroAleatorio) {
        this.dica = `O número é maior que ${this.tentativa}`;
        return;
      }

      this.dica = "Você acertou!";
    },
  },
  mounted() {
    this.numeroAleatorio = Math.round(Math.random() * this.dificuldade) + 1;
    this.dica = `Número entre 1 a ${this.dificuldade}`;
  },
  watch: {
    dificuldade(novo) {
      this.dica = `Número entre 1 a ${novo}`;
      this.numeroAleatorio = Math.round(Math.random() * novo) + 1;
    },
  },
};
</script>
<style>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.titulo {
  width: 100%;
  text-align: center;
}

.resposta {
  font-size: 24px;
  padding: 16px 8px;
  text-align: center;
}

.tentar {
  margin-top: 16px;
  padding: 12px;
  font-size: 16px;
}

.resultado {
  margin-top: 24px;
  text-transform: uppercase;
}

.verde {
  color: green;
}

.vermelho {
  color: red;
}
</style>
