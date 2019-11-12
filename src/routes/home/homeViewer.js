import React from "react";
import posed from "react-pose";

import Hero from "../../components/hero";
import HeroLeft from "./components/heroLeft";
import HeroRight from "./components/heroRight";

import SectionOne from "./components/sectionOne";
import SectionTwo from "./components/sectionTwo";

const posedDivConfig = {
  preLoad: {
    x: "-100%"
  },
  loaded: {
    x: 0
  }
};

export const HomeViewer = props => {
  const institutionState = props.institutionState;
  const institutionForm = institutionState.institutionForm;
  const institutions = institutionState.institutionsData.institutions;
  const isLoading = props.isLoading;

  const selectedInstitution = props.selectedInstitution;
  const onSelectInstitution = props.onSelectInstitution;
  const onSubmitForm = props.onSubmitForm;

  return (
    <React.Fragment>
      <div className="index-page scrollbar-styling">
        <Hero>
          <div className="row justify-content-between align-items-center text-left">
            <div className="col-md-6 col-lg-6">
              <HeroLeft />
            </div>
            <div className="col-md-5 col-lg-5 hidden-md-down">
              <HeroRight
                isLoading={isLoading}
                institutions={institutions}
                onSelectInstitution={onSelectInstitution}
                institutionForm={institutionForm}
                onSubmitForm={onSubmitForm}
                stateSchema={institutionForm.stateSchema}
                validationStateSchema={institutionForm.validationStateSchema}
                institution={selectedInstitution}
              />
            </div>
          </div>
        </Hero>

        <SectionOne />
        <SectionTwo />
      </div>
    </React.Fragment>
  );
};
