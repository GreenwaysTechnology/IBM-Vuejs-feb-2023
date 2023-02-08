<!-- Options Api : State declaration and interpolation -->
<script>
export default {
    //declare state(model)
    //es 5 style of declaration data function
    // data: function () {
    //     //state object which contains data
    //     return {
    //         name: 'Subramanian'
    //     }
    // }
    //es 6 style of declaration data function
    data() {
        //state object which contains data
        return {
            firstName: 'Subramanian',
            lastName:'Murugan',
            city:'Coimbatore'
        }
    }
}
</script>
<template>
    <div>
        <h1>User</h1>
        <h3>Name {{ firstName }} {{ lastName }}</h3>
        <h3>City {{city }}</h3>
    </div>
</template>
<style>

</style>