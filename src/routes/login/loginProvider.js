import React from "react";

import LoginReducerBundle from "./loginReducer"
import { contexts } from "../../contexts"
import StateProviderGenerator from "../../lib/stateProviderGenerator"

import history from "../../lib/history";

import { LoginController } from "./loginController";

const Login = () => {
  const { initialState, loginReducer } = LoginReducerBundle
  const LoginPageContext = contexts.loginPage

  return (
    <StateProviderGenerator reducer={loginReducer} initialState={initialState} ContextName={LoginPageContext}>
      <LoginController />
    </StateProviderGenerator >
  );
};

export default Login;
