import React from "react";
import posed from "react-pose";

import { PageLayout } from "../../../../modules/pageLayout/index";

import { PlaidLinkModule } from "../../../../modules/plaidLink";

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
  const isLoading = props.isLoading;
  const handlePlaidSuccess = props.handlePlaidSuccess;
  const handlePlaidFail = props.handlePlaidFail;
  const handlePlaidExit = props.handlePlaidExit;


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
    </PageLayout>
  );
};
