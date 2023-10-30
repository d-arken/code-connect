<script>

export default{
    name:'InputDefault',
    data(){
        return{
           email: '',
           password: '',
           color: 'blue',
           msgErro: '',
        }
    },
    props:{
        placeholder: String,
        type: String,
        value: String,      
    },
    methods:{
        onchange(event){
            if(event.target.type === 'email'){
                this.email = event.target.value
                this.validateEmail(this.email)
            }
            if(event.target.type === 'password'){
                this.password = event.target.value
                this.validatePassword(this.password)
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
        validatePassword(password){
            console.log(password)
            const digito = /^(?=.*\d)$/
            console.log(digito)
            if(digito.test('a')){
                console.log('passou')
            }else{
                console.log('ainda não')
            }
        }
    },
}       
</script>

<template>
    <div>
        <input 
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
    div{
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        border-color: color;
    }

   input{
    display: flex;
    width: 315px;
    padding: 13px 20px;
    align-items: center;
    gap: 24px;
    justify-content: center;
    border-radius: 30px;
    background-color:#F3F5F7;
   } 

   .msg{
    width: 100%;
    display: flex;
    align-items: center;
    color: red;
       }
</style>
