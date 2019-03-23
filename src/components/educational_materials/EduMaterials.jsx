import React from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Container, Row, Col, Nav } from 'react-bootstrap'

import Sections from './Sections.jsx'
import sectionsArray from './sections.json'

import { setActiveLink } from '../../actions/setActiveLink.js'

class EduMaterials extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentLink: "/educational_materials"
		}
	}

	componentDidMount() {
		let link = this.props.location.pathname;
		if (link === "/educational_materials") link = "/educational_materials/"
		this.props.setActiveLink(link);

	}

	componentDidUpdate(prevProps, prevState) {
		let link = this.props.location.pathname;
		if (link === "/educational_materials") link = "/educational_materials/"
		this.props.setActiveLink(link);

	}

	render() {
    const { path } = this.props.match;
		return (
			<Container as="main" className="educational-materials" fluid={true}>
        <Row>
          <Nav as={Col} fill variant="tabs">

            {sectionsArray.map((section, i) => {
              let active;
              ("/educational_materials" + section.link === this.props.activeLink)
                ? active = "active"
                : active = "";

              return (
                <Nav.Item key={"edu-link--" + i}>
                  <Nav.Link as={Link} to={path + section.link} className={"nav-link " + active} href={section.link}>{section.name}</Nav.Link>
                </Nav.Item>
              )
            })}

          </Nav>
        </Row>
        <Row className="py-3">
          <Route
              path="/educational_materials"
              component={Sections}
          />
        </Row>
      </Container>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		activeLink: state.links.activeLink
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setActiveLink: (link) => {
			dispatch(setActiveLink(link))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EduMaterials)
