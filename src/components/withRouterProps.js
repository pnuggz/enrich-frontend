import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

const WithRouterProps = props => {
  const updateLocation = props.updateLocation;

  useEffect(() => {
    updateLocation(props.location);
  }, []);

  return <React.Fragment />;
};

export default withRouter(WithRouterProps);
