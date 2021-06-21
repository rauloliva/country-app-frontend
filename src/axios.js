import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://country-app-api.glitch.me'
})

export default instance