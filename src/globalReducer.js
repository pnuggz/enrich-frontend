import { combineReducers } from "./lib/combineReducers";

const initialState = {
  globalValue: "This is an initial value from the global state"
};

const globalReducerSample = (state, action) => {
  switch (action.type) {
    case "GLOBAL_UPDATE":
      return {
        ...state,
        globalValue: action.payload
      };

    default:
      return state;
  }
};

const globalReducer = combineReducers(globalReducerSample);

export const globalReducerBundle = {
  initialState: initialState,
  globalReducer: globalReducer
};
