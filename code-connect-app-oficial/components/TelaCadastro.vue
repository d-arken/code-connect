<template>
  <div class="container">
    <div class=card>
    </div>
    <div class="main">
    <InputDefault placeholder="E-mail" type="email"/>
    <InputDefault placeholder="E-mail" type="email"/>
    <InputDefault placeholder="Password" type="password"/>
    <ButtonDefault />
  </div>
    
  </div>  
</template>
<script>
  import InputDefault from './input/InputDefault.vue';
  import ButtonDefault from './button/ButtonDefault.vue';

  export default {  
    name: "TelaCadastro",
    components:{
      InputDefault,
      ButtonDefault
    }
  };
</script>
<style>
  .container{
    width: 100vw;
    height: 100vh;
    background-color: rgba(2, 2, 59, 0.375);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .card{
    width: 375px;
    height: 312px;
    background-image: url('../download.png');
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;
    position: relative;
  }

  .main{
    width: 375px;
    height: 500px;
    flex-shrink: 0;
    max-width: 768px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 28px 28px 0px 0px;
    gap: 20px;
    padding: 40px 30px 0 30px;
    top: -40px;
    z-index: 2;
    position: relative;
  }
</style>
