import axios from "axios";

const apiFind = axios.create({
    baseURL: 'https://api.themoviedb.org/3/person/'
})

export default apiFind;