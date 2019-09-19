import React from "react";

import PlaidContainer from "./plaidContainer";

const PlaidController = props => {
  const handlePlaidSuccess = props.handlePlaidSuccess;
  const handlePlaidExit = props.handlePlaidExit;
  const handlePlaidFail = props.handlePlaidFail;
  const config = props.config;

  return (
    <React.Fragment>
      <PlaidContainer
        handlePlaidSuccess={handlePlaidSuccess}
        handlePlaidExit={handlePlaidExit}
        handlePlaidFail={handlePlaidFail}
        config={config}
      ></PlaidContainer>
    </React.Fragment>
  );
};

export default PlaidController;
