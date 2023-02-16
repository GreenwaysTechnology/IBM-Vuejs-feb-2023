<script setup>
import {onMounted, onUnmounted, ref} from 'vue'

//cursor position
const x = ref(0)
const y = ref(0)

//listener to track current mouse position
const update = event => {
    x.value = event.pageX
    y.value = event.pageY
}
//Life cycle
onMounted(()=>{
    window.addEventListener('mousemove',update)
})
onUnmounted(()=>{
    window.removeEventListener('mousemove',update)
})
</script>
<template>
    <h1>
        X : {{x}} Y:{{y}}
    </h1>
</template>