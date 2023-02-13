<script setup>
import { reactive} from 'vue'

const comments = reactive({
    like: 0,
    dislike: 0,
    recommend: {
        rating: {
            value: 0
        }
    }
})

</script>
<template>
    <div>
        <h1>Reactive State</h1>
        <h1>Like : {{comments.like}} Dislike {{comments.dislike}} Rating {{comments.recommend.rating.value}}</h1>
        <button @click="comments.like++">Like</button>
        <button @click="comments.dislike++">Dislike</button>
        <button @click="comments.dislike++">Dislike</button>
        <button @click="comments.recommend.rating.value++">Rating</button>
    </div>
</template>