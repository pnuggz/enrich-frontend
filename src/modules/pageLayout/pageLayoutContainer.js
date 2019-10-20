import React from "react";

import { NavigationBar } from "../../components/navigationBar";

const PageLayout = props => {
  return (
    <div className="container">
      {/* <NavigationBar /> */}
      <div className="grid">
        <div className="column is-full">{props.children}</div>
      </div>
    </div>
  );
};

export default PageLayout;
