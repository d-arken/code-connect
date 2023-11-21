<template>
  <div>
    <BannerLoginCadastro>
    </BannerLoginCadastro>
    <FormGroup>
      <form @submit.prevent="validarFormulario">
        <inputPadrao 
          :inputType="'text'"
          :input-invalido="erros['nome']?.invalid"
          :placeholder-input="'Nome'"
          @pegarValueInput="pegarNome"
        />
        <span class="mensagem-erro">{{erros['nome']?.mensagem  }}</span>
        <inputPadrao
          :inputType="'email'"
          :input-invalido="erros['confirmarEmail']?.invalid"
          :placeholder-input="'Confirmar Email'"
          @pegarValueInput = "pegarEmail"
        />
        <span class="mensagem-erro">{{ erros['confirmarEmail']?.mensagem }}</span>
        <inputPadrao
          :inputType="'password'"
          :input-invalido="erros['senha']?.invalid"
          :placeholder-input="'Senha'"
          @pegarValueInput = "pegarSenha"
        />
      </form>
      <span class="mensagem-erro">{{ erros['senha']?.mensagem }}</span>
      <div class="padding">
        <p>Já possui uma conta? <router-link class="link" to="/login">Log in</router-link></p>
      </div>
      <botaoPadrao
        :valueBotao="'Cadastrar-se'"
        :evento="validarFormulario"
      />
    </FormGroup>
  </div>
</template>
<script>
  import BannerLoginCadastro from "../components/banner/BannerLoginCadastro.vue";
  import FormGroup from "../components/form/FormGroup.vue";
  import inputPadrao from "../components/input/inputPadrao.vue";
  import botaoPadrao from "../components/button/botaoPadrao.vue";
  import { validarFormatoEmail, validarFormatoSenha, validarNome} from "../assets/utils/validacoes"
  import "../assets/css/reset.css"
  import "../assets/css/global.css"
import axios from "axios";

  export default {
    name: "TelaCadastro",
    components: {
      BannerLoginCadastro,
      FormGroup,
      inputPadrao,
      botaoPadrao
    },
    data() {
      return {
        novoUsuario: {
          nome: "",
          email: "",
          senha: "",
        },
        erros: {}
      }
    },
    methods: {
      pegarNome(value) {
        this.novoUsuario.nome = value
      },
      pegarEmail(value) {
        this.novoUsuario.email = value
      },
      pegarSenha(value){
        this.novoUsuario.senha = value
      },
      async criarUsuario(){
        try{
          const response = await axios.post("http://localhost:3333/cadastro", this.novoUsuario)
          console.log(response.data.success);
        } catch(error) {
          console.error("Erro ao criar conta:", error);
        }
      },
      validarFormulario() {
        this.erros = {}
        
        if(!validarNome(this.novoUsuario.nome)) {
         this.erros["nome"] = {invalid: true, mensagem: "O nome inserido é inválido."}
        }
        console.log(this.novoUsuario.nome);
        if(!validarFormatoEmail(this.novoUsuario.email)) {
          this.erros["email"] = {invalid: true, mensagem: "Insira o endereço de email no formato: nome@example.com"}
        }
        if(!validarFormatoSenha(this.novoUsuario.senha)) {
          this.erros["senha"] = {invalid: true, mensagem: "Senha deve conter pelo menos um número e no minimo oito caracteres."}
        }
        console.log(this.senha);
        if(Object.keys(this.erros).length === 0) {
          this.$router.push("/login")
          this.criarUsuario()
        }
      }
    },
};
</script>
<style>
.mensagem-erro {
  color: var(--error);
}

.padding {
  padding-top: 40px;
}

.link {
  text-transform: uppercase;
  color: var(--purple);
}
</style>
