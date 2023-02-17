<script setup>
import { useCounterStore } from '../stores/counter.js'
const counterStore = useCounterStore()
</script>
<template>
    <div>
        <h1>Counter App with Pina</h1>
        <h2>Counter : {{ counterStore.count }}</h2>
        <button @click="counterStore.increment">+</button>
    </div>
</template>