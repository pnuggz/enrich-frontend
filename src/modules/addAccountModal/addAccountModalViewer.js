import React, { useEffect } from "react";

import { Modal as ModalModule } from "../modal";
import { StepOne } from "./components/stepOne";
import { StepTwo } from "./components/stepTwo";
import { Footer } from "./components/footer";

export const AddAccountModalViewer = props => {
  const onModalSubmit = props.onModalSubmit;
  const onModalClose = props.onModalClose;
  const addAccounts = props.addAccounts;
  const selectedAccounts = props.selectedAccounts;
  const isLoading = props.isLoading;
  const isShowing = props.isShowing;
  const disable = props.disable;

  const step = props.step;
  const handleStepNext = props.handleStepNext;
  const handleStepPrevious = props.handleStepPrevious;
  const handleAccountSelect = props.handleAccountSelect;
  const handleSelectedAccountSettings = props.handleSelectedAccountSettings;

  return (
    <ModalModule
      isShowing={isShowing}
      isLoading={isLoading}
      onModalCloseClick={onModalClose}
      footer={
        <Footer
          selectedAccounts={selectedAccounts}
          handleStepNext={handleStepNext}
          handleStepPrevious={handleStepPrevious}
          onModalSubmit={onModalSubmit}
          step={step}
        />
      }
    >
      {step === 1 ? (
        <StepOne
          addAccounts={addAccounts}
          selectedAccounts={selectedAccounts}
          handleAccountSelect={handleAccountSelect}
        />
      ) : step === 2 ? (
        <StepTwo
          selectedAccounts={selectedAccounts}
          handleSelectedAccountSettings={handleSelectedAccountSettings}
        />
      ) : null}
    </ModalModule>
  );
};
