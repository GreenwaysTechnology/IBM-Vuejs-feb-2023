<!-- <script>
//State Mutation using options api
export default {
    //state declaration
    data() {
        return {
            counter: 0 //reactive variable
        }
    },
    methods: {
        onIncrement() {
            //state variable can be accessed inside litener using "this keyword"
            this.counter++
        }
    }

}
</script> -->
<!-- Composition api pattern : setup function -->
<!-- <script>
import { ref } from 'vue'
export default {
    setup() {
        let counter = ref(0)
         const onIncrement = () => {
            counter.value++
        }
        return {
            counter, onIncrement
        }
    }
}
</script> -->
<script setup>
import { ref } from 'vue'
let counter = ref(0)
// const onIncrement = () => {
//     counter.value++
// }
</script>
<template>
    <div>
        <h1>Counter {{ counter }}</h1>
        <!-- <button @click="onIncrement">+</button> -->
        <button @click="counter++">+</button>

    </div>
</template>