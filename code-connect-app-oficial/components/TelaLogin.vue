<template>
  <div>
    <header class="cabecalho">
      <h1 class="cabecalho__titulo">code.connect</h1>
      <p class="cabecalho__welcome">WELCOME</p>
    </header>
    <main class="container">
      <form class="formulario" @submit.prevent="login">
          <input
            class="input"
            type="email"
            id="email"
            @blur="validarEmail"
            v-model="email"
            placeholder="Email"
            required
          />
        <span class="error-message" v-if="emailError"> {{ emailError }}</span>
          <input
            class="input"
            type="password"
            id="password"
            v-model="password"
            placeholder="Senha"
            required
          />
        <div class="recuperarSenha">
          <a class="recuperarSenha__link">forgot passaword</a>
        </div>
        <button class="formulario__botao" type="submit">LOG IN</button>
        <p>or log in by</p>
        <div>
          <img class="icon" src="" alt="">
          <img class="icon" alt="">
        </div>
        <p class="criarConta">Don't have account? <a class="criarConta__link">sig up</a></p>
      </form>
    </main>
  </div>
</template>
<script>
export default {
  name: "TelaLogin",
  data() {
    return {
      email: "",
      password: "",
      emailError: null,
    };
  },
  methods: {
    validarEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;

      if (!emailRegex.test(this.email)) {
        this.emailError = "Formato de email inválido";
      } else {
        this.emailError = null;
      }
    },
    async login() {
      if (this.emailError) {
        return;
      }
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/25eb88e7-53e6-40cf-926f-214c6bfa83e1"
        );
        if (response.ok) {
          alert("entrou");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --white: #fff;
  --purple: #5252c7;
  --gray-light: #606060;
  --bg-input: #f3f5f7;
  --bg-button: linear-gradient(271deg, #888bf4 0%, #5151c6 100%);
  --bg-icon: #5151c6;
  --color-placehold: #bdbdbd;
}

.error-message {
  color: red;
}

.cabecalho {
  height: 312px;
  width: 100%;
  text-align: center;
  background: rgb(85, 85, 223);
}
.cabecalho__titulo {
  padding-top: 64px;
  padding-bottom: 38px;
  font-size: 32px;
  color: var(--white);
}
.cabecalho__welcome {
  font-family: Proxima Nova;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 4px;
  color: var(--white);
}

.formulario {
  width: 70%;
  margin: 3rem auto;
  /* cima e embaixo 3em, auto nos lados */
  max-width: 600px;
}
.input {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 30px;
  background: var(--bg-input);
  margin-bottom: 20px;
  font-size: 1rem;
}
.input::placeholder {
  color: var(--color-placehold);
}
.input:focus {
  border: red;
}
.recuperarSenha {
  text-align-last: center;
  margin-top: 20px;
  margin-bottom: 40px;
}
.recuperarSenha__link {
  color: var(--purple);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 400;
}
.formulario__botao {
  width: 100%;
  padding: 1.2rem;
  background: var(--bg-button);
  color: var(--white);
  border: none;
  border-radius: 30px;
  letter-spacing: 0.6px;
  font-weight: 700;
  cursor: pointer;
}

.criarConta {
  text-align: center;
  color: var(--gray-light);
  font-size: 16px;
}
.criarConta__link {
  text-transform: uppercase;
  color: var(--purple);
}
</style>
