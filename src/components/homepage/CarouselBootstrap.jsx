import React from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap'
import htmlCssJsLogo from '../../images/slider/html-css-js.jpg'
import reactReduxLogo from '../../images/slider/react-redux.jpg'
import bootstrapLogo from '../../images/slider/bootstrap.jpg'
import nodeExpressLogo from '../../images/slider/node+express.jpg'
import mongoDbLogo from '../../images/slider/mongodb.jpg'
import webpackLogo from '../../images/slider/webpack.jpg'
import jestEnzymeLogo from '../../images/slider/jest-enzyme.jpg'

class CarouselBootstrap extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      controls: false
    }
  }

  render () {
    const { controls } = this.state;
    let logoArray = [
      htmlCssJsLogo,
      reactReduxLogo,
      bootstrapLogo,
      nodeExpressLogo,
      mongoDbLogo,
      webpackLogo,
      jestEnzymeLogo
    ];

    return (
      <Container fluid={true}>
        <Row className="justify-content-center">
          <Col className="bg-light m-0"/>
          <Carousel className="col-xl-6 col-lg-8 col-md-10 m-0 p-0" controls={controls}>
            {logoArray.map((logo, i) => (
              <Carousel.Item key={"logo--" + i}>
                <div className="w-100" style={{background: `url(${logo}) center no-repeat`, backgroundSize: "cover", height: "360px"}} />
              </Carousel.Item>
            ))}
          </Carousel>
          <Col className="bg-light m-0"/>
        </Row>
      </Container>
    );
  }
}

export default CarouselBootstrap;
