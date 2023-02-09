<script>
export default {
    props: ['title'],
    setup(props) {
        // console.log(title)
        console.log(props)
        return {
            props
        }
    }
}
</script>
<template>
    <h1>Child Component: {{ title }}</h1>

</template>
<style>

</style>