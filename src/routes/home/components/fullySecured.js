import React from "react";

import imgPadlock from "../../../assets/img/home/hero-right-padlock.png"

const FullySecured = props => {
  return (
    <React.Fragment>
      <div className="grid">
        <div className="column is-full has-text-center">
          <div className="grid">
            <div className="column is-full">
              We use the highest level of security and will never store your bank login details.
            </div>
            <div className="column is-full">
              <img className="is-margin-center" src={imgPadlock} width={"30%"} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default FullySecured