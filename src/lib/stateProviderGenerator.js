import React, { useContext, useReducer } from "react";

const StateProviderGenerator = ({ reducer, initialState, children, ContextName }) => {
  return (
    <ContextName.Provider value={useReducer(reducer, initialState)}>
      {children}
    </ContextName.Provider>
  )
};

export default StateProviderGenerator