<script setup>
import { reactive, toRefs } from 'vue'
// const location = reactive({
//     lat: 10.5,
//     lng: 90.5
// })

const { lat, lng } = toRefs(reactive({
    lat: 10.5,  //ref(lat)
    lng: 90.5   //ref(lng)
}))
// const updateLocation = () => {
//     location.lat = 1000
//     location.lng = 98834
// }
const updateLocation = () => {
    lat.value = 1000
    lng.value = 98834
}
</script>
<template>
    <div>
        <h1>Object destructuring and Reactivity</h1>
        <!-- <h1>Lat : {{ location.lat }} {{ location.lng }}</h1> -->
        <h1>Lat : {{ lat }} {{ lng }}</h1>

        <button @click="updateLocation">Update Location</button>

    </div>
</template>