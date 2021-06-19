import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://countryapp-env.eba-av482fmu.us-east-2.elasticbeanstalk.com'
})

export default instance