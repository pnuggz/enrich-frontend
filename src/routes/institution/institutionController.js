import React, { useState, useEffect } from "react";

import { InstitutionViewer } from "./institutionViewer";

export const InstitutionController = props => {
  const institutionState = props.institutionState;
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(false);
  }, []);

  return (
    <React.Fragment>
      <InstitutionViewer institutionState={institutionState} isLoading={isLoading} />
    </React.Fragment>
  );
};
