import React, { useState, useEffect } from "react";
import posed from "react-pose";

import Hero from "../../components/hero";

import { PageLayout } from "../../modules/pageLayout/index";
import { LoginForm } from "../../modules/loginForm/index";

const posedDivConfig = {
  preLoad: {
    x: "-100%"
  },
  loaded: {
    x: 0
  }
};

const ParentDiv = posed.div(posedDivConfig);

export const LoginViewer = props => {
  const loginState = props.loginState;
  const onSubmitForm = props.onSubmitForm;
  const isLoading = props.isLoading;

  return (
    <PageLayout>
      <ParentDiv pose={isLoading ? "preLoad" : "loaded"}>
        <div className="background background--dots">
          <Hero>
            <div className="container">
              <div className="row">
                <div className="offset-lg-0 offset-md-3 col-md-6 col-lg-5">
                  <LoginForm
                    loginState={loginState}
                    onSubmitForm={onSubmitForm}
                    stateSchema={loginState.stateSchema}
                    validationStateSchema={loginState.validationStateSchema}
                  />
                </div>
              </div>
            </div>
          </Hero>
        </div>
      </ParentDiv>
    </PageLayout>
  );
};
