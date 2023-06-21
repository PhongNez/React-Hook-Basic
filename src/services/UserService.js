import axios from './Customize-axios'
const fetchApiUser = (page) => {
    return axios.get(`users?page=${page}`)
}

export { fetchApiUser }