import React, { useEffect } from "react";

import { useStateValue } from "../../lib/state";
import history from "../../lib/history";

import { PlaidLinkController } from "./plaidLinkController";

import { plaidTokenRequest } from "../../sharedModels/plaidMdl";

const PlaidLink = () => {
  const [{ plaidState }, dispatchPlaidStateAction] = useStateValue();
  const linkState = plaidState.linkState

  useEffect(() => {
    if(linkState.publicToken !== null) {
      const userData = sessionStorage.getItem("userData");
      const jsonUserInfo = JSON.parse(userData);
    
      if (!jsonUserInfo) {
        history.push('/login')
      }

      jsonUserInfo.plaidPublicToken = linkState.publicToken

      const fetch = plaidTokenRequest(jsonUserInfo);

      fetch
        .then(res => res.json())
        .then(res => {
          if (res) {
            console.log(res);
            // sessionStorage.setItem("userInfo", JSON.stringify(res));

            //eslint-disable-next-line
            // history.push("/landing");
          }
        });
    }
  }, [linkState])

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
