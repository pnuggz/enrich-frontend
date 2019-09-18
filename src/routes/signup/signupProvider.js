import React, { useEffect } from "react";

import { useStateValue } from "../../lib/state";
// import history from "../../../../lib/history";

import { signupRequest } from "../../sharedModels/signupMdl";

import { SignupController } from "./signupController";

const Signup = () => {
  const [{ signupState }, dispatchSignupStateAction] = useStateValue();

  useEffect(() => {
    if (signupState.isSubmit) {
      const fetch = signupRequest(signupState.stateSchema);

      fetch.then(res => {
        if (res) {
          console.log(res);
          // sessionStorage.setItem("userInfo", JSON.stringify(res));

          //eslint-disable-next-line
          // history.push("/landing");
        }
      });
    }
  }, [signupState]);

  return (
    <React.Fragment>
      <SignupController
        signupState={signupState}
        dispatchSignupStateAction={dispatchSignupStateAction}
      />
    </React.Fragment>
  );
};

export default Signup;
