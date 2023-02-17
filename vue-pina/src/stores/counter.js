import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

//imperative style : looks like setup function 
// export const useCounterStore = defineStore('counter', {
//   //state
//   state: () => {
//       //return inital state
//       return {
//           count: 10
//       }
//   },
//   //actions
//   actions: {
//       increment() {
//           this.count++
//       }
//   },
//   //getters (computed Properties)
//   getters: {
//       doubleIt: state => state.count * 2
//   }
// })

//declarative looks like setup attribute
export const useCounterStore = defineStore('counter', () => {
  //state declaration
  const count = ref(100)
  //computed properties
  const doubleCount = computed(() => count.value * 2)
  //actions
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
