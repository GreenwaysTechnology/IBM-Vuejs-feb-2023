<script setup>

const sayHello = (message,event) => {
    console.log(message,event)
}
</script>
<template>
    <button @click="sayHello('hello',$event)">SayHello</button>
</template>