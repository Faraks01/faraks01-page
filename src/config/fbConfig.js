import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Initialize Firebase
var config = {
	apiKey: "AIzaSyCEJO2RrJkjNb2bk1nwMhsWEN5Jfm83HFc",
	authDomain: "faraks01-page.firebaseapp.com",
	databaseURL: "https://faraks01-page.firebaseio.com",
	projectId: "faraks01-page",
	storageBucket: "faraks01-page.appspot.com",
	messagingSenderId: "486327552629"
};
firebase.initializeApp( config );
//
export default firebase
