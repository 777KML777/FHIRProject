import axios from 'axios';

const request = {
    localDebug: "http://localhost:3000",
    envDev: ""
}

export default axios.create({
    baseURL : request.localDebug
})