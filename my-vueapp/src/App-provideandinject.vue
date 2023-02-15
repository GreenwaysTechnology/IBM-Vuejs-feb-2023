<script setup>
import { provide, ref } from 'vue';
import Child1 from './components/Child1.vue';
const message = ref('Hello')
provide("message", message)
</script>
<template>
    <h1>Parent</h1>
    <Child1 ></Child1>
</template>
<style>

</style>