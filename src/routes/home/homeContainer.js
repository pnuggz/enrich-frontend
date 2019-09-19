import React, { useState, useEffect } from "react";
import posed from "react-pose";

import { useStateValue } from "../../lib/state";

import { PageLayout } from "../../modules/pageLayout/index";

import { PlaidLinkModule } from "../../modules/plaidLink/index";

const posedDivConfig = {
  preLoad: {
    x: "-100%"
  },
  loaded: {
    x: 0
  }
};

const ParentDiv = posed.div(posedDivConfig);

const Home = () => {
  const [{ globalState }, dispatchGlobalStateAction] = useStateValue();
  const [localStateValue, setLocalStateValue] = useState("");
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setLocalStateValue(globalState.globalValue);

    dispatchGlobalStateAction({
      type: "GLOBAL_UPDATE",
      payload:
        "This is an updated global state value - updated inside the come container"
    });

    setIsloading(false);
  }, []);

  return (
    <PageLayout>
      <ParentDiv pose={isLoading ? "preLoad" : "loaded"}>
        <PlaidLinkModule></PlaidLinkModule>
      </ParentDiv>
    </PageLayout>
  );
};

export default Home;
