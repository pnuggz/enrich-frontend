import React, { useState, useEffect } from "react";
import posed from "react-pose";

import { PageLayout } from "../../modules/pageLayout/index";
import { SignupForm } from "../../modules/signupForm/index";

const posedDivConfig = {
  preLoad: {
    x: "-100%"
  },
  loaded: {
    x: 0
  }
};

const ParentDiv = posed.div(posedDivConfig);

export const SignupViewer = props => {
  const signupState = props.signupState;
  const onSubmitForm = props.onSubmitForm;
  const isLoading = props.isLoading;

  return (
    <PageLayout>
      <ParentDiv pose={isLoading ? "preLoad" : "loaded"}>
        <div className="grid has-centered is-vertical">
          <div className="column is-three-fifths is-desktop-half is-desktop-x-two-fifths panel has-bg-white has-text-black has-link-inherit">
            <SignupForm
              onSubmitForm={onSubmitForm}
              stateSchema={signupState.stateSchema}
              validationStateSchema={signupState.validationStateSchema}
            />
          </div>
        </div>
      </ParentDiv>
    </PageLayout>
  );
};
