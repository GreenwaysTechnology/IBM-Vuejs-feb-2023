<script setup>

</script>
<template>
    <header>
        <slot name="header">
            <h1>Default Header</h1>
        </slot>
    </header>
    <main>
        <slot name="main">
            <p>This is default Main</p>
        </slot>

    </main>
    <footer>
        <slot name="footer">
            <h1>Default Footer</h1>
        </slot>

    </footer>
</template>
<style>

</style>