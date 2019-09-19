import React from "react";
import PlaidLink from "react-plaid-link";

const PlaidContainer = props => {
  const handlePlaidSuccess = props.handlePlaidSuccess;
  const handlePlaidFail = props.handlePlaidFail;
  const handlePlaidExit = props.handlePlaidExit;
  const { clientName, env, product, publicKey, countryCodes } = props.config;

  return (
    <React.Fragment>
      <PlaidLink
        clientName={clientName}
        env={env}
        publicKey={publicKey}
        product={product}
        onExit={handlePlaidExit}
        onSuccess={handlePlaidSuccess}
        onEvent={handlePlaidFail}
        countryCodes={countryCodes}
      >
        Open Link and connect a bank account to Plaid
      </PlaidLink>
    </React.Fragment>
  );
};

export default PlaidContainer;
