import React, { useState, useEffect } from "react";

import { PlaidLinkViewer } from "./plaidLinkViewer";

export const PlaidLinkController = props => {
  const plaidState = props.plaidState;
  const dispatchPlaidStateAction = props.dispatchPlaidStateAction;
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(false);
  }, []);

  useEffect(() => {
    console.log(plaidState)
  }, [plaidState]);

  const handlePlaidSuccess = (public_token, metadata) => {
    dispatchPlaidStateAction({
      type: "PLAID_SAVE_PUBLIC_TOKEN",
      payload: {
        publicToken: public_token,
        linkSessionId: metadata.link_session_id
      }
    })
  };

  const handlePlaidExit = (err, metadata) => {
    console.log(err);
    console.log(metadata);
  };

  const handlePlaidFail = (eventName, metadata) => {
    console.log(eventName);
    console.log(metadata);
  };

  return (
    <React.Fragment>
      <PlaidLinkViewer
        plaidState={plaidState}
        dispatchPlaidStateAction={dispatchPlaidStateAction}
        isLoading={isLoading}
        handlePlaidSuccess={handlePlaidSuccess}
        handlePlaidFail={handlePlaidFail}
        handlePlaidExit={handlePlaidExit}
      />
    </React.Fragment>
  );
};
