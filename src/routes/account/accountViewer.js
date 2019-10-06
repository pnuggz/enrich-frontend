import React from "react";
import posed from "react-pose";

import { PageLayout } from "../../modules/pageLayout";

const posedDivConfig = {
  preLoad: {
    x: "-100%"
  },
  loaded: {
    x: 0
  }
};

const ParentDiv = posed.div(posedDivConfig);

export const AccountViewer = props => {
  const accountState = props.accountState;
  const accountsData = accountState.accountsData
  const isLoading = props.isLoading;

  const renderAccounts = () => {
    const isLoading = accountsData.isLoading;
    const accounts = accountsData.accounts;

    if (isLoading) { return <div>IS LOADING...</div>; }

    return (
      <div className="grid">
        <div className="column is-full">
          <div className="grid">
            {accounts.map(account => {
              return (
                <div key={account.id} className="column is-full">
                  <div className="card__header">
                    <h5>{account.name}</h5>
                  </div>
                  <div className="card__content">
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
