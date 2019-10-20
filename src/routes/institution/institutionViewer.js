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

export const InstitutionViewer = props => {
  const institutionState = props.institutionState;

  const institutionsData = institutionState.institutionsData;
  const isLoading = props.isLoading;

  const renderAccounts = () => {
    const isLoading = institutionsData.isLoading;
    const institutions = institutionsData.usersInstitutions;

    if (isLoading) {
      return <div>IS LOADING...</div>;
    }

    if (institutions.length === 0) {
      return <div><div>You currently don't have any institutions linked. Add one now to get started.</div><div>LINK BANK ACCOUNT</div></div>;
    }

    return (
      <div className="grid">
        <div className="column is-full">
          <div className="grid">
            {institutions.map(institution => {
              return (
                <div key={institution.id} className="column is-full">
                  <div className="card__header">
                    <h5>{institution.name}</h5>
                  </div>
                  <div className="card__content">
                    <p>{institutions.country}</p>
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
