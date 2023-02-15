<script setup>
import { inject } from 'vue';
const message = inject('message')
const company = inject('company')
</script>
<template>
    <h1>Child3</h1>
    <h1>Data From the Parent {{message}} </h1>
    <H2>App Level Data {{company}}</H2>
</template>
<style>
</style>