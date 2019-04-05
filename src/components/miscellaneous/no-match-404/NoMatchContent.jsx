import React from 'react';

const NoMatchContent = (props) => {
	let { lang, url } = props;
	url = (url.length <= 10) ? url : (url.match(/.{10}/gi)[0] + "..."); 
	let content = null;
	switch (lang) {
		case "RU":
			content = (
				<div className="m-auto text-center">
					<h1 className="display-1">404</h1>
					<h1 className="display-4">Страница</h1>
					<h1 className="display-4">{url}</h1>
					<h1 className="display-4">не существует!</h1>
				</div>
			)
			break;

		case "EN":
			content = (
				<div className="m-auto text-center">
					<h1 className="display-1">404</h1>
					<h1 className="display-4">Page</h1>
					<h1 className="display-4">{url}</h1>
					<h1 className="display-4">is not found!</h1>
				</div>
			)
			break;

		default:
			content = (
				<div className="m-auto text-center">
					<h1 className="display-1">404</h1>
					<h1 className="display-4">Страница</h1>
					<h1 className="display-4">{url}</h1>
					<h1 className="display-4">не существует!</h1>
				</div>
			)
			break;
	}
	return (
		{...content}
	);
};

export default NoMatchContent;