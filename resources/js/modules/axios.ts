import axios from "axios"

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
// axios.defaults.withCredentials = true
axios.defaults.baseURL = '/api/'


export default axios