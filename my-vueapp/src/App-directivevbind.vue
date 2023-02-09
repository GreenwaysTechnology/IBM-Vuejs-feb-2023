<script setup>
const imageUrl = "/src/assets/logo.svg"
const isEnabled = false
const isHidden = false
</script>
<template>
    <h1>Bind Directives</h1>
    <div>
        <h2>Static Binding</h2>
        <img src="./assets/logo.svg" height="100" width="100" />
    </div>
    <div>
        <h2>Dynamic Binding using v-bind Directive</h2>
        <img v-bind:src="imageUrl" height="100" width="100" />
    </div>
    <div>
        <h2>Dynamic Binding using v-bind Directive</h2>
        <img :src="imageUrl" height="100" width="100" />
    </div>
    <div>
        <h2>Dynamic Binding using v-bind Directive</h2>
        <button :disabled="isEnabled">Enable</button>
    </div>
    <div>
        <article :hidden="isHidden">
             <p>This is vue article</p>
        </article>
    </div>
</template>
<style>

</style>