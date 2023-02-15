<script setup>
const getInput = evt=>{
  const value = evt.target.value
  console.log(value)
}

</script>
<template>
    <h1>Forms</h1>
    <input @input="getInput" />
</template>
<style>

</style>