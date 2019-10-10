import React, { useState, useEffect } from "react";

import { AddViewer } from "./addViewer";

export const AddController = props => {
  const accountState = props.accountState;
  const dispatchAccountStateAction = props.dispatchAccountStateAction;
  const plaidLinkState = props.plaidLinkState
  const [isLoading, setIsloading] = useState(true);

  const [isModalShowing, setIsModalShowing] = useState(false)

  useEffect(() => {
    setIsloading(false);
  }, []);

  // Display the modal if accounts are loaded
  useEffect(() => {
    if(plaidLinkState.accessToken !== null) {
      setIsModalShowing(true)
    }
  }, [plaidLinkState.accounts])

  const handlePlaidSuccess = (public_token, metadata) => {
    dispatchAccountStateAction({
      type: "PLAID_SAVE_PUBLIC_TOKEN",
      payload: {
        publicToken: public_token,
        institution: metadata.institution
      }
    });
  };

  // Modal events
  const handleModalSubmit = props => {

  }

  const handleModalClose = props => {

  }

  // Plaid events
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
        handleModalSubmit={handleModalSubmit}
        handleModalClose={handleModalClose}
        isModalShowing={isModalShowing}
      />
    </React.Fragment>
  );
};
