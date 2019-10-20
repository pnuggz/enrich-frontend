import React, { useEffect } from "react";

import { useStateValue } from "../../../../lib/state";
import history from "../../../../lib/history";

import { AddController } from "./addController";

import { getInstitutions } from "../../../../sharedModels/accountsMdl";

const Add = () => {
  const [{ accountState }, dispatchAccountStateAction] = useStateValue();
  const accountForm = accountState.accountForm

  useEffect(() => {
    const loadInstitutions = async () => {
      const response = await getInstitutions();

      dispatchAccountStateAction({
        type: "ACCOUNT_INSTITUTIONS_UPDATE",
        payload: response.data.institutions
      });
    }

    loadInstitutions()
  }, [])

  useEffect(() => {
    // const submitLogin = async () => {
    //   const response = await loginRequest(loginState.stateSchema);
    //   if (response.status.code !== 200) {
    //     dispatchLoginStateAction({ type: "LOGIN_FAIL" });
    //     console.log(response.status);
    //     return;
    //   }

    //   dispatchLoginStateAction({ type: "LOGIN_SUCCESS" });
    //   //eslint-disable-next-line
    //   history.push("/dashboard");
    // };

    if (accountForm.isSubmit) {
      // submitLogin();
      console.log(accountForm)
    }
  }, [accountForm]);

  return (
    <React.Fragment>
      <AddController
        accountState={accountState}
        dispatchAccountStateAction={dispatchAccountStateAction}
      />
    </React.Fragment>
  );
};

export default Add;
