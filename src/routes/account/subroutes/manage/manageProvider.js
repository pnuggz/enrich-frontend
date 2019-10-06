import React, { useEffect } from "react";

import { useStateValue } from "../../../../lib/state";

import { ManageController } from "./manageController"

import { accountSelectedRequest } from "../../../../sharedModels/accountsMdl"

const Manage = props => {
  const router = props.router
  const [{ accountState }, dispatchAccountStateAction] = useStateValue()

  useEffect(() => {
    const loadAccounts = async () => {
      const accountId = router.match.params.id
      const response = await accountSelectedRequest(accountId);
      console.log(response)
      dispatchAccountStateAction({
        type: "ACCOUNT_LOADED",
        payload: response.data.account
      });
    }

    loadAccounts()
  }, [])

  return (
    <React.Fragment>
      <ManageController
        accountState={accountState}
        dispatchAccountStateAction={dispatchAccountStateAction}
      />
    </React.Fragment>
  )
}

export default Manage