<script setup>
 const name = "Subramanian"
</script>
<template>
    <div>
        <h1>Directives</h1>
        <h1>Interpolation using mustace notation</h1>
        <h1>Name {{name}}</h1>
        <h1>Interpolation using Vhtml directive notation</h1>
        <h2 v-html="`name ${name}`"></h2>
        <h1>Interpolation using VTEXT directive notation</h1>
        <h2 v-text="`name ${name}`"></h2>
    </div>
</template>
<style>

</style>