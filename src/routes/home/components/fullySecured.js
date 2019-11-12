import React from "react";

import imgPadlock from "../../../assets/img/home/hero-right-padlock.png";

const FullySecured = () => {
  return (
    <React.Fragment>
      <div className="row mt-1">
        <div className="col text-align-center">
          <span className="text-white font-size-sm">
            We use the highest level of security and will never store your bank
            login details.
          </span>
        </div>
      </div>
      <div className="justify-content-center mt-2">
        <div>
          <img
            className="img-fluid"
            src={imgPadlock}
            width={"30%"}
            alt="Secure padlock"
            style={{ display: "block", margin: "auto" }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default FullySecured;
