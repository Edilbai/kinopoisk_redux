import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'

export default function MainPage() {
	return (
		<div>
			<Header />
			<Main className='Main' />
			<Footer />
		</div>
	)
}
