import React, { useEffect, useState } from "react";

import { AddAccountModalViewer } from "./addAccountModalViewer";

export const AddAccountModalController = props => {
  const onModalSubmit = props.onModalSubmit;
  const onModalClose = props.onModalClose;
  const addAccounts = props.addAccounts;
  const setAddAccounts = props.setAddAccounts;
  const isShowing = props.isShowing;
  const accountsIsLoading = props.accountsIsLoading
  const setAccountsIsLoading = props.setAccountsIsLoading

  const [selectedAccounts, setSelectedAccounts] = useState([]);
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    document.getElementsByClassName("card__content")[0].scrollTo(0, 0);
    if (!isShowing) {
      resetModal();
    }
  }, [isShowing]);

  useEffect(() => {
    document.getElementsByClassName("card__content")[0].scrollTo(0, 0);
  }, [step]);

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
    const id = event.target.getAttribute("data-account-id");
    const checked = event.target.checked;

    const defaultSetting = {
      type: 1,
      limit: 30,
      include_dollar: 1
    };

    if (!checked) {
      const updatedAccounts = selectedAccounts.filter(
        account => account.id !== id
      );
      setSelectedAccounts(updatedAccounts);
      return;
    }

    const updatedAccounts = selectedAccounts;

    updatedAccounts.push(
      addAccounts.filter(
        account => account.id === id
      )[0]
    );
    updatedAccounts.map(account => {
      account.settings = defaultSetting;
      return account;
    });
    setSelectedAccounts(updatedAccounts);
  };

  const handleSelectedAccountSettings = event => {
    const id = event.target.getAttribute("data-account-id");
    const setting = event.target.getAttribute("name");
    const updatedAccounts = selectedAccounts;

    updatedAccounts.map(account => {
      if (account.id !== id) {
        return account;
      }

      if (setting === "type_" + account.id) {
        account.settings.type = event.target.value;
      }
      if (setting === "limit_" + account.id) {
        account.settings.limit = event.target.value;
      }
      if (setting === "include_dollar_" + account.id) {
        const val = event.target.checked === "on" ? 1 : 0;
        account.settings.include_dollar = val;
      }
      return account;
    });

    setSelectedAccounts(updatedAccounts);
  };

  const resetModal = () => {
    setAddAccounts([]);
    setSelectedAccounts([]);
    setStep(1);
    setIsLoading(false);
    setDisable(true);
    setAccountsIsLoading(true)
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
      accountsIsLoading={accountsIsLoading}
    />
  );
};
