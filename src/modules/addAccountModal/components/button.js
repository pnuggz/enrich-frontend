import React from "react";

export const ButtonComponent = props => {
  const handleClick = props.handleClick;
  const data = props.data || null;
  const children = props.children;

  return (
    <React.Fragment>
      <button className="button is-end" onClick={() => handleClick(data)}>
        {children}
      </button>
    </React.Fragment>
  );
};
