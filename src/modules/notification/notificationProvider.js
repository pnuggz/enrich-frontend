import React, { useEffect, useState } from "react"

import ModelPolling from "nuggie-react-polling"

import { NotificationController } from "./notificationController"

import { getAllNotifications, postNotificationStatus } from "../../sharedModels/notificationsMdl"

const Notification = () => {
  const [notificationUpdateId, setNotificationUpdateId] = useState(null)
  const [notifications, setNotifications] = useState([])

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

    const updateNotifications = response.data || []
    setNotifications(updateNotifications)
    return true
  }

  const onPollingFailure = () => {
    stopPolling()
  }

  const [isPolling, startPolling, stopPolling] = ModelPolling({
    model: getAllNotifications(),
    interval: 3000, // in milliseconds(ms)
    retryCount: 3, // this is optional
    onSuccess: onPollingSuccess,
    onFailure: onPollingFailure
  });

  useEffect(() => {
    const updateNotification = async () => {
      const response = await postNotificationStatus(notificationUpdateId)
      if (response.status.code !== 200) {
        setNotificationUpdateId(null)
      }
    }

    if (notificationUpdateId !== null) {
      updateNotification()
    }
  }, [notificationUpdateId])

  return (
    <React.Fragment>
      <NotificationController notifications={notifications} setNotificationUpdateId={setNotificationUpdateId} />
    </React.Fragment>
  )
}

export default Notification