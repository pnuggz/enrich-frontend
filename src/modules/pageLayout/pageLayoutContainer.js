import React from "react";

const PageLayout = props => {
  return (
    <div className="container">
      <div className="grid">
        <div className="column is-full">{props.children}</div>
      </div>
    </div>
  );
};

export default PageLayout;
