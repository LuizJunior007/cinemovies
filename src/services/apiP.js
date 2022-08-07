import  axios from "axios";

const apiP = axios.create({
    baseURL: 'https://api.themoviedb.org/3/search/'
})

export default apiP;