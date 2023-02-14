<script setup>
import { ref } from 'vue';
const emit = defineEmits(['onRequest'])
const counter = ref(0)
//listener to emit event
const onSend = () => {
    counter.value++
    emit('onRequest', counter.value)
}
</script>
<template>
    <h1>Child</h1>
    <button @click="onSend">Send To Parent</button>
    <!-- Access emit method inside template refered with $ -->
    <button @click="$emit('onRequest',counter++)">Send To Parent</button>
</template>
<style>

</style>