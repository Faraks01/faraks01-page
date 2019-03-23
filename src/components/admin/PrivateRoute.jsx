import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { mainPath, auth } = {...rest};
  return (
    <Route
      {...rest}
      render = { props =>
        auth.uid
          ? (<Component {...props} />)
          : (<Redirect
              to={{
                pathname: mainPath,
                state: { from: props.location }
              }}
            />)
      }
    />
  );
}

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth
	}
}

export default connect( mapStateToProps )( PrivateRoute )
