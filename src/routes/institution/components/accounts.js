import React from "react"

const Accounts = props => {
  const accounts = props.accounts

  if (accounts.length === 0) {
    return (
      <React.Fragment>
        <div className="column is-full">
          Add an account now to start tracking.
        </div>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <div className="grid">
        {accounts.map(account => {
          return (
            <div className="column is-full has-no-padding" key={account.id}>
              {account.name}
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default Accounts