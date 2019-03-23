import React from 'react'
import { Col, Card, Button } from 'react-bootstrap'

const CardInstance = (props) => {
  return (
    <Col
      className="d-flex align-items-center justify-content-center mx-auto my-4"
      lg={12}
      xl={6}
    >
      <Card className="card-lg w-100 w-md-66 w-lg-75 w-xl-85 bg-dark text-white">
        <Card.Img src={props.cardImg} alt={props.cardImgAlt} />
        <Card.ImgOverlay as="a" href={props.href} rel="noopener noreferrer" target="_blank" className="overlay d-flex flex-column justify-content-center">
          <Card.Title as="h1" className="m-0 pl-5">{props.title}</Card.Title>
          <Card.Text className="col-12 offset-0 col-sm-8 offset-sm-4 d-flex align-items-center">{props.text}</Card.Text>
        </Card.ImgOverlay>
      </Card>

      <Card className="card-sm w-100 bg-dark text-white d-flex flex-column">
        <Card.Img variant="top" src={props.cardImg} alt={props.cardImgAlt} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Button as="a" href={props.href} rel="noopener noreferrer" target="_blank" variant="secondary" className="d-block w-100 w-sm-50 mx-auto">Перейти на сайт</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CardInstance
