<script setup>
import ChildSlot from './components/ChildSlot.vue';
import Content from './components/Content.vue';

</script>
<template>
    <ChildSlot></ChildSlot>
    <hr/>
   <ChildSlot>
        <Content/>
   </ChildSlot>
</template>
<style>

</style>