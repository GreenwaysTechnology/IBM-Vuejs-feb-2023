<!-- <script>
// options api event event listener
export default {

    methods: {
        sayHello(evt) {
            console.log('sayHello')
        },
        //start adding other listeners
    }
}
</script> -->
<!-- <script>
export default {
    setup() {
        //declare listener - es 5
        // function sayHello(evt) {
        //     console.log(evt)
        //     console.log('hello')
        // }
        // declare listener -es 6
        const sayHello = () => console.log('Hello')
        return {
            sayHello
        }
    }
}
</script> -->
<script setup>
const sayHello = () => console.log('Hello')
</script>
<template>
    <!-- <h1>Counter : {{ counter }}</h1> -->
    <button v-on:click="sayHello">SayHello</button>
    <button @click="sayHello">SayHello</button>
</template>