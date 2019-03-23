import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = ( props ) => {
	return (
		<Container className="d-flex bg-dark px-4" as="footer" fluid={true}>
      <h5 className="w-max-content my-auto mx-auto mx-md-0 mr-md-auto bg-secondary rounded text-white text-nowrap p-2">© Made by Faraks01</h5>
    </Container>
	)
}

export default Footer
