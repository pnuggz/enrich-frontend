import React from "react";

import PlaidController from "./plaidController";

const PlaidLink = props => {
  const config = {
    clientName: "Your app name",
    env: "development",
    product: ["transactions"],
    publicKey: "668bf16942e7199f0698533e8f5833",
    countryCodes: ["US", "GB", "ES", "FR", "CAR", "AU"]
  };

  return (
    <React.Fragment>
      <PlaidController props={props} config={config}></PlaidController>
    </React.Fragment>
  );
};

export default PlaidLink;
