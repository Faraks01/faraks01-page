const initState = {
	siteUrl: "",
	activeLink: "/educational_materials/"
}
const linksReducer = ( state = initState, action ) => {
  switch ( action.type ) {
	case "SET_ACTIVE_LINK":
		return { ...state,
			activeLink: action.activeLink
		};
	case "SET_SITE_URL":
		return { ...state,
			siteUrl: action.siteUrl
		};
	default:
		return state;
	}
}

export default linksReducer
