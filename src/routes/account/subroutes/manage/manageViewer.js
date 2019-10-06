import React from "react";
import posed from "react-pose";

import { PageLayout } from "../../../../modules/pageLayout"

const posedDivConfig = {
  preLoad: {
    x: "-100%"
  },
  loaded: {
    x: 0
  }
};

const ParentDiv = posed.div(posedDivConfig);

export const ManageViewer = props => {
  const isLoading = props.isLoading
  const accountState = props.accountState;
  const accounts = accountState.accountsData.accounts
  console.log(accounts)

  return (
    <PageLayout>
      <ParentDiv pose={isLoading ? "preLoad" : "loaded"}>
        <div className="grid">
          <div className="column is-full">
            TEST
          </div>
        </div>
      </ParentDiv>
    </PageLayout>
  )
}