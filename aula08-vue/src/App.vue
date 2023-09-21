<template>
  <header class="header">
    <h3>Central de jogos +1code</h3>
    <router-link class="link" to="/jogo/quiz">Quiz</router-link>
    <router-link class="link" to="/jogo/jogo-da-velha"
      >Jogo da velha</router-link
    >
  </header>
  <section>
    <router-view />
  </section>
  <footer></footer>
</template>

<script>
export default {
  name: "App",
  mounted() {
    console.log(this.$router);

    console.log(this.$route);
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  width: 100%;
  font-size: 20px;
  padding: 16px 32px;
  border-bottom: 1px solid purple;

  color: rgb(255, 192, 32);
  text-shadow: 2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000;
}

.link {
  margin: 0 12px;
  color: rgb(255, 192, 32);
}
</style>
