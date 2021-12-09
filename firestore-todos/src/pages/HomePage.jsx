import React from 'react'
import Container from 'react-bootstrap/Container'
import {useAuthContext} from '../contexts/AuthContext'

const HomePage = () => {

	return (
		<Container className="py-3">
			<h1>Welcome!</h1>
		</Container>
	)
}

export default HomePage
