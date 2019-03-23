const initState = {};
const authReducer = ( state = initState, action ) => {
	switch ( action.type ) {
	case "LOGIN_ERROR":
    console.log("LOGIN_ERROR:", true);
		return state;
	case "LOGIN_SUCCESS":
		return state;
	case "SIGNOUT_SUCCESS":
    return state;
	default:
		return state;
	}
}
export default authReducer
