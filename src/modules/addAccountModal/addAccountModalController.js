import React, { useEffect, useState } from "react";

import { AddAccountModalViewer } from "./addAccountModalViewer";

export const AddAccountModalController = props => {
  const onModalSubmit = props.onModalSubmit;
  const onModalClose = props.onModalClose;
  const addAccounts = props.addAccounts;
  const isShowing = props.isShowing;

  const [selectedAccounts, setSelectedAccounts] = useState([]);
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [disable, setDisable] = useState(true);

  const handleStepNext = event => {
    if (step < 2) {
      setStep(step + 1);
    }
  };

  const handleStepPrevious = event => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleAccountSelect = event => {
    const name = event.target.getAttribute("data-account-name");
    const mask = event.target.getAttribute("data-account-mask");
    const checked = event.target.checked;
    const updatedAccounts = selectedAccounts;

    const defaultSetting = {
      type: 1,
      limit: 30,
      include_dollar: 1
    };

    if (checked) {
      updatedAccounts.push(
        addAccounts.filter(
          account => account.name === name && account.mask === mask
        )[0]
      );
      updatedAccounts.map(account => {
        account.settings = defaultSetting;
        return account;
      });
    } else {
      updatedAccounts.filter(
        account => account.name !== name && account.mask !== mask
      );
    }

    setSelectedAccounts(updatedAccounts);
  };

  const handleSelectedAccountSettings = event => {
    const name = event.target.getAttribute("data-account-name");
    const mask = event.target.getAttribute("data-account-mask");
    const setting = event.target.getAttribute("name");
    const updatedAccounts = selectedAccounts;

    updatedAccounts.map(account => {
      if (account.name !== name && account.mask !== mask) {
        return account;
      }

      if (setting === "type_" + account.account_id) {
        account.settings.type = event.target.value;
      }
      if (setting === "limit_" + account.account_id) {
        account.settings.limit = event.target.value;
      }
      if (setting === "include_dollar_" + account.account_id) {
        const val = event.target.checked === "on" ? 1 : 0;
        account.settings.include_dollar = val;
      }
      return account;
    });

    setSelectedAccounts(updatedAccounts);
  };

  return (
    <AddAccountModalViewer
      onModalSubmit={onModalSubmit}
      onModalClose={onModalClose}
      addAccounts={addAccounts}
      isLoading={isLoading}
      isShowing={isShowing}
      disable={disable}
      step={step}
      handleStepNext={handleStepNext}
      handleStepPrevious={handleStepPrevious}
      handleAccountSelect={handleAccountSelect}
      selectedAccounts={selectedAccounts}
      handleSelectedAccountSettings={handleSelectedAccountSettings}
    />
  );
};
