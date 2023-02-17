<script setup>
import { onMounted } from 'vue';
import { todosStore } from '../stores/todos.js'
const todos = todosStore();

onMounted(()=>{
    todos.getTodos()
})

</script>
<template>
    <h1>Todo App with Pina</h1>
    <div v-for="todo in todos.todoslist">
        <h2>{{todo.id}}  {{todo.title}}</h2>
    </div>
</template>

