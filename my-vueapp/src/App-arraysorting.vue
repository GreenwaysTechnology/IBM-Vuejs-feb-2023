<script setup>
import { ref } from 'vue'
import { TODOS } from './mock-data/todos'
//deep nesting
const todos = ref(TODOS)
const todo =ref(null)

const filter = () => todos.value = todos.value.filter(todo => todo.completed)

const show = (item,evt)=>{
    todo.value = item 
    console.log(todo.value)
}
</script>
<template>  
    <div>
        <button @click="filter">Filter By Status</button>
        <h1>Total items : {{ todos.length }}</h1>
        <ul>
            <li v-for="(todo, index) in todos" :key="todo.id">
                <span @click="show(todo,$event)">{{ todo.title }}</span>
            </li>
        </ul>
        <div v-if="todo">
            <h1>id {{todo.id }}</h1>
            <h1>Title {{todo.title }}</h1>
        </div>

    </div>
</template>