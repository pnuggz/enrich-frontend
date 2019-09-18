import React, { useState, useEffect } from "react";

import { LoginViewer } from "./loginViewer";

export const LoginController = props => {
  const loginState = props.loginState;
  const dispatchLoginStateAction = props.dispatchLoginStateAction;
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(false);
  }, []);

  const onSubmitForm = state => {
    dispatchLoginStateAction({
      type: "LOGIN_FORM_SUBMIT",
      payload: state
    });
  };

  return (
    <React.Fragment>
      <LoginViewer
        loginState={loginState}
        onSubmitForm={onSubmitForm}
        isLoading={isLoading}
      />
    </React.Fragment>
  );
};
