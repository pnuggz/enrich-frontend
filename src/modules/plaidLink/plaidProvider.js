import React from "react";

import PlaidController from "./plaidController";

import config from "../../config/index";

const PlaidLinkModule = props => {
  const handlePlaidSuccess = props.handlePlaidSuccess;
  const handlePlaidExit = props.handlePlaidExit;
  const handlePlaidFail = props.handlePlaidFail;

  const plaidConfig = config.plaid;

  return (
    <React.Fragment>
      <PlaidController
        handlePlaidSuccess={handlePlaidSuccess}
        handlePlaidExit={handlePlaidExit}
        handlePlaidFail={handlePlaidFail}
        config={plaidConfig}
      ></PlaidController>
    </React.Fragment>
  );
};

export default PlaidLinkModule;
