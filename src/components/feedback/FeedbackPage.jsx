import React from 'react'
import { Container, Row } from 'react-bootstrap'

import FormBootstrap from './FormBootstrap.jsx'

const FeedbackPage = ( props ) => {
	return (
		<Container className="position-relative d-flex justify-content-center align-items-center py-3" as="main" fluid={true}>
      <Row className="col my-auto justify-content-center">
        <FormBootstrap/>
      </Row>
    </Container>
	)
}

export default FeedbackPage
