import linksReducer from './linksReducer'
import feedbacksReducer from './feedbacksReducer'
import authReducer from './authReducer.js'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers( {
	links: linksReducer,
	feedbacks: feedbacksReducer,
	firestore: firestoreReducer,
	firebase: firebaseReducer,
	auth: authReducer
} );
export default rootReducer
