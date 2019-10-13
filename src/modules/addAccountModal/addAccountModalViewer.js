import React, { useEffect } from "react";

import { Modal as ModalModule } from "../modal";

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

  const renderBody = () => {
    const stepOne = () => {
      return (
        <div className="column is-full grid">
          <div className="column is-full">
            {addAccounts.map(account => {
              return (
                <div
                  className="card"
                  style={{ height: "fit-content" }}
                  key={account.account_id}
                >
                  <div className="card__content">
                    <div className="grid">
                      <div className="column is-full">
                        <h5>{account.name}</h5>
                      </div>

                      <div className="column is-10 grid">
                        <div className="column is-full grid has-no-padding-sides">
                          <b>Official Name: </b>
                          {account.official_name}
                        </div>
                        <div className="column is-full grid has-no-padding-sides">
                          <div className="column is-half has-no-padding">
                            <b>Type: </b>
                            {account.type}
                          </div>
                          <div className="column is-half has-no-padding">
                            <b>Subtype: </b>
                            {account.subtype}
                          </div>
                        </div>
                        <div className="column is-full grid has-no-padding-sides">
                          <b>Mask (last 4 digits): </b>
                          {account.mask}
                        </div>
                      </div>
                      <div className="column is-2">
                        <div className="is-switch is-small">
                          <input
                            type="checkbox"
                            id={account.account_id}
                            onChange={event => {
                              handleAccountSelect(event);
                            }}
                            data-account-name={account.name}
                            data-account-mask={account.mask}
                          />
                          <label htmlFor={account.account_id}></label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    };

    const stepTwo = () => {
      return (
        <div className="column is-full grid">
          <div className="column is-full">
            {selectedAccounts.map(account => {
              return (
                <div
                  className="card"
                  style={{ height: "fit-content" }}
                  key={account.account_id}
                >
                  <div className="card__content">
                    <div className="grid">
                      <div className="column is-full">
                        <h5>{account.name}</h5>
                      </div>

                      <div className="column is-full grid">
                        <div className="column is-full grid has-no-padding-sides">
                          <b>Official Name: </b>
                          {account.official_name}
                        </div>
                        <div className="column is-full grid has-no-padding-sides">
                          <div className="column is-half has-no-padding">
                            <b>Type: </b>
                            {account.type}
                          </div>
                          <div className="column is-half has-no-padding">
                            <b>Subtype: </b>
                            {account.subtype}
                          </div>
                        </div>
                        <div className="column is-full grid has-no-padding-sides">
                          <div class="column is-shrink is-inline-label has-no-padding">
                            <label>Tracking Type</label>
                          </div>
                          <div class="column is-half">
                            <div class="is-select">
                              <select
                                onChange={event => {
                                  handleSelectedAccountSettings(event);
                                }}
                                name={"type_" + account.account_id}
                                data-account-name={account.name}
                                data-account-mask={account.mask}
                              >
                                <option value={1}>Donation</option>
                                <option value={2}>Saving</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="column is-full grid has-no-padding-sides">
                          <div class="column is-shrink is-inline-label has-no-padding">
                            <label>Monthly Limit</label>
                          </div>
                          <div class="column is-half">
                            <input
                              type="text"
                              onInput={event => {
                                handleSelectedAccountSettings(event);
                              }}
                              name={"limit_" + account.account_id}
                              data-account-name={account.name}
                              data-account-mask={account.mask}
                            ></input>
                          </div>
                        </div>
                        <div className="column is-full grid has-no-padding-sides">
                          <div class="column is-shrink is-inline-label has-no-padding">
                            <label>Include 50c if no rounding?</label>
                          </div>
                          <div class="column is-half">
                            <div class="is-switch">
                              <input
                                type="checkbox"
                                id={"include_dollar_" + account.account_id}
                                name={"include_dollar_" + account.account_id}
                                data-account-name={account.name}
                                data-account-mask={account.mask}
                                onChange={event => {
                                  handleSelectedAccountSettings(event);
                                }}
                              />
                              <label
                                htmlFor={"include_dollar_" + account.account_id}
                              ></label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    };

    switch (step) {
      case 1:
        return stepOne();
      case 2:
        return stepTwo();
      default:
        return [];
    }
  };

  const footerEl = (
    <React.Fragment>
      <button
        className="button"
        onClick={() => handleStepPrevious()}
        disabled={step === 1}
      >
        Back
      </button>
      <button
        className="button is-end"
        onClick={() => handleStepNext()}
        disabled={step === 2}
      >
        Next
      </button>
    </React.Fragment>
  );

  return (
    <ModalModule
      isShowing={isShowing}
      isLoading={isLoading}
      onModalCloseClick={onModalClose}
      footer={footerEl}
    >
      {renderBody()}
    </ModalModule>
  );
};
