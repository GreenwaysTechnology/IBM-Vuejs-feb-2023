<script setup>
import { onMounted, ref } from 'vue';

const data = ref(null)
const error = ref(null)

function fetchData() {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    fetch(url)
        .then(response => response.json())
        .then(todos => {
            data.value = todos
            console.log(data.value)
        }).catch(err => {
            console.log('error')
            error.value = err
        })
}

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