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
  height: 100vh; 
  justify-content: center; 
}

.titulo {
  font-size: 36px;
  text-align: center;
  margin-bottom: 20px; 
}

.resposta {
  font-size: 24px;
  padding: 12px; 
  text-align: center;
  width: 100%; 
  border: 2px solid #333; 
  border-radius: 5px; 

.tentar {
  margin-top: 20px; 
  padding: 12px 24px; 
  font-size: 18px; 
  background-color: #007BFF; 
  color: white; 
  border: none; 
  transition: background-color 0.3s; 
  border-radius: 5px; 

.tentar:hover {
  background-color: #0056b3; 
}

.resultado {
  margin-top: 20px; 
  text-transform: uppercase;
  font-weight: bold; 
}

.verde {
  color: green;
}

.vermelho {
  color: red;
}

</style>