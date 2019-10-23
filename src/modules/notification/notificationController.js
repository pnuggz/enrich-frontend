import React, { useState, useEffect } from "react"

import { NotificationViewer } from "./notificationViewer"

export const NotificationController = props => {
  const notificationState = props.notificationState
  const dispatchNotificationStateAction = props.dispatchNotificationStateAction
  const notifications = notificationState.notifications
  const setNotificationUpdateId = props.setNotificationUpdateId
  const [hasNew, setHasNew] = useState(false)
  const [buttonStyle, setButtonStyle] = useState({})
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const anyNew = notifications.reduce((bool, notification) => {
      if (!notification.is_read) {
        bool = true
      }
      return bool
    }, false)
    setHasNew(anyNew)
  }, [notifications])

  const onClickNotification = event => {
    const dataset = event.target.dataset
    setNotificationUpdateId(dataset.notificationId)
  }

  const onNotificationHover = hover => {
    setIsHovered(hover)
  }

  useEffect(() => {
    const buttonStyle = {
      background: "grey"
    }
    if (hasNew) {
      buttonStyle.background = "red"
    }

    setButtonStyle(buttonStyle)
  }, [hasNew])

  return (
    <React.Fragment>
      <NotificationViewer
        notificationState={notificationState}
        buttonStyle={buttonStyle}
        onClickNotification={onClickNotification}
        onNotificationHover={onNotificationHover}
        isHovered={isHovered}
      />
    </React.Fragment>
  )
}