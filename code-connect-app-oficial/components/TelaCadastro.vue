<template>
  <div>
    <BannerLoginCadastro>
    </BannerLoginCadastro>
    <FormContainer>
      <form>
        <InputDefault placeholder="E-mail" type="email" />
        <InputDefault placeholder="E-mail" type="email" />
        <InputPassword placeholder="Password" type="password" />
        <botaoSubmit class="botaoEnviar"></botaoSubmit>
      </form>
    </FormContainer>
  </div>
</template>
<script>
import InputDefault from "./input/InputDefault.vue";
import InputPassword from "./input/InputPassword.vue";
import FormContainer from "./container/FormContainer.vue"
import BannerLoginCadastro from "./banner/BannerLoginCadastro.vue";
import botaoSubmit from "/components/form/botaoSubmit.vue"
import "/assets/reset.css"
import "/assets/global.css"

export default {
  name: "TelaCadastro",
  components: {
    FormContainer,
    BannerLoginCadastro,
    InputDefault,
    InputPassword,
    botaoSubmit
  },
};
</script>
<style>
  .botaoEnviar {
    padding: 40px 0px;
  }
</style>
