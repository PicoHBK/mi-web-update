import axios from "axios"

const apiWeb = axios.create({
    //baseURL: "http://127.0.0.1:8000/"
    baseURL: "https://mi-web-django-back-production.up.railway.app/"
})

export default apiWeb;