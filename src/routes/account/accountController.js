import React, { useState, useEffect } from "react";

import { AccountViewer } from "./accountViewer";

export const AccountController = props => {
  const accountState = props.accountState;
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(false);
  }, []);

  return (
    <React.Fragment>
      <AccountViewer accountState={accountState} isLoading={isLoading} />
    </React.Fragment>
  );
};
