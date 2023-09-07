import axios from 'axios'
import { API, API_KEY, API_URL_POPULAR, API_URL_SEARCH } from '../config'
import { FILMS_BY_NAME, FILMS_DETAIL, FILMS_POPULAR } from '../reducers/type'

// ==============ALL FILMS =============
export const getAllFilms = () => {
	return async dispatch => {
		const res = await axios.get(API_URL_POPULAR, {
			headers: {
				'Content-Type': 'application/json',
				'X-API-KEY': API_KEY,
			},
		})
		dispatch({
			type: FILMS_POPULAR,
			payload: res.data.films,
		})
	}
}

// ==========FILMS BY NAME =================
export const searchFilms = name => {
	return async dispatch => {
		const res = await axios.get(API_URL_SEARCH + name + '&page=1', {
			headers: {
				'Content-Type': 'application/json',
				'X-API-KEY': API_KEY,
			},
		})
		dispatch({
			type: FILMS_BY_NAME,
			payload: res.data.films,
		})
	}
}

// ============FILM DETAIL =============
export const getFilmById = id => {
	return async dispatch => {
		const res = await axios.get(API + id, {
			headers: {
				'Content-Type': 'application/json',
				'X-API-KEY': API_KEY,
			},
		})
		dispatch({
			type: FILMS_DETAIL,
			payload: res.data,
		})
	}
}
// =================
export const Kinopoisk = id => {
	return <a href='"https://www.kinopoisk.ru/film/'></a>
}
