import React, { useState, useEffect } from "react";
import posed from "react-pose";

import { useStateValue } from "../../lib/state";

import { PageLayout } from "../../modules/pageLayout/index";

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
  const [{ globalState }, dispatchGlobalStateAction] = useStateValue();
  const [{ homeState }, dispatchHomeStateAction] = useStateValue();
  const [{ signupState }, dispatchSignupStateAction] = useStateValue();
  const [localStateValue, setLocalStateValue] = useState("");
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    console.log(globalState)
    console.log(homeState)
    console.log(signupState)
  }, []);
   
  return (
    <PageLayout>
        <ParentDiv pose={isLoading ? "preLoad" : "loaded"}>
          <div>TEST</div>
        </ParentDiv>
    </PageLayout>
  );
};

export default Signup;
