import React, { useState, useEffect } from "react";
import posed from "react-pose";

import { useStateValue } from "../../lib/state";

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

const Signup = () => {
  const [{ signupState }, dispatchSignupStateAction] = useStateValue();
  const [formData, setFormData] = useState(signupState.formData);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(false);
  }, []);

  // const handleChange = e => {
  //   const id = e.target.id;
  //   const val = e.target.value;

  //   console.log(formData);
  // };

  function onSubmitForm(state) {
    alert(JSON.stringify(state, null, 2));
  }

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

export default Signup;
