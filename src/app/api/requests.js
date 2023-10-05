import axios from 'axios';

const request = {
    localDebug: "http://localhost:3000",
    publishAPI: "https://fhir-project-api.vercel.app",
    envDev: ""
}

export default axios.create({
    baseURL : request.publishAPI
})