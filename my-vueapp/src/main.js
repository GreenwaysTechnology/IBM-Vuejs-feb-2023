import { createApp } from 'vue'
import App from './App.vue'
import StatusBar from './components/StatusBar.vue'
// import './assets/main.css'

//createApp(App).mount('#app')
// const app = createApp(App)
// //Global Component Registration
// app.component('StatusBar', StatusBar)
// app.mount("#app")

//camel case
// createApp(App)
//     .component("StatusBar", StatusBar)
//     .mount("#app")

//camel case and reference can be kebcase or Camel case without import
// createApp(App)
//     .component("StatusBar", StatusBar)
//     .mount("#app")

createApp(App)
    .component("status-bar", StatusBar)
    .provide('company','IBM')
    .mount("#app")