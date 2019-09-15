import React from "react";

import PlaidContainer from "./plaidContainer";

const PlaidController = props => {
  const handleOnSuccess = (token, metadata) => {
    console.log(token);
    console.log(metadata);
  };

  const handleOnExit = () => {
    console.log("EXITED");
  };

  return (
    <React.Fragment>
      <PlaidContainer
        props={props}
        handleOnSuccess={handleOnSuccess}
        handleOnExit={handleOnExit}
        config={props.config}
      ></PlaidContainer>
    </React.Fragment>
  );
};

export default PlaidController;
