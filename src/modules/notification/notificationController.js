import React, { useState, useEffect } from "react"

import { NotificationViewer } from "./notificationViewer"

export const NotificationController = props => {
  const notifications = props.notifications
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
        notifications={notifications}
        buttonStyle={buttonStyle}
        onClickNotification={onClickNotification}
        onNotificationHover={onNotificationHover}
        isHovered={isHovered}
      />
    </React.Fragment>
  )
}