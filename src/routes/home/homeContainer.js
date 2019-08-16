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

const ValueDiv = posed.div(posedDivConfig);

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
      <div>
        <ValueDiv pose={isLoading ? "preLoad" : "loaded"}>
          {localStateValue}
        </ValueDiv>
        <ValueDiv pose={isLoading ? "preLoad" : "loaded"}>
          {globalState.globalValue}
        </ValueDiv>
      </div>
    </PageLayout>
  );
};

export default Home;
