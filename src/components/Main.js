import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getFilmById } from '../redux/actions'
import './Main.css'

export default function Main() {
	const dispatch = useDispatch()
	const data = useSelector(s => s.films)
	console.log(data)
	return (
		<div className='list'>
			{data?.map(el => {
				return (
					<div className='card' key={el.filmId}>
						<img src={el.posterUrl} />
						<h2>{el.nameRu}</h2>
						<Link
							onClick={() => dispatch(getFilmById(el.filmId))}
							to={`/detail/${el.filmId}`}
						>
							<button>Подробнее</button>
						</Link>
					</div>
				)
			})}
		</div>
	)
}
