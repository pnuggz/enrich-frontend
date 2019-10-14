import React, { useEffect } from "react";

import { useStateValue } from "../../../../lib/state";
import history from "../../../../lib/history";

import { AddController } from "./addController";

import { plaidTokenRequest } from "../../../../sharedModels/plaidMdl";
import { addAccountsRequest } from "../../../../sharedModels/accountsMdl";

const Add = () => {
  const [{ accountState }, dispatchAccountStateAction] = useStateValue();
  const accountsData = accountState.accountsData;
  const addAccountData = accountState.addAccountData;
  const plaidLinkState = accountState.plaidLinkState;

  useEffect(() => {
    const exchangePlaidToken = async () => {
      const response = await plaidTokenRequest(plaidLinkState);

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
          accessToken: response.data.plaidData.accessToken,
          itemId: response.data.plaidData.itemId
        }
      });
    };

    if (plaidLinkState.publicToken !== null && accountsData.isLoading) {
      exchangePlaidToken();
    }
  }, [plaidLinkState]);

  useEffect(() => {
    const submitAccounts = async () => {
      const response = await addAccountsRequest({
        selectedAccounts: addAccountData.formSchema.selectedAccounts,
        plaidData: plaidLinkState
      });

      if (response.status.code !== 200) {
        dispatchAccountStateAction({ type: "ACCOUNT_MODAL_FAIL" });
        console.log(response.status);
        return;
      }

      dispatchAccountStateAction({ type: "ACCOUNT_MODAL_SUCCESS" });
      //eslint-disable-next-line
      history.push("/account");
    };

    if (addAccountData.isSubmit) {
      submitAccounts();
    }
    console.log(addAccountData);
  }, [addAccountData]);

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
