<template>
  <div class="perfil">
    <header class="perfil__capa">
      <h2 class="perfil__nome">@{{ perfil.name }}</h2>
      <img
        class="perfil__foto"
        src="../assets/img/perfil-sem-foto.jpg"
        alt=""
      />
    </header>
    <main class="principal">
      <section class="dados__conta">
        <ul class="dados__lista">
          <li class="dados__item"><p><strong>Nome:</strong> {{ perfil.name }}</p></li>
          <li class="dados__item"><p><strong>Email:</strong> {{ perfil.email }}</p></li>
          <li class="dados__item"><p><strong>Data de criação:</strong> {{ perfil.created_at }}</p></li>
        </ul>
      </section>
      <section class="configuracoes__conta">
        <h3 class="perfil__ajustes">Ajustes na conta</h3>
        <ul class="perfil__lista-ajustes">
          <li class="perfil__item-lista">
            <div class="campo">
              <inputPadrao
                :inputType="'text'"
                :placeholder-input="'Alterar seu nome'"
                @pegarValueInput="pegarValorNome"
                :input-invalido="erroValidacao.nome?.invalid"
              />
              <span class="mensagem-erro">
                {{ erroValidacao.nome?.mensagem }}
              </span>
            </div>
            <button class="perfil__ajuste-botao" @click="alterarNome">
              Enviar
            </button>
          </li>
          <li class="perfil__item-lista">
            <div class="campo">
              <inputPadrao
                :inputType="'email'"
                :placeholder-input="'Alterar seu email'"
                @pegarValueInput="pegarValorEmail"
                :input-invalido="erroValidacao.email?.invalid"
              />
              <span class="mensagem-erro">
                {{ erroValidacao.email?.mensagem }}
              </span>
            </div>
            <button class="perfil__ajuste-botao" @click="alterarEmail">
              Enviar
            </button>
          </li>
          <li class="perfil__item-lista">
            <div class="campo">
              <inputPadrao
                :inputType="'password'"
                :placeholder-input="'Alterar sua senha'"
                @pegarValueInput="pegarvalorSenha"
                :input-invalido="erroValidacao.senha?.invalid"
              />
              <span class="mensagem-erro">
                {{ erroValidacao.email?.mensagem }}
              </span>
            </div>
            <button class="perfil__ajuste-botao" @click="alterarSenha">
              Enviar
            </button>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>
<script>
import axios from "axios";
import inputPadrao from "../components/input/inputPadrao.vue";
import {
  validarNome,
  validarFormatoEmail,
  // validarFormatoSenha,
} from "../assets/utils/validacoes.js";

export default {
  name: "telaPerfil",
  components: {
    inputPadrao,
  },
  data() {
    return {
      perfil: [],
      erroValidacao: {},
      dados: {
        novoNome: "",
        novoEmail: "",
        novaSenha: ""
      },
    };
  },
  methods: {
    async buscarPerfil() {
      try {
        const response = await axios.get("http://localhost:3333/perfil", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        this.perfil = response.data;
      } catch (error) {
        console.error("erro ao buscar perfil:", error);
      }
    },
    pegarValorNome(value) {
      this.dados.novoNome = value;
    },
    pegarValorEmail(value) {
      this.dados.novoEmail = value;
    },
    pegarvalorSenha(value) {
      this.dados.novaSenha = value
    },
    async alterarNome() {
      try {
        if (!validarNome(this.dados.novoNome)) {
          return (this.erroValidacao["nome"] = {
            invalid: true,
            mensagem: "O nome inserido é inválido.",
          });
        }
        await axios.put(
          "http://localhost:3333/perfil/alterarNome",
          { content: this.dados.novoNome },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
      } catch (error) {
        console.error(error);
      }
    },
    async alterarEmail() {
      try {
        if (!validarFormatoEmail(this.dados.novoEmail)) {
          return (this.erroValidacao["email"] = {
            invalid: true,
            mensagem: "Formato de email é inválido.",
          });
        }
        await axios.put(
          "http://localhost:3333/perfil/alterarEmail",
          { content: this.dados.novoEmail },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
      } catch (error) {
        console.error(error);
      }
    },
    async alterarSenha() {
      try {
        await axios.put(
          "http://localhost:3333/perfil/alterarSenha",
          { content: this.dados.novaSenha },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
      } catch(error) {
        console.error(error);
      }
    }
  },
  created() {
    this.buscarPerfil();
  },
};
</script>

<style scoped>
.perfil {
  min-height: 100vh;
  background-color: #e6e8e9;
}
.perfil__capa {
  background-color: var(--white);
  height: 200px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
}
.perfil__foto {
  border-radius: 70px;
  height: 130px;
  width: 150px;
  margin-bottom: -35px;
}
.perfil__nome {
  font-size: 1.5rem;
  padding-bottom: 10px;
}
.principal {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.dados__conta {
  padding-top: 60px;
}
.dados__item {
  padding-bottom: 10px;
}
.configuracoes__conta {
  padding-top: 20px;
}

.perfil__item-lista {
  display: flex;
  gap: 15px;
}
.perfil__ajuste-botao {
  background: var(--bg-button);
  height: 50px;
  width: 80px;
  border-radius: 20px;
  margin-top: 20px;
  color: var(--white);
  cursor: pointer;
}
.campo {
  display: flex;
  flex-direction: column;
}
.mensagem-erro {
  color: var(--error);
}
</style>
