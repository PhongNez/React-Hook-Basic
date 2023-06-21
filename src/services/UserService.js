import axios from './Customize-axios'
const fetchApiUser = () => {
    return axios.get('users?page=2')
}

export { fetchApiUser }