<script>

export default{
    name:'InputDefault',
    props:{
        placeholder: String,
        type: String,
        
    }
};
</script>

<template>
    <div>
        <input v-model="value" :type="type" :placeholder="placeholder"/>
    </div>
</template>

<style scoped>
    div{
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
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
</style>
