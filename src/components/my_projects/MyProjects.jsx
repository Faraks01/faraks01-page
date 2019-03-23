import React from 'react'
import { Container, Row } from 'react-bootstrap'
import delta_p_image from '../../images/my_projects/delta-p.jpg'

import CardInstance from './CardInstance.jsx'
import cards from './cards.json'

const MyProjects = (props) => {
  let images = [
    delta_p_image
  ];
  return (
    <Container className="my-projects-section m-0 bg-light d-flex flex-column" as="main" fluid={true}>
      <Row className="mt-auto p-0 bg-light">
        <h1 className="col-12 display-4 display-md-1 text-center">Мои работы</h1>
      </Row>
      <Row className="mb-auto p-0 bg-light">
        {cards.map((card, i) => (
          <CardInstance
            key={"my-projects-section-card--" + i}
            cardImg={images[i]}
            cardImgAlt={card.alt}
            title={card.title}
            text={card.text}
            href={card.href}
          />
        ))}
      </Row>
    </Container>
  )
}

export default MyProjects
