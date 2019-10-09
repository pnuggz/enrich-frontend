import React, { useState, useEffect } from "react";
import posed from "react-pose";

import { useStateValue } from "../../lib/state";

import { PageLayout } from "../../modules/pageLayout";

import { PlaidLinkModule } from "../../modules/plaidLink";
import { Modal as ModalModule } from "../../modules/modal"

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
  const [isModalShowing, setIsModalShowing] = useState(false)
  const [isModalLoading, setIsModalLoading] = useState(false)

  useEffect(() => {
    setLocalStateValue(globalState.globalValue);

    dispatchGlobalStateAction({
      type: "GLOBAL_UPDATE",
      payload:
        "This is an updated global state value - updated inside the come container"
    });

    setIsloading(false);
  }, []);

  useEffect(() => {
    console.log(isModalShowing)
  }, [isModalShowing])

  const handleModalClose = () => {
    setIsModalShowing(!isModalShowing)
  }

  return (
    <PageLayout>
      <ParentDiv pose={isLoading ? "preLoad" : "loaded"}>
        <button className="button" onClick={() => {setIsModalShowing(!isModalShowing)}}>OPEN</button>
        <ModalModule
          isShowing={isModalShowing}
          isLoading={isModalLoading}
          onModalCloseClick={handleModalClose}
        >
          <div>TEST MODAL BITCHES</div>
        </ModalModule>
      </ParentDiv>
    </PageLayout>
  );
};

export default Home;
