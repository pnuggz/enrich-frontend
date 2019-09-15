import React, { useState, useEffect } from "react";
import PlaidLink from "react-plaid-link";

const PlaidLink = (token, metadata) => {
  return (
    <React.Fragment>
      <PlaidLink
        clientName="Your app name"
        env="sandbox"
        institution={null}
        publicKey={PLAID_PUBLIC_KEY}
        product={["auth", "transactions"]}
        apiVersion={"v1" || "v2"}
        token={"public-token-123..."}
        selectAccount={true} // deprecated – use https://dashboard.plaid.com/link
        webhook="https://webhooks.test.com"
        onEvent={this.handleOnEvent}
        onExit={this.handleOnExit}
        onLoad={this.handleOnLoad}
        onSuccess={this.handleOnSuccess}
      >
        Open Link and connect a bank account to Plaid
      </PlaidLink>
    </React.Fragment>
  );
};
