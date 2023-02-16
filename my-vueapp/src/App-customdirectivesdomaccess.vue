<script setup>
const vHighlight = {

    mounted: (element) => {
        //
        element.addEventListener('mousemove', evt => {
             highLight('yellow')
        })
        element.addEventListener('mouseleave', evt => {
            highLight(null)
        })
        const highLight = color => {
            element.style.backgroundColor = color
        }
    }
}
</script>
<template>
    <h1 v-highlight>HighLight Me!</h1>
</template>
<style>

</style>