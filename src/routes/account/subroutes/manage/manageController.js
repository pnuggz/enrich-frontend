import React, { useState, useEffect } from "react";

import { ManageViewer } from "./manageViewer"

export const ManageController = props => {
  const accountState = props.accountState
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false);
  }, [])

  return (
    <React.Fragment>
      <ManageViewer
        accountState={accountState}
        isLoading={isLoading}
      />
    </React.Fragment>
  )
}