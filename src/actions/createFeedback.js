export const createFeedback = feedback => {
	return ( dispatch, getState, { getFirestore, getFirebase } ) => {
		// make async call to database
		const firestore = getFirestore();
		firestore.collection( 'feedbacks' )
			.add( { ...feedback,
				createdAt: new Date()
			} )
			.then( () => {
				dispatch( {
					type: "CREATE_FEEDBACK",
					feedback: feedback
				} )
			} )
      .catch(error => {
        dispatch({
          type: "CREATE_FEEDBACK_ERROR",
          error: error
        })
      })
	};
}
