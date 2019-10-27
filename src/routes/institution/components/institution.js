import React from "react"

import Account from "./accounts"

const Institution = props => {
  const institutions = props.institutions
  const handleInstitutionSelect = props.handleInstitutionSelect

  if (institutions.length === 0) {
    return (
      <div>
        <div>
          You currently don't have any institutions linked. Add one now to get started.
        </div>
        <div>
          LINK BANK ACCOUNT
        </div>
      </div>
    )
  }

  return (
    <React.Fragment>
      <div className="grid">
        <div className="column is-full">
          <div className="grid">
            {institutions.map(institution => {
              return (
                <div key={institution.id} className="column is-full">
                  <div className="card__header">
                    <div className="grid">
                      <div className="column is-full is-inline-block has-no-padding-left has-no-padding-right">
                        <h5>{institution.name}</h5>
                        <button className="button" onClick={() => { handleInstitutionSelect(institution.institution_id) }}>ADD ACCOUNT</button>
                      </div>
                    </div>
                  </div>
                  <div className="card__content">
                    <Account
                      accounts={institution.accounts}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Institution