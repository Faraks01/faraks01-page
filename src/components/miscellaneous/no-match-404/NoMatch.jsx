import React from 'react';
import { Container } from "react-bootstrap";
import NoMatchContent from './NoMatchContent';

const NoMatch = (props) => {
	let { lang, location } = props;
	return (
		<Container as="main" className="d-flex"><NoMatchContent lang={lang} url={location.pathname}/></Container>
	);
};

export default NoMatch;