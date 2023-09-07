import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Detail.css'
import { Link } from 'react-router-dom'
import { Kinopoisk } from '../redux/actions'

export default function Detail() {
	const dispatch = useDispatch()
	const data = useSelector(s => s.detail)
	console.log(data)

	const href = 'https://www.kinopoisk.ru/film/'
	return (
		<div className='list_detail'>
			<div className='name_film'>
				<h2>{data.nameRu}</h2>
				<div>
					<Link to='/'>
						<button className='back'>Вернуться на главную</button>
					</Link>
					<a href={href + data.kinopoiskId}>
						<button className='back'>Смотреть</button>
					</a>
				</div>
			</div>

			<div className='list_wrapper'>
				<div>
					<div>
						<a href={href + data.kinopoiskId}>
							<img src={data.posterUrl} alt='uu' onClick={Kinopoisk()} />
						</a>
					</div>
				</div>
				<div className='list_info'>
					<h4>Год выпуска: {data.year}</h4>
					<div>
						{data.countries?.map(el => {
							return <h4>Страна: {el.country}</h4>
						})}
					</div>
					<div className='genre'>
						Жанр :
						{data.genres?.map(el => {
							return <h4>{el.genre},</h4>
						})}
					</div>
					<h4>Тип: {data.type}</h4>
					<h4>{data.description}</h4>
				</div>
			</div>
		</div>
	)
}
