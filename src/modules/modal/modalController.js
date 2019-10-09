import React, { useEffect, useState } from "react"

import { ModalViewer } from "./modalViewer"

export const ModalController = props => {
  const isLoading = props.isLoading
  const isShowing = props.isShowing
  const onModalCloseClick = props.onModalCloseClick
  const header = props.header
  const children = props.children
  const footer = props.footer
  const [poseDisplayState, setPoseDisplayState] = useState("preLoad")

  useEffect(() => {
    if(isShowing) {
      setPoseDisplayState("loaded")
    } else {
      setPoseDisplayState("preLoad")
    }
  }, [isShowing])

  return (
    <React.Fragment>
      <ModalViewer
        isLoading={isLoading}
        isShowing={isShowing}
        onModalCloseClick={onModalCloseClick}
        header={header}
        children={children}
        footer={footer}
        poseDisplayState={poseDisplayState}
      />
    </React.Fragment>
  )
}