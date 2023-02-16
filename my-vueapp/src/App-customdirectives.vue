<script setup>
import { ref } from 'vue'
const color = ref('green')
</script>
<template>
    <input v-focus />
    <h1 v-highlight>Welcome</h1>
    <h1 v-highlight.value="color">HighLight</h1>
    <!-- directive:arg.modifier -->
    <h1 v-highlight:foo.bar="color">HighLight</h1>
    <p v-highlight:foo.bar="{ color: 'green', label: 'Greetings' }">this is demo
    </p>

</template>