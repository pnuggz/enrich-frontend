import React, { useState, useEffect } from "react";

import { AddViewer } from "./addViewer";

export const AddController = props => {
  const accountState = props.accountState;
  const dispatchAccountStateAction = props.dispatchAccountStateAction;
  const plaidLinkState = props.plaidLinkState
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(false);
  }, []);

  useEffect(() => {
    console.log(plaidLinkState);
  }, [plaidLinkState]);

  const handlePlaidSuccess = (public_token, metadata) => {
    dispatchAccountStateAction({
      type: "PLAID_SAVE_PUBLIC_TOKEN",
      payload: {
        publicToken: public_token,
        institution: metadata.institution
      }
    });
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
      <AddViewer
        accountState={accountState}
        dispatchAccountStateAction={dispatchAccountStateAction}
        isLoading={isLoading}
        handlePlaidSuccess={handlePlaidSuccess}
        handlePlaidFail={handlePlaidFail}
        handlePlaidExit={handlePlaidExit}
      />
    </React.Fragment>
  );
};
