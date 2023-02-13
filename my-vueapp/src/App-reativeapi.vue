<script setup>
import { reactive} from 'vue'

const comments = reactive({
    like:0,
    dislike : 0
})
console.log(comments)
</script>
<template>
    <div>
        <h1>Reactive State</h1>
        <h1>Like : {{comments.like}} Dislike {{comments.dislike}}</h1>
        <button @click="comments.like++">Like</button>
        <button @click="comments.dislike++">Dislike</button>
    </div>
</template>