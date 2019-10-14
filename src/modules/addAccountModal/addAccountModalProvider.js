import React, { useEffect, useState } from "react"

import { AddAccountModalController } from "./addAccountModalController"

const AddAccountModal = props => {
  const onModalSubmit = props.onModalSubmit
  const onModalClose = props.onModalClose
  const accounts = props.accounts
  const existingAccounts = props.existingAccounts
  const isShowing = props.isModalShowing
  const [addAccounts, setAddAccounts] = useState([])

  useEffect(() => {
    setAddAccounts(accounts.filter((account) => {
      return existingAccounts.reduce((indicator, existingAccount) => {
        return (account.official_name === existingAccount.official_name && account.mask === existingAccount.mask) ? false : indicator
      }, true)
    }))
  }, [accounts, existingAccounts])

  return <AddAccountModalController onModalSubmit={onModalSubmit} onModalClose={onModalClose} addAccounts={addAccounts} isShowing={isShowing} />
}

export default AddAccountModal