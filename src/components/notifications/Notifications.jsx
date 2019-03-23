import React from 'react'
import Notification from './Notification'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

const Notifications = (props) => {
  let { notifications } = props;
  console.log(notifications);
  return (
    <section className="notifications-section position-fixed d-flex flex-column z-index-2000 py-1" style={{right: "0", width: "300px"}}>
      {notifications && notifications.map((notification, i) => <Notification key={notification.id + i} message={notification.id}/>)}
    </section>
  )
}

const mapStateToProps = state => {
	return {
		notifications: state.firestore.ordered.notifications
	}
}

export default compose(
	connect( mapStateToProps ),
	firestoreConnect( [
		{ collection: 'notifications' }
	] )
)( Notifications );
