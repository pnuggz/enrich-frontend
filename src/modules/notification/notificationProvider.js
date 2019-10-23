import React, { useEffect, useState } from "react"

import { useStateValue } from "../../lib/state"
import { usePolling } from "../../lib/usePolling"

import { NotificationController } from "./notificationController"

import { getAllNotifications, postNotificationStatus } from "../../sharedModels/notificationsMdl"

const Notification = () => {
  const [{ notificationState }, dispatchNotificationStateAction] = useStateValue()
  const notifications = notificationState.notifications
  const [notificationUpdateId, setNotificationUpdateId] = useState(null)

  useEffect(() => {
    const getNotifications = async () => {
      const response = await getAllNotifications()
      onPollingSuccess(response)
    }

    getNotifications()

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
    const updateNotification = async () => {
      const response = await postNotificationStatus(notificationUpdateId)
      if(response.status.code !== 200) {
        setNotificationUpdateId(null)
      }
    }

    if(notificationUpdateId !== null) {
      updateNotification()
    }
  }, [notificationUpdateId])

  return (
    <React.Fragment>
      <NotificationController notificationState={notificationState} dispatchNotificationStateAction={dispatchNotificationStateAction} setNotificationUpdateId={setNotificationUpdateId} />
    </React.Fragment>
  )
}

export default Notification