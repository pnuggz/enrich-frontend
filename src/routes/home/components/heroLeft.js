import React from "react";

import Button from "../../../components/button";

const HeroLeft = props => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-white">Spare a change for change</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="text-white mb-3">
              Making a difference to you favourite cause has never been this
              easy. It all starts with a little nudge that will snowball to a
              better world.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="btn-wrapper">
              <div className="button-container">
                <Button
                  className="btn-round"
                  color="secondary"
                  href="#"
                  onClick={e => e.preventDefault()}
                  size="md"
                >
                  Learn More
                </Button>
                <Button
                  className="btn-round"
                  color="primary"
                  href="#"
                  onClick={e => e.preventDefault()}
                  size="md"
                >
                  Signup
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroLeft;
