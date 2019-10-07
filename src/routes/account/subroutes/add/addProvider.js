import React, { useEffect } from "react";

import { useStateValue } from "../../../../lib/state";
import history from "../../../../lib/history";

import { AddController } from "./addController";

import { accountsDataRequest } from "../../../../sharedModels/accountsMdl";
import { plaidTokenRequest } from "../../../../sharedModels/plaidMdl";

const Add = () => {
  const [{ accountState }, dispatchAccountStateAction] = useStateValue()
  const plaidLinkState = accountState.plaidLinkState

  useEffect(() => {

  }, []);

  useEffect(() => {
    const exchangePlaidToken = async () => {
      const response = await plaidTokenRequest(plaidLinkState);
      console.log(response)
      dispatchAccountStateAction({
        type: "PLAID_UPDATE_ACCOUNTS_DATA",
        payload: response.data.accounts
      });
    }

    if (plaidLinkState.publicToken !== null) {
      exchangePlaidToken()
    }
  }, [plaidLinkState]);

  return (
    <React.Fragment>
      <AddController
        accountState={accountState}
        dispatchAccountStateAction={dispatchAccountStateAction}
      />
    </React.Fragment>
  );
};

export default Add;
