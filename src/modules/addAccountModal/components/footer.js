import React from "react";

import { ButtonComponent } from "./button";

export const Footer = props => {
  const step = props.step;
  const onModalSubmit = props.onModalSubmit;
  const handleStepNext = props.handleStepNext;
  const handleStepPrevious = props.handleStepPrevious;
  const selectedAccounts = props.selectedAccounts;

  return (
    <React.Fragment>
      <button
        className="button"
        onClick={() => handleStepPrevious()}
        disabled={step === 1}
      >
        Back
      </button>
      {step === 1 ? (
        <ButtonComponent handleClick={handleStepNext}>Next</ButtonComponent>
      ) : step === 2 ? (
        <ButtonComponent handleClick={onModalSubmit} data={selectedAccounts}>
          Submit
        </ButtonComponent>
      ) : null}
    </React.Fragment>
  );
};
