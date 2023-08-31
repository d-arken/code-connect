<template>
  <h1>{{ title }}</h1>
  <img alt="Vue logo" src="./assets/logo.png" @click="alert('OIii')" />

  <p>Nome: {{ name }}</p>
  <p>Sobrenome: {{ sobrenome }}</p>
  <p>{{ nomeCompleto }}</p>
  <input :value="name" @input="($event) => (this.name = $event.target.value)" />
  <input v-model="sobrenome" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      name: "",
      sobrenome: "",
    };
  },
  props: {
    title: String,
  },
  methods: {
    alert(a) {
      alert(a);
    },
  },
  computed: {
    nomeCompleto() {
      return this.name + " " + this.sobrenome;
    },
  },
};
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
</style>
