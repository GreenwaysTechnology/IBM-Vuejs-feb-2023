<script>
export default {
    created() {
        console.log(this.$attrs)
    },
    // inheritAttrs: false
}
</script>
<script setup>
const props = defineProps(['title'])
</script>
<template>
    <button class="large">{{ props.title }}</button>
</template>
<style scoped>
.fancy-btn {
    color: red
}

.large {
    font-size: 24px;
}
</style>