import React, { useEffect } from "react";

import { useStateValue } from "../../lib/state";
import history from "../../lib/history";

import { loginRequest } from "../../sharedModels/loginMdl";

import { LoginController } from "./loginController";

const Login = () => {
  const [{ loginState }, dispatchLoginStateAction] = useStateValue();

  useEffect(() => {
    if (loginState.isSubmit) {
      const fetch = loginRequest(loginState.stateSchema);

      fetch
        .then(res => res.json())
        .then(res => {
          if (res) {
            if (res.status.code !== 200) {
              console.log(res);
              return;
            }

            sessionStorage.setItem("userData", JSON.stringify(res));

            //eslint-disable-next-line
            history.push("/dashboard");
          }
        });
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
