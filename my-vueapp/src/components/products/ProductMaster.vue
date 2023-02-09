<script setup>
import ProductDetails from './ProductDetails.vue';
const title = "Product details Page"
const tmpTitle = 100

// export default {
//     components: { ProductDetails }
// }
</script>
<template>
    <h1>Parent Component:Product Master</h1>
    <!-- <ProductDetails v-bind:title="title"></
    ProductDetails> -->
    <ProductDetails :title="title"></ProductDetails>
    <ProductDetails></ProductDetails>
    <ProductDetails :title="tmpTitle"></ProductDetails>

</template>
<style>

</style>