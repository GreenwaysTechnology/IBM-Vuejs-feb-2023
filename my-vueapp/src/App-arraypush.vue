<script setup>
import { reactive } from 'vue';
const todos = reactive([])
//listener
const addItem = () => {
    todos.push({ id: Math.random(), text: 'Learn Vue!' })
}
let todo = reactive({})
function onSelect(item){
    console.log(item)
    todo = item
    console.log(todo)

} 
</script>
<template>

    <ul>
        <li v-for="todo in todos">
            <span @click="onSelect(todo,$event)">{{todo}}</span>
        </li>
    </ul>
    <button @click="addItem">AddItem</button>
    <template>
        <h1>id:{todo.id}</h1>
    </template>
</template>
<style>

</style>
