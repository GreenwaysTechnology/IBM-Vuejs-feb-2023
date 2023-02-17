<script setup>
 import { useRoute } from 'vue-router';
const route = useRoute()
console.log(route)
console.log(route.params.id)
</script>
<template>
    <h1>Product View {{$route.params.id}}</h1>
     
</template>