import React, { useState, useEffect } from "react";
import posed from "react-pose";

import { PageLayout } from "../../modules/pageLayout/index";

import { PlaidLinkModule } from "../../modules/plaidLink";

const posedDivConfig = {
  preLoad: {
    x: "-100%"
  },
  loaded: {
    x: 0
  }
};

const ParentDiv = posed.div(posedDivConfig);

export const PlaidLinkViewer = props => {
  const plaidState = props.plaidState;
  const accountsData = plaidState.accountsData;
  const isLoading = props.isLoading;
  const handlePlaidSuccess = props.handlePlaidSuccess;
  const handlePlaidFail = props.handlePlaidFail;
  const handlePlaidExit = props.handlePlaidExit;

  const renderAccounts = () => {
    const isLoading = accountsData.isLoading;
    const accounts = accountsData.accounts;

    if (isLoading) {
      return <div>IS LOADING...</div>;
    }

    return (
      <div className="grid">
        <div className="column is-full">
          <PlaidLinkModule
            handlePlaidSuccess={handlePlaidSuccess}
            handlePlaidFail={handlePlaidFail}
            handlePlaidExit={handlePlaidExit}
          ></PlaidLinkModule>
        </div>
        <div className="column is-full">
          <div className="grid">
            {accounts.map(account => {
              return (
                <div className="column is-full">
                  <div class="card__header">
                    <h5>{account.name}</h5>
                  </div>
                  <div class="card__content">
                    <p>{account.official_name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <PageLayout>
      <ParentDiv pose={isLoading ? "preLoad" : "loaded"}>
        <div className="grid has-centered is-vertical">
          <div className="column is-three-fifths is-desktop-half is-desktop-x-two-fifths">
            {renderAccounts()}
          </div>
        </div>
      </ParentDiv>
    </PageLayout>
  );
};
