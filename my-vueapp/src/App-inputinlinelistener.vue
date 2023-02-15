<script setup>
import { ref } from 'vue';
const name = ref('default Name')
</script>
<template>
    <h1>Forms</h1>
     <p>{{name}}</p>
    <input @input="evt=>name=evt.target.value" :value="name" />
</template>
<style>

</style>