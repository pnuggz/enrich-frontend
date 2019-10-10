import React, { useEffect, useState } from "react"

import { AddAccountModalController } from "./addAccountModalController"

const AddAccountModal = props => {
  const onModalSubmit = props.onModalSubmit
  const onModalClose = props.onModalClose
  const accounts = props.accounts
  const isShowing = props.isShowing
  
  return <AddAccountModalController onModalSubmit={onModalSubmit} onModalClose={onModalClose} accounts={accounts} isShowing={isShowing}/>
}

export default AddAccountModal