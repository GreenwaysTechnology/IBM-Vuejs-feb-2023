<script setup>
import Layout from './components/Layout.vue'
</script>
<template>
    <h1>Vue Application</h1>
    <Layout>
        <template #header>
            <h1>Header</h1>
        </template>
        <template #default>
            <p>This is body</p>
        </template>
        <template #footer>
            <h3>Footer</h3>
        </template>
    </Layout>
</template>
<style>

</style>
