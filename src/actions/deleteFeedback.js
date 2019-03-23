export const deleteFeedback = id => {
	return ( dispatch, getState, { getFirestore, getFirebase } ) => {
		// make async call to database
		const firestore = getFirestore();
		firestore.collection( 'feedbacks' )
			.doc( id )
			.delete()
			.then( () => {
				console.log(`doc: ${id} deleted`);
			} )
			.catch( error => {
				console.log(error);
			} )
	};
}
