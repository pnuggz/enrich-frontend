import React, { useEffect } from "react";

import { useStateValue } from "../../../../lib/state";
import history from "../../../../lib/history";

import { AddController } from "./addController";

import { plaidTokenRequest } from "../../../../sharedModels/plaidMdl";
import { accountsDataRequest } from "../../../../sharedModels/accountsMdl";

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
        type: "ACCOUNT_LOADED",
        payload: response.data.accounts
      });

      dispatchAccountStateAction({
        type: "PLAID_SAVE_ACCESS_TOKEN",
        payload: response.data.accessToken
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
