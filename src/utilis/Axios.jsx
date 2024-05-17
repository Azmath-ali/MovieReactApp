import axios from "axios"

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjYxYjlhYjA4ZGQ2M2UzOTA5N2Y5Nzk3NjQ5MTUyZCIsInN1YiI6IjY2MzExZTNkNGMyNTkyMDEyYWM4Zjc1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nen9esY_s0qXae0X4rTTE4Ih-NNj2-XKSD970ze9AAY'
      }
})

export default instance