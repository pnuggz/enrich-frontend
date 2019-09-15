import React, { useState, useEffect } from "react";
import PlaidLink from "react-plaid-link";

const PlaidContainer = props => {
  const handleOnExit = props.handleOnExit;
  const handleOnSuccess = props.handleOnSuccess;
  const { clientName, env, product, publicKey, countryCodes } = props.config;

  return (
    <React.Fragment>
      <PlaidLink
        clientName={clientName}
        env={env}
        publicKey={publicKey}
        product={product}
        onExit={handleOnExit}
        onSuccess={handleOnSuccess}
        countryCodes={countryCodes}
      >
        Open Link and connect a bank account to Plaid
      </PlaidLink>
    </React.Fragment>
  );
};

export default PlaidContainer;
