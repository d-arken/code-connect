<script>

export default{
    name:'InputDefault',
    data(){
        return{
           email: '',
           color: 'blue',
           msgErro: '',
        }
    },
    props:{
        placeholder: String,
        type: String,
    },
    methods:{
        onchange(event){
            if(event.target.type === 'email'){
                this.email = event.target.value
                this.validateEmail(this.email)
            }            
        },
        validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
            if (!emailRegex.test(email)) {
                console.log('red')
                this.color = 'red';
                this.msgErro = 'Formato Inválido'
            } else {
                this.color = 'blue';
                console.log('blue')
            }
        },        
    },
}       
</script>

<template>
    <div>
        <input 
            class="input"
            :type="type" 
            :placeholder="placeholder"
            :style="{borderColor: color}"
            @input="onchange"
        />
        <div class="msg">
            <p v-if="color === 'red'" v-text="msgErro"></p>
        </div>    
    </div>
</template>

<style scoped>
    .input {
    background: var(--bg-input);
    padding: 13px 20px;
    height: 50px;
    width: 100%;
    max-width: 600px;
    border-radius: 30px;
    font-size: 16px;
    outline: none;
    margin-top: 20px;
  }
  .input::placeholder {
    color: var(--color-placehold);
  }

  .input:focus {
    border: 2px solid var(--outline-input);
  }
</style>
