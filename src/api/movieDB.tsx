import axios from 'axios';


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '14f2c17513078b147a39843c41729788',
        language: 'es-ES'
    }
});

export default movieDB;