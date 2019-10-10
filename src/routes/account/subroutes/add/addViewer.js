import React from "react";
import posed from "react-pose";

import { PageLayout } from "../../../../modules/pageLayout/index";

import { PlaidLinkModule } from "../../../../modules/plaidLink";
import { AddAccountModal } from "../../../../modules/addAccountModal"

const posedDivConfig = {
  preLoad: {
    x: "-100%"
  },
  loaded: {
    x: 0
  }
};

const ParentDiv = posed.div(posedDivConfig);

export const AddViewer = props => {
  const accountState = props.accountState
  const accounts = accountState.accountsData.accounts
  const plaidLinkState = accountState.plaidLinkState
  const isLoading = props.isLoading;
  const handlePlaidSuccess = props.handlePlaidSuccess;
  const handlePlaidFail = props.handlePlaidFail;
  const handlePlaidExit = props.handlePlaidExit;

  const handleModalSubmit = props.handleModalSubmit
  const handleModalClose = props.handleModalClose
  const isModalShowing = props.isModalShowing

  const renderAccounts = () => {
    if(plaidLinkState.accounts.length === 0) {
      return (
        <div className="column is-full">
          You have added all of the accounts from this institution.
        </div>
      )
    }

    return (
      <div className="column is-full grid">
        {plaidLinkState.accounts.map((account) => {
          return (
            <div className="column is-full">{account.mask}</div>
          )
        })}
      </div>
    )
  }

  return (
    <PageLayout>
      <ParentDiv pose={isLoading ? "preLoad" : "loaded"}>
        <div className="grid has-centered is-vertical">
          <div className="column is-three-fifths is-desktop-half is-desktop-x-two-fifths">
            <div className="grid">
              <div className="column is-full">
                <PlaidLinkModule
                  handlePlaidSuccess={handlePlaidSuccess}
                  handlePlaidFail={handlePlaidFail}
                  handlePlaidExit={handlePlaidExit}
                ></PlaidLinkModule>
              </div>
            </div>
          </div>
        </div>
      </ParentDiv>

      <AddAccountModal
        onModalSubmit={handleModalSubmit}
        onModalClose={handleModalClose}
        accounts={accounts}
        isModalShowing={isModalShowing}
      />

    </PageLayout>
  );
};
