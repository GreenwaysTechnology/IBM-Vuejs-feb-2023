<script setup>
import Layout from './components/Layout.vue'
</script>
<template>
    <h1>Vue Application</h1>
    <!-- <Layout>
        <template v-slot:header>
            <h1>Header</h1>
        </template>
        <template v-slot:main>
            <p>This is body</p>
        </template>
        <template v-slot:footer>
            <h3>Footer</h3>
        </template>
    </Layout> -->
    <Layout>
        <template #header>
            <h1>Header</h1>
        </template>
        <template #main>
            <p>This is body</p>
        </template>
        <template #footer>
            <h3>Footer</h3>
        </template>
    </Layout>
</template>
<style>

</style>
