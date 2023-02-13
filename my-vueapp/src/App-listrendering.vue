<script setup>
import { TODOS } from './mock-data/todos'
import { reactive } from 'vue'
const todos = reactive(TODOS);

</script>
<template>
    <div>
        <ul>
            <li v-for="(todo,index) in todos" :key="todo.id">
                <span>{{index}} - {{ todo.title }}</span>
            </li>
        </ul>
    </div>
</template>