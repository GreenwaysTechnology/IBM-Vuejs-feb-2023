
<script setup>
import { ref } from 'vue';


const name = ref('default Name')
const getInput = evt=>{
  const value = evt.target.value
  console.log(value)
  name.value = value
}

</script>
<template>
    <h1>Forms</h1>
     <p>{{name}}</p>
    <input @input="getInput" :value="name" />
</template>
<style>

</style>