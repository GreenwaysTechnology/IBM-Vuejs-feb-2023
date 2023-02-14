<script setup>
import { ref } from 'vue';
import EventEmitterChild from './components/Child.vue'

const parentValue = ref(0)

const getData = (data) => {
    parentValue.value = data
}
</script>
<template>
    <h1>Parent</h1>
    <h2>Child Data {{parentValue}}</h2>
    <hr>
    <EventEmitterChild @on-request="getData" />
</template>
<style>

</style>