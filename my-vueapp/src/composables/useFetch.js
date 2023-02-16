import { onMounted, ref } from 'vue'
export default function useFetch(url = '') {
    const data = ref(null)
    const error = ref(null)

    function fetchData() {
        //const url = 'https://jsonplaceholder.typicode.com/todos'
        fetch(url)
            .then(response => response.json())
            .then(todos => {
                data.value = todos
                console.log(data.value)
            }).catch(err => {
                console.log('error')
                error.value = err
            })
    }
    onMounted(() => {
        fetchData()
    })
    return {
        data, error
    }
}