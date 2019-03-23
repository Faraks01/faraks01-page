import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setActiveLink } from '../actions/setActiveLink.js'
import { Navbar, Nav, NavDropdown, ButtonGroup, Button, OverlayTrigger, Popover } from 'react-bootstrap'

import githubLogo from '../images/footer/github-logo.svg'
import gmailLogo from '../images/footer/gmail-logo.svg'
import telegramLogo from '../images/footer/telegram-logo.svg'
import discordLogo from '../images/footer/discord-logo.svg'

import sections from './educational_materials/sections.json'

class NavbarBootstrap extends React.Component {
	constructor(props) {
		super(props);
		this.handleLinkClick = this.handleLinkClick.bind(this);
	}

	handleLinkClick(event) {
    this.props.setActiveLink(event.target.innerHTML)
  }

	render () {
		const mailPopover = <Popover id="popover-basic">faraks01@gmail.com</Popover>
		const discordPopover = <Popover id="popover-basic">SnowLim3#5340</Popover>
		const { auth } = this.props;

		return (
			<Navbar className="w-100" fixed="top" variant="dark" bg="dark" expand="lg">
	      <Navbar.Toggle aria-controls="basic-navbar-nav"/>

	      <Navbar.Collapse id="basic-navbar-nav">
	        <Nav className="mr-auto">
	          <Nav.Link as={Link} to="/">На главную</Nav.Link>
	          <NavDropdown title="Учебные материалы" id="basic-nav-dropdown">

							{sections.map((section, i) => {
								let divider = null;
								if (i === 0) divider = <NavDropdown.Divider />
								return (
									<React.Fragment key={"NavLink--" + i}>
										<NavDropdown.Item onClick={this.handleLinkClick} as={Link} to={"/educational_materials" + section.link}>{section.name}</NavDropdown.Item>
				            {divider}
									</React.Fragment>
								);
							})}
	          </NavDropdown>
	          <Nav.Link as={Link} to="/my_projects">Мои работы</Nav.Link>
	          <Nav.Link as={Link} to="/feedback">Обратная связь</Nav.Link>
	          <Nav.Link as={Link} to="/about_me">Обо мне</Nav.Link>
	          {auth.uid && <Nav.Link as={Link} to="/admin">Админ</Nav.Link>}
	        </Nav>

					<ButtonGroup>
						<Button as="a" href="https://github.com/Faraks01" rel="noopener noreferrer" target="_blank" variant="secondary">
							<img className="button-picture" src={githubLogo} alt="Github"/>
						</Button>
						<Button as="a" href="https://t.me/AREZ_123" rel="noopener noreferrer" target="_blank" variant="secondary">
							<img className="button-picture" src={telegramLogo} alt="Telegram"/>
						</Button>
						<OverlayTrigger trigger="click" placement="bottom" overlay={mailPopover}>
							<Button variant="secondary">
								<img className="button-picture" src={gmailLogo} alt="Gmail"/>
							</Button>
						</OverlayTrigger>
						<OverlayTrigger trigger="click" placement="bottom" overlay={discordPopover}>
							<Button variant="secondary">
								<img className="button-picture" src={discordLogo} alt="Discord"/>
							</Button>
						</OverlayTrigger>
					</ButtonGroup>

	      </Navbar.Collapse>
	    </Navbar>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setActiveLink: (link) => {
			dispatch(setActiveLink(link))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarBootstrap)
