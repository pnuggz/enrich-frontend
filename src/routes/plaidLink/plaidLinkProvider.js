import React, { useEffect } from "react";

import { useStateValue } from "../../lib/state";
import history from "../../lib/history";

import { PlaidLinkController } from "./plaidLinkController";

import { accountsDataRequest } from "../../sharedModels/accountsMdl";
import { plaidTokenRequest } from "../../sharedModels/plaidMdl";

const PlaidLink = () => {
  const userData = sessionStorage.getItem("userData");
  const jsonUserInfo = JSON.parse(userData);

  const [{ plaidState }, dispatchPlaidStateAction] = useStateValue();
  const linkState = plaidState.linkState;

  useEffect(() => {
    const fetch = accountsDataRequest(jsonUserInfo);

    fetch
      .then(res => res.json())
      .then(res => {
        if (res) {
          jsonUserInfo.token = res.token;
          jsonUserInfo.tokenCreatedDate = res.tokenCreatedDate;
          sessionStorage.setItem("userData", JSON.stringify(jsonUserInfo));

          dispatchPlaidStateAction({
            type: "PLAID_UPDATE_ACCOUNTS_DATA",
            payload: res.data.accounts
          });
        }
      });
  }, []);

  useEffect(() => {
    if (linkState.publicToken !== null) {
      if (!jsonUserInfo) {
        history.push("/login");
      }

      jsonUserInfo.data = {
        ...jsonUserInfo.data,
        plaidPublicToken: linkState.publicToken,
        institution: linkState.institution
      };

      const fetch = plaidTokenRequest(jsonUserInfo);

      fetch
        .then(res => res.json())
        .then(res => {
          if (res) {
            const status = res.status;
            jsonUserInfo.token = res.token;
            jsonUserInfo.tokenCreatedDate = res.tokenCreatedDate;
            sessionStorage.setItem("userData", JSON.stringify(jsonUserInfo));

            if (status.code === 500) {
              console.log(status.err);
            }

            dispatchPlaidStateAction({
              type: "PLAID_UPDATE_ACCOUNTS_DATA",
              payload: res.data.accounts
            });
          }
        });
    }
  }, [linkState]);

  return (
    <React.Fragment>
      <PlaidLinkController
        plaidState={plaidState}
        dispatchPlaidStateAction={dispatchPlaidStateAction}
      />
    </React.Fragment>
  );
};

export default PlaidLink;
