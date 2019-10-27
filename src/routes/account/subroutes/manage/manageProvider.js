import React, { useEffect } from "react";

import { useStateValue } from "../../../../lib/state";

import { ManageController } from "./manageController"

const Manage = props => {
  const router = props.router
  const [{ accountState }, dispatchAccountStateAction] = useStateValue()

  useEffect(() => {
    const loadAccount = async () => {
      return
      const accountId = router.match.params.id
      // const response = await accountSelectedRequest(accountId);

      dispatchAccountStateAction({
        type: "ACCOUNT_LOADED",
        // payload: response.data.account
      });
    }

    loadAccount()
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