const functions = require( 'firebase-functions' );
const admin = require( 'firebase-admin' );
admin.initializeApp( functions.config().firebase );
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest( ( request, response ) => {
	response.send( "Hello, Faraks01!" );
} );

const createNotification = notification => {
	return admin.firestore()
		.collection( "notifications" )
		.add( notification )
		.then( doc => {
			console.log( "notification added", doc );
		} )
}
exports.feedbacksCreated = functions.firestore.document( 'feedbacks/{feddbackId}' )
	.onCreate( doc => {
    const feedback = doc.data();
		const notification = {
			content: "Added a new project",
			user: feedback.name,
			time: admin.firestore.FieldValue.serverTimestamp()
		}
		return createNotification( notification );
	} )
