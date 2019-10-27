import React from "react";
import posed from "react-pose";

import { PageLayout } from "../../modules/pageLayout";
import { AddAccountModal } from "../../modules/addAccountModal"

import Institution from "./components/institution"

const posedDivConfig = {
  preLoad: {
    x: "-100%"
  },
  loaded: {
    x: 0
  }
};

const ParentDiv = posed.div(posedDivConfig);

export const InstitutionViewer = props => {
  const institutionState = props.institutionState;

  const institutionsData = institutionState.institutionsData;
  const isLoading = props.isLoading;
  const handleInstitutionSelect = props.handleInstitutionSelect
  const selectedBasiqInstitutionId = props.selectedBasiqInstitutionId

  const handleModalSubmit = props.handleModalSubmit
  const handleModalClose = props.handleModalClose
  const isModalShowing = props.isModalShowing

  const institutionsIsLoading = institutionsData.isLoading;
  const institutions = institutionsData.usersInstitutions;

  return (
    <PageLayout>
      <ParentDiv pose={isLoading ? "preLoad" : "loaded"}>
        <div className="grid has-centered is-vertical">
          <div className="column is-three-fifths is-desktop-half is-desktop-x-two-fifths">
            {institutionsIsLoading ?
              <div>IS LOADING...</div> :
              <Institution
                institutions={institutions}
                handleInstitutionSelect={handleInstitutionSelect}
              />
            }
          </div>
        </div>
      </ParentDiv>

      <AddAccountModal
        basiqInstitutionId={selectedBasiqInstitutionId}
        onModalSubmit={handleModalSubmit}
        onModalClose={handleModalClose}
        isModalShowing={isModalShowing}
      />
    </PageLayout>
  );
};
