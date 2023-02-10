<script setup>
//syntax:1
//const props = defineProps(['title'])
const props = defineProps({
    title: {
        type:String,
        default: 'Default Product Details'
        
    }
})
</script>
<template>
    <h1>Child Component: {{ title }}</h1>
</template>
<style>

</style>