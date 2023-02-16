<script setup>
import { ref, computed } from "vue";

let input = ref(null);
const error = computed(() => {
    return input.value === "" ? "The Input field is required" : "";
});
</script>   
<template>
    <section class="signup-view">
        <h1>Form</h1>

        <form class="ui form">
            <div class="field">
                <div class="ui left icon input big">
                    <i class="user icon"></i>
                    <input
       type="text"
       placeholder="Full Name"
       autocomplete="off"
       v-model="input"
       @keyup="validateInput"
       @blue="validateInput"
/>
                </div>
                <div class="ui basic label pointing red" v-if="error">
                    {{ error }}
                </div>
            </div>
        </form>
    </section>
</template>

<style scoped>
.signup-view {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.form {
    width: 450px;
}
</style>
