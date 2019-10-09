import React, { useEffect, useState } from "react"

import { ModalController } from "./modalController"

const Modal = props => {
  const isLoading = props.isLoading
  const isShowing = props.isShowing
  const onModalCloseClick = props.onModalCloseClick
  const header = props.header
  const children = props.children
  const footer = props.footer

  useEffect(() => {

  }, [])

  return (
    <React.Fragment>
      <ModalController
        isLoading={isLoading}
        isShowing={isShowing}
        onModalCloseClick={onModalCloseClick}
        header={header}
        children={children}
        footer={footer}
      />
    </React.Fragment>
  )
}

export default Modal