import React from 'react';
import { Container, Row, Image, Col } from 'react-bootstrap';
import GoogleChromeSvg from '../../../images/internet-explorer-stub-page/Google_Chrome_icon.svg'
import FirefoxSvg from '../../../images/internet-explorer-stub-page/Firefox_Logo.svg'
import OperaSvg from '../../../images/internet-explorer-stub-page/Opera_icon.svg'
import SafariSvg from '../../../images/internet-explorer-stub-page/Safari_browser_logo.svg'
const translations = require("./translations.json")

const IEStub = () => {
	const { RU, EN } = translations;
	return (
		<Container>
			<Row className="text-center mb-3">
				<h1 className="display-4">{EN.title}</h1>
				<h4>{EN.text}</h4>
			</Row>
			<hr style={{border: "2px solid lightgray"}}/>
			<Row className="text-center mb-3">
				<h1 className="display-4">{RU.title}</h1>
				<h4>{RU.text}</h4>
			</Row>
			<Row>
				<Col xs={12} md={6} lg={3} className="d-flex flex-column flex-center mb-3">
					<Image className="h-5rem mb-2" fluid src={GoogleChromeSvg}/>
					<a href="https://www.google.ru/intl/ru_ALL/chrome/" target="_blank" rel="noopener noreferrer">Google Chrome</a>
				</Col>
				<Col xs={12} md={6} lg={3} className="d-flex flex-column flex-center mb-3">
					<Image className="h-5rem mb-2" fluid src={FirefoxSvg}/>
					<a href="https://www.mozilla.org/ru/firefox/" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a>
				</Col>
				<Col xs={12} md={6} lg={3} className="d-flex flex-column flex-center mb-3">
					<Image className="h-5rem mb-2" fluid src={OperaSvg}/>
					<a href="https://www.opera.com/ru" target="_blank" rel="noopener noreferrer">Opera</a>
				</Col>
				<Col xs={12} md={6} lg={3} className="d-flex flex-column flex-center mb-3">
					<Image className="h-5rem mb-2" fluid src={SafariSvg}/>
					<a href="https://www.apple.com/ru/safari/" target="_blank" rel="noopener noreferrer">Safari</a>
				</Col>
			</Row>
		</Container>
	);
};

export default IEStub;