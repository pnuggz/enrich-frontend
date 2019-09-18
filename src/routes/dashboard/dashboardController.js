import React, { useState, useEffect } from "react";

import { DashboardViewer } from "./dashboardViewer";

export const DashboardController = props => {
  const dashboardState = props.dashboardState;
  const dispatchDashboardStateAction = props.dispatchDashboardStateAction;
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(false);
  }, []);

  return (
    <React.Fragment>
      <DashboardViewer
        dashboardState={dashboardState}
        dispatchDashboardStateAction={dispatchDashboardStateAction}
        isLoading={isLoading}
      />
    </React.Fragment>
  );
};
