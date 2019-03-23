import React from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import PrivateRoute from './PrivateRoute.jsx'
import LoginForm from './LoginForm.jsx'
import FeedbackList from '../feedback_list/FeedbackList.jsx'


const Admin = ( props ) => {
	let { match, auth } = props;
	return (
		<Switch>
			<Route
				exact
				path={match.path}
				render={() => (
					<Container as="main" className="admin-section d-flex flex-column">
						<LoginForm
							className="mx-auto mt-auto w-100 w-md-75 w-lg-50 d-flex flex-column"
						/>
						<ListGroup
							className={`mx-auto mb-auto py-3 w-100 w-md-75 w-lg-50 d-flex ${auth.uid ? "visible" : "invisible"}`}
						>
							<ListGroup.Item
								action
								as={Link}
								to={match.path + "/feedback_list"}
								variant="info"
								className="text-center my-auto"
							>
								Перейти в фидбеки
							</ListGroup.Item>
						</ListGroup>
					</Container>
				)}
			/>

			<PrivateRoute
				exact
				mainPath="/admin"
				path={match.path + "/feedback_list"}
				component={FeedbackList}
			/>
		</Switch>
	);
}

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth
	}
}

export default connect( mapStateToProps )( Admin )
