import React from "react";

const PageLayout = props => {
  const { children } = props

  return (
    <div className="wrapper">
      {children}
    </div>
  );
};

export default PageLayout;
