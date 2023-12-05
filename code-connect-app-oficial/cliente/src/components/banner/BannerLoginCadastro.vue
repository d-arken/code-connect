<template>
  <div class="imagem"></div>
</template>

<script>
  export default {
    name: "BannerLoginCadastro",
  }
</script>

<style scoped>
  .banner {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .imagem {
    background: url(../../assets/img/banner.png) center center / cover no-repeat;
    width: 100%;
  }

  @media(max-width:1024px)  {
    .imagem {
      display: none;
    }
  }
</style>