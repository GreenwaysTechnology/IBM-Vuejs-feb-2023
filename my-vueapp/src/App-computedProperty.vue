<script setup>
import { reactive, computed } from 'vue';
const author = reactive({
    name: 'Subramanian',
    trainings: [
        'Vue 3 Basic to intermediate',
        'MicroServices using Spring Cloud'
    ]
})
//computed is going to replace imperative js expression logic inside template
//computed is cached , gets called the same result without calling method again and again, until any reactive property changed
const isTrainingHandled = computed(() => {
    console.log('computed property')
    return author.trainings.length > 0 ? 'Yes' : 'No'
})
//normal is called for every template binding
const isTrainingDone = () => {
    console.log('normal method property')
    return author.trainings.length > 0 ? 'Yes' : 'No'
}


</script>
<template>
    <!-- <h1>{{author.name}}  Has handled Trainings ? {{author.trainings.length > 0 ? 'Yes' : 'No'}}</h1>   -->
    <h1>{{ author.name }} Has handled Trainings {{ isTrainingHandled }}</h1>
    <h1>{{ author.name }} Has handled Trainings {{ isTrainingHandled }}</h1>
    <h1>{{ author.name }} Has handled Trainings {{ isTrainingDone() }}</h1>
    <h1>{{ author.name }} Has handled Trainings {{ isTrainingDone() }}</h1>

</template>
