<script setup>
import {ref} from 'vue'
const message = ref('Hello')

</script>
<template>
    <!-- send data to parent via slot -->
    <slot :message="message"></slot>
</template>
<style>
</style>