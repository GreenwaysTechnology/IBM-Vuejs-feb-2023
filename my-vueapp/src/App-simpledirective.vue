<script setup>
//first directive
const vFocus = {
    //define life cycle methods
    mounted: (element) => {
        //we can get dom element here, what ever you want you can do
        console.dir(element)
        element.focus()
    }
}
</script>
<template>
    <input v-focus>
</template>