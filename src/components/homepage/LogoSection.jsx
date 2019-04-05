import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { LogoArr } from './LogoArr.js'

const LogoSection = (props) => {
  return (
    <Container as="section" className="logo-section d-flex align-items-center" fluid={true}>
      <Row className="my-auto justify-content-center">
        {LogoArr.map((obj, index) => (
          <Col key={"logo-" + index} as={Link} to={obj.link} xl={1} lg={2} md={3} sm={6} xs={6} className="d-flex justify-content-center align-items-center py-3" ><img className="img-thumbnail w-100 main-logo" src={obj.logo} alt="logo"/></Col>
        ))}
      </Row>
    </Container>
  );
}

export default LogoSection
