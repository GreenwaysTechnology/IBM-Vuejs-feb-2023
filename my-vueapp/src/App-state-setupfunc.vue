<!-- Composition Api with setup function : State declaration and interpolation -->
<script>
export default {
    setup() {
        //declare state variables
        const firstName = 'Subramanian'
        const lastName = 'Murugan'
        const city = 'Coimbatore'

        //return state object
        return {
            firstName,
            lastName,
            city
        }
    }
}
</script>
<template>
    <div>
        <h1>User</h1>
        <h3>Name {{ firstName }} {{ lastName }}</h3>
        <h3>City {{ city }}</h3>
    </div>
</template>
<style>

</style>