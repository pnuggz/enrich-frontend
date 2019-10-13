import React, { useEffect } from "react";

import { useStateValue } from "../../../../lib/state";
import history from "../../../../lib/history";

import { AddController } from "./addController";

import { plaidTokenRequest } from "../../../../sharedModels/plaidMdl";
import { accountsDataRequest } from "../../../../sharedModels/accountsMdl";

const Add = () => {
  const [{ accountState }, dispatchAccountStateAction] = useStateValue();
  const accountsData = accountState.accountsData;
  const plaidLinkState = accountState.plaidLinkState;

  useEffect(() => {}, []);

  useEffect(() => {
    const exchangePlaidToken = async () => {
      const response = await plaidTokenRequest(plaidLinkState);
      console.log(response);
      dispatchAccountStateAction({
        type: "ADD_ACCOUNT_LOADED",
        payload: {
          accounts: response.data.accounts,
          existingAccounts: response.data.existingAccounts
        }
      });

      dispatchAccountStateAction({
        type: "PLAID_SAVE_ACCESS_TOKEN",
        payload: {
          accessToken: response.data.accessToken,
          accounts: response.data.accounts,
          existingAccounts: response.data.existingAccounts
        }
      });
    };

    if (plaidLinkState.publicToken !== null && accountsData.isLoading) {
      exchangePlaidToken();
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
