import React, { useEffect } from "react";

import { useStateValue } from "../../lib/state";

import { AccountController } from "./accountController"

import { accountsDataRequest } from "../../sharedModels/accountsMdl";

const Account = () => {
  const [{ accountState }, dispatchAccountStateAction] = useStateValue();

  useEffect(() => {
    const loadAccounts = async () => {
      const response = await accountsDataRequest();

      dispatchAccountStateAction({
        type: "ACCOUNT_LOADED",
        payload: response.data.accounts
      });
    }

    loadAccounts()
  }, []);

  return (
    <React.Fragment>
      <AccountController
        accountState={accountState}
        dispatchAccountStateAction={dispatchAccountStateAction}
      />
    </React.Fragment>
  );
};

export default Account;
