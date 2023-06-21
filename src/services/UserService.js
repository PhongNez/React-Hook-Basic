import axios from 'axios'
const fetchApiUser = () => {
    return axios.get('https://reqres.in/api/users?page=2')
}

export { fetchApiUser }