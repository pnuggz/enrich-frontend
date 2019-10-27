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
              key={account.id}
            >
              <div className="card__content">
                <div className="grid">
                  <div className="column is-full">
                    <h5>{account.name}</h5>
                  </div>

                  <div className="column is-10 grid">
                    <div className="column is-full has-no-padding-sides">
                      <b>Type: </b>
                      {account.class.type}
                    </div>
                    <div className="column is-full has-no-padding-sides">
                      <b>Product: </b>
                      {account.class.product}
                    </div>
                    <div className="column is-full has-no-padding-sides">
                      <b>Mask (last 4 digits):</b>
                      <span> </span>
                      {account.accountNo.substr((account.accountNo.length - 4))}
                    </div>
                  </div>
                  <div className="column is-2">
                    <div className="is-switch is-small">
                      <input
                        type="checkbox"
                        id={account.id}
                        onChange={event => {
                          handleAccountSelect(event);
                        }}
                        data-account-id={account.id}
                        defaultChecked={selectedAccounts.reduce(
                          (bool, selAccount) => {
                            if (selAccount.id === account.id) {
                              bool = true;
                            }
                            return bool;
                          },
                          false
                        )}
                      />
                      <label htmlFor={account.id}></label>
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
