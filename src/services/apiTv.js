import  axios from "axios";

const apiTv = axios.create({
    baseURL: 'https://api.themoviedb.org/3/tv/'
})

export default apiTv;