import React, { useEffect } from "react"

import { useStateValue } from "../../lib/state"
import { usePolling } from "../../lib/usePolling"

import { NotificationController } from "./notificationController"

import { getAllNotifications } from "../../sharedModels/notificationsMdl"

const Notification = () => {
  const [{ notificationState }, dispatchNotificationStateAction] = useStateValue()
  const notifications = notificationState.notifications

  useEffect(() => {
    return () => {
      stopPolling()
    }
  }, [])

  const onPollingSuccess = (response) => {
    if (response.status.code !== 200) {
      stopPolling()
      return false
    }

    const notifications = response.data || []
    dispatchNotificationStateAction({
      type: "NOTIFICATION_UPDATE",
      payload: notifications
    })
    return true
  }

  const onPollingFailure = () => {
    stopPolling()
  }

  const [isPolling, startPolling, stopPolling] = usePolling({
    model: getAllNotifications(),
    interval: 3000, // in milliseconds(ms)
    retryCount: 3, // this is optional
    onSuccess: onPollingSuccess,
    onFailure: onPollingFailure
  });

  useEffect(() => {
    console.log(notifications)
  }, [notifications])

  return (
    <React.Fragment>
      <NotificationController notificationState={notificationState} dispatchNotificationStateAction={dispatchNotificationStateAction} />
    </React.Fragment>
  )
}

export default Notification