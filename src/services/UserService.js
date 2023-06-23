import axios from './Customize-axios'
const fetchApiUser = (page) => {
    return axios.get(`users?page=${page}`)
}

const createUser = (name, job) => {
    return axios.post('users', { name, job })
}
export { fetchApiUser, createUser }