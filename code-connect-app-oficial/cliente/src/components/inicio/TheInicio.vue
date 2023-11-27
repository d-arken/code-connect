<template>
  <div class="container-principal">
    <div class="container-cabecalho">
      <img :src="require('./header.jpg')" class="imagem-cabecalho" />
      <div class="container-introducao">
        <div class="texto-introducao">QUEM É VOCÊ</div>

        <div class="container-cartoes">
          <div class="image-container">
            <img :src="require('./card1.jpg')" class="imagem-cartao-1" />
            <div class="image-text">FOTÓGRAFO</div>
          </div>
          <div class="image-container">
            <img :src="require('./card2.jpg')" class="imagem-cartao-2" />
            <div class="image-text">MAKINGVIDEO</div>
          </div>
        </div>

        <div class="container-cartoes">
          <div class="image-container">
            <img :src="require('./card3.jpg')" class="imagem-cartao-3" />
            <div class="image-text">DESIGN</div>
          </div>
          <div class="image-container">
            <img :src="require('./card4.jpg')" class="imagem-cartao-4" />
            <div class="image-text">ILUSTRADOR</div>
          </div>
        </div>

        <div class="slogan">
          <p>DESCUBRA - INSPIRE - CONECTE</p>
        </div>

        <div class="container-explorar">
          <div class="texto-explorar">
            <router-link to="/login">
              <input class="botao" type="submit" value="EXPLORE AGORA">
            </router-link>
          </div>
          <div class="caixa-decorativa">
            <div class="caixa-interna"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: "TheInicio"
}

</script>

<style scoped>

.container-principal {
  background-color:  #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
}

.container-cabecalho {
  display: flex;
  margin-bottom: 30px;
  width: 400px;
  max-width: 100%;
  flex-direction: column;
}

.imagem-cabecalho {
  object-fit: contain;
  object-position: center;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.container-introducao {
  display: flex;
  margin-top: 47px;
  padding-left: 18px;
  flex-direction: column;
}

@media (max-width: 991px) {
  .container-introducao {
    margin-top: 40px;
  }
}

.texto-introducao {
  color: #888bf4;
  font-size: 30px;
  text-align: center;
  white-space: nowrap;
  white-space: nowrap;
  padding: 10px;
  border: 1px solid #888bf4;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
}

.texto-introducao:hover{
  background-color: #888bf4;
  color: #fff;
}


@media (max-width: 991px) {
  .texto-introducao {
    white-space: initial;
  }
}

.container-cartoes {
  align-self: center;
  display: flex;
  margin-top: 27px;
  width: 400px;
  max-width: 100%;
  justify-content: space-between;
  gap: 20px;
}

.imagem-cartao-1,
.imagem-cartao-2,
.imagem-cartao-3,
.imagem-cartao-4,
.imagem-cartao-5 {
  object-fit: contain;
  object-position: center;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex: 1;
}

.imagem-cartao-1:hover,
.imagem-cartao-2:hover,
.imagem-cartao-3:hover,
.imagem-cartao-4:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

.botao{
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.botao:hover{
  background-color: #5151c6;
  transform: scale(1.05);
}

.imagem-container {
    position: relative;
    display: inline-block;
  }

  .imagem-texto {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #888bf4;
    padding: 5px;
    border-radius: 5px;
  }

  .image-container{
    position: relative;
    display: inline-block;
  }

  .image-text{
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #888bf4;
    padding: 5px;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .image-container:hover .image-text{
    opacity: 1;
  }


.slogan {
  text-align: center;
  letter-spacing: 2px;
  font-size: 20px;
  color: #888bf4;
  text-transform: uppercase;
  background-clip: text;
  align-self: center;
  margin-top: 57px;
  white-space: nowrap;
}

@media (max-width: 991px) {
  .slogan {
    margin-top: 40px;
    white-space: initial;
  }
}

.container-explorar {
  align-self: stretch;
  display: flex;
  margin-top: 23px;
  flex-direction: column;
}

.botao {
  border-radius: 10px;
  background: #888bf4;
  width: 401px;
  height: 56px;
  text-align: center;
  color: #fff;
  font-family: "Poppins";
  font-size: 20px;
  border: 0;
}

@media (max-width: 991px) {
  .texto-explorar {
    padding: 0 4px;
  }
}

.caixa-decorativa {
  background-color: linear-gradient(271deg, #888bf4 0%, #5151c6 100%);
  display: flex;
  flex-direction: column;
}

.caixa-interna {
  justify-content: flex-end;
  align-items: center;
  backdrop-filter: blur(12px);
  background-color: rgba(255, 255, 255, 0);
  display: flex;
  flex-direction: column;
  padding: 21px 20px 8px;
}

.caixa-borda {
  border-radius: 100px;
  background-color:  #737982;
  display: flex;
  width: 134px;
  height: 5px;
  flex-direction: column;
}
</style>
