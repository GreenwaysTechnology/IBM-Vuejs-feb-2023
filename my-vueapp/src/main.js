import { createApp } from 'vue'
import App from './App.vue'
import StatusBar from './components/StatusBar.vue'
import { myPlugin } from './plugins/myPlugin'
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
    .directive('focus', (element, binding) => {
        console.log('directive => ', element)
        element.focus()
    })
    .directive('highlight', (element, binding) => {

        console.log("element",element)
        console.log("binding",binding)

              //set inital color:
        element.style.backgroundColor = binding.value
        element.addEventListener('mousemove', (evt) => {
            //element.style.backgroundColor = 'yellow'
            highLight('yellow')
        })
        //remove style
        element.addEventListener('mouseleave', (evt) => {
            // element.style.backgroundColor = null
            highLight(null)
        })
        const highLight = (color) => {
            element.style.backgroundColor = color
        }
    })
    .use(myPlugin)
    .provide('company','IBM')
    .mount("#app")