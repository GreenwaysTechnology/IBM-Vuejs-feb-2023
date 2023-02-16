<script setup>
import useMouseTracker from './composables/mousetracker.js'
const { x, y } = useMouseTracker()
</script>
<template>
    <h1>
        X : {{ x }} Y:{{ y }}
    </h1>
</template>