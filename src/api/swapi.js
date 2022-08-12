import axios from "axios";

const BASE_SWAPI_URL = 'https://swapi.dev/api';

export const swapi = axios.create({
    baseURL: BASE_SWAPI_URL,
})

export const getFilms = async () => {
    const {data} = await swapi.get('/films')
    return data.results;
}

export const getPeople = async () => {
    const {data} = await swapi.get('/people')
    return data.results;
}