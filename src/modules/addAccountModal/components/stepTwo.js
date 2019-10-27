import React from "react";

export const StepTwo = props => {
  const selectedAccounts = props.selectedAccounts;
  const handleSelectedAccountSettings = props.handleSelectedAccountSettings;

  return (
    <div className="column is-full grid">
      <div className="column is-full">
        {selectedAccounts.map(account => {
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

                  <div className="column is-full grid">
                    <div className="column is-full grid has-no-padding-sides">
                      <div className="column is-shrink is-inline-label has-no-padding">
                        <label>Tracking Type</label>
                      </div>
                      <div className="column is-half">
                        <div className="is-select">
                          <select
                            onChange={event => {
                              handleSelectedAccountSettings(event);
                            }}
                            name={"type_" + account.id}
                            data-account-id={account.id}
                            defaultValue={account.settings.type}
                          >
                            <option value={1}>Donation</option>
                            <option value={2}>Saving</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="column is-full grid has-no-padding-sides">
                      <div className="column is-shrink is-inline-label has-no-padding">
                        <label>Monthly Limit</label>
                      </div>
                      <div className="column is-half">
                        <input
                          type="text"
                          onInput={event => {
                            handleSelectedAccountSettings(event);
                          }}
                          name={"limit_" + account.id}
                          data-account-id={account.id}
                          defaultValue={account.settings.limit}
                        ></input>
                      </div>
                    </div>
                    <div className="column is-full grid has-no-padding-sides">
                      <div className="column is-shrink is-inline-label has-no-padding">
                        <label>Include 50c if no rounding?</label>
                      </div>
                      <div className="column is-half">
                        <div className="is-switch">
                          <input
                            type="checkbox"
                            name={"include_dollar_" + account.id}
                            data-account-name={account.name}
                            data-account-mask={account.mask}
                            onChange={event => {
                              handleSelectedAccountSettings(event);
                            }}
                            defaultChecked={account.settings.include_dollar}
                          />
                          <label
                            htmlFor={"include_dollar_" + account.id}
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
