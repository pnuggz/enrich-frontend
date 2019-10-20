import React, { useState, useEffect } from "react";

import { SignupViewer } from "./signupViewer";

export const SignupController = props => {
  const signupState = props.signupState;
  const dispatchSignupStateAction = props.dispatchSignupStateAction;
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(false);
  }, []);

  const onSubmitForm = state => {
    dispatchSignupStateAction({
      type: "SIGNUP_FORM_SUBMIT",
      payload: state
    });
  };

  return (
    <React.Fragment>
      <SignupViewer
        signupState={signupState}
        onSubmitForm={onSubmitForm}
        isLoading={isLoading}
      />
    </React.Fragment>
  );
};
