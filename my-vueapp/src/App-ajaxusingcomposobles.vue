<script setup>
import useFetch from './composables/useFetch.js'
const url = 'https://jsonplaceholder.typicode.com/todos'
const { data, error } = useFetch(url)
</script>
<template>
    <div>Todo App</div>
    <div v-if="error">Opps! Error Encountered</div>
    <div v-else-if="data">
        <div v-for="todo of data">
            <p>{{todo.title}}</p>
        </div>
    </div>
    <div v-else>
        <h1>Loading...</h1>
    </div>
</template>
<style>

</style>