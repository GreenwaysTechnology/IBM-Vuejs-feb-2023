<!-- Composition Api with setup attribute : State declaration and interpolation -->
<script setup>
//declare state variables
const firstName = 'Subramanian'
const lastName = 'Murugan'
const address = {
    city: 'Coimbatore',
    state: 'TN'
}
</script>
<template>
    <div>
        <h1>User</h1>
        <h3>Name {{ firstName }} {{ lastName }}</h3>
        <h3>City {{ address.city }} State {{ address.state }}</h3>
    </div>
</template>
<style>

</style>