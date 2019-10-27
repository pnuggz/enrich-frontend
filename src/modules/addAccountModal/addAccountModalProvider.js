import React, { useEffect, useState } from "react";

import { AddAccountModalController } from "./addAccountModalController";

import { getAllAccountsByInstitutionId, getUserAccountsByInstitutionId } from "../../sharedModels/accountsMdl"

const AddAccountModal = props => {
  const basiqInstitutionId = props.basiqInstitutionId
  const [accountsIsLoading, setAccountsIsLoading] = useState(true)

  const onModalSubmit = props.onModalSubmit;
  const onModalClose = props.onModalClose;
  const isShowing = props.isModalShowing;
  const [accounts, setAccounts] = useState(null);
  const [existingAccounts, setExistingAccounts] = useState(null);
  const [addAccounts, setAddAccounts] = useState([]);

  useEffect(() => {
    const loadAccount = async () => {
      const response = await getAllAccountsByInstitutionId(basiqInstitutionId);
      if (response === undefined || response.status.code !== 200) {
        return
      }
      setAccounts(response.data.accounts)
    }

    const loadUserAccount = async () => {
      const response = await getUserAccountsByInstitutionId(basiqInstitutionId)
      if (response.status.code !== 200) {
        return
      }
      setExistingAccounts(response.data.accounts)
    }

    if (basiqInstitutionId !== null && isShowing) {
      loadAccount()
      loadUserAccount()
    }
  }, [basiqInstitutionId, isShowing]);

  useEffect(() => {
    if (accounts !== null && existingAccounts !== null) {
      console.log(accounts)
      console.log(existingAccounts)
      setAddAccounts(
        accounts.filter(account => {
          return existingAccounts.reduce((indicator, existingAccount) => {
            return account.accountNo === existingAccount.account_number
              ? false
              : indicator;
          }, true);
        })
      );
      setAccountsIsLoading(false)
    }
  }, [accounts, existingAccounts]);

  return (
    <AddAccountModalController
      onModalSubmit={onModalSubmit}
      onModalClose={onModalClose}
      addAccounts={addAccounts}
      setAddAccounts={setAddAccounts}
      isShowing={isShowing}
      accountsIsLoading={accountsIsLoading}
      setAccountsIsLoading={setAccountsIsLoading}
    />
  );
};

export default AddAccountModal;
