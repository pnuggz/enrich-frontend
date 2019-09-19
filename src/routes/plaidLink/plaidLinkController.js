import React, { useState, useEffect } from "react";

import { PlaidLinkViewer } from "./plaidLinkViewer";

export const PlaidLinkController = props => {
  const plaidState = props.plaidState;
  const dispatchPlaidStateAction = props.dispatchPlaidStateAction;
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(false);
  }, []);

  const handlePlaidSuccess = (public_token, metadata) => {
    console.log(public_token);
    console.log(metadata);
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
