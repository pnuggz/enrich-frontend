import React, { useEffect } from "react";

import { useStateValue } from "../../lib/state";
import history from "../../lib/history";

import { PlaidLinkController } from "./plaidLinkController";

const PlaidLink = () => {
  const [{ plaidState }, dispatchPlaidStateAction] = useStateValue();

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
