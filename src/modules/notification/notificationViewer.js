import React from "react"

export const NotificationViewer = props => {
  const notificationState = props.notificationState
  const notifications = notificationState.notifications
  const buttonStyle = props.buttonStyle
  const onClickNotification = props.onClickNotification
  const onNotificationHover = props.onNotificationHover
  const isHovered = props.isHovered
  // onClick={event => onClickNotification(event)}
  return (
    <React.Fragment>
      <div style={buttonStyle} className={"has-dropdown is-hoverable"} onMouseEnter={() => onNotificationHover(true)} onMouseLeave={() => onNotificationHover(false)}>
        Notification
        {isHovered ? (
          <ul className="dropdown">
            {notifications.map(notification => {
              return (
                <li key={notification.id} className="dropdown__link" onClick={event => onClickNotification(event)}>
                  {notification.text}
                </li>
              )
            })}
          </ul>
        ) : null}
      </div>
    </React.Fragment>
  )
}