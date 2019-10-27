import React from "react";

export const StepOne = props => {
  const addAccounts = props.addAccounts;
  const selectedAccounts = props.selectedAccounts;
  const handleAccountSelect = props.handleAccountSelect;

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
                        defaultChecked={selectedAccounts.reduce(
                          (bool, selAccount) => {
                            if (selAccount.account_id === account.account_id) {
                              bool = true;
                            }
                            return bool;
                          },
                          false
                        )}
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
