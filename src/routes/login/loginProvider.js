import React, { useEffect } from "react";

import { useStateValue } from "../../lib/state";
import history from "../../lib/history";

import { loginRequest } from "../../sharedModels/loginMdl";

import { LoginController } from "./loginController";

const Login = () => {
  const [{ loginState }, dispatchLoginStateAction] = useStateValue();

  useEffect(() => {
    if (loginState.isSubmit) {
      const submitLogin = async () => {
        const response = await loginRequest(loginState.stateSchema);
        if (response.status.code !== 200) {
          dispatchLoginStateAction({ type: "LOGIN_FAIL" })
          console.log(response.status);
          return;
        }

        dispatchLoginStateAction({ type: "LOGIN_SUCCESS" })
        //eslint-disable-next-line
        history.push("/dashboard");
      }
      submitLogin()
    }
  }, [loginState]);

  return (
    <React.Fragment>
      <LoginController
        loginState={loginState}
        dispatchLoginStateAction={dispatchLoginStateAction}
      />
    </React.Fragment>
  );
};

export default Login;
