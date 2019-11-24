import React, { useState, useEffect, useContext } from "react";

import { contextsState } from "../../contexts";

import { loginRequest, loginRefreshData } from "../../sharedModels/loginMdl";

import { LoginViewer } from "./loginViewer";

export const LoginController = props => {
  const useStateValue = contextsState('loginPage')
  const [loginState, dispatchLoginStateAction] = useStateValue()

  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(false);
  }, []);

  useEffect(() => {
    const submitLogin = async () => {
      const response = await loginRequest(loginState.stateSchema);
      if (response === undefined || response.status.code !== 200) {
        dispatchLoginStateAction({ type: "LOGIN_FAIL" });
        console.log(response.status);
        return;
      }

      loginRefreshData()

      dispatchLoginStateAction({ type: "LOGIN_SUCCESS" });
      //eslint-disable-next-line
      history.push("/dashboard");
    };

    if (loginState.isSubmit) {
      submitLogin();
    }
  }, [loginState]);

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
