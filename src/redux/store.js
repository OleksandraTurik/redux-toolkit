import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from './slices/sliceFilms'
import peopleReducer from './reducer/people'

export const store = configureStore({reducer: {
    films: filmsReducer,
    people: peopleReducer
}})