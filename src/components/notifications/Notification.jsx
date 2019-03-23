import React from 'react'
import { Image } from 'react-bootstrap'
import notificationSvg from '../../images/notification/notification.svg'

const Notification = (props) => {
  let { message } = props;
  return (
    <div className="mx-auto mb-3 bg-secondary text-center m-0 text-white" style={{ width: "260px" }}>
      <div className="d-flex align-items-center bg-dark py-1 text-light">
        <Image fluid={true} src={notificationSvg} className="w-15-rem ml-2" />
        <p className="flex-grow-1 m-0">Уведомление</p>
        <button type="button" className="close mb-1 mr-1" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <p className="m-0 py-2">{message}</p>
    </div>
  )
}

export default Notification
