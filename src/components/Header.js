import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllFilms, searchFilms } from '../redux/actions'
import './Header.css'

export default function Header() {
	const [value, setValue] = useState()
	const dispatch = useDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		dispatch(getAllFilms())
	}, [])

	const click = e => {
		e.preventDefault()
		dispatch(searchFilms(value))
		navigate('/')
	}
	return (
		<div className='Header'>
			<div className='inpBtn'>
				<form onSubmit={e => click(e)}>
					<input
						type='text'
						placeholder='enter the movie name'
						onChange={e => setValue(e.target.value)}
					/>
					<button type='submit'>Search</button>
				</form>
			</div>
		</div>
	)
}
