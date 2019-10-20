import React, { useEffect } from "react";

import { useStateValue } from "../../lib/state";

import { DashboardController } from "./dashboardController";

const Dashboard = () => {
  const [{ dashboardState }, dispatchDashboardStateAction] = useStateValue();

  return (
    <React.Fragment>
      <DashboardController
        dashboardState={dashboardState}
        dispatchDashboardStateAction={dispatchDashboardStateAction}
      />
    </React.Fragment>
  );
};

export default Dashboard;
