const initState = {
  feedbacks: {}
}

const feedbacksReducer = ( state = initState, action ) => {
  switch ( action.type ) {
  case "CREATE_FEEDBACK":
    console.log("CREATE_FEEDBACK", action.feedback);
    return state;
  case "CREATE_FEEDBACK_ERROR":
    console.log("CREATE_FEEDBACK_ERROR", action.error);
    return state;
  default:
    return state;
  }
}

export default feedbacksReducer
