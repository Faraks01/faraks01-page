import React from 'react'
import { Container } from 'react-bootstrap'
import Table from './Table.jsx'

const FeedbackList = (props) => {
  return (
    <Container
      as="main"
      fluid={true}
      className="p-3 d-flex"
    >
      <Table/>
    </Container>
  );
}

export default FeedbackList
