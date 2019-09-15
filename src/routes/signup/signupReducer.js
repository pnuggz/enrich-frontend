import { combineReducers } from "../../lib/combineReducers";

const initialState = {
  signupValue: "This is an initial value from the global state"
};

const signupReducer = (state, action) => {
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

const signupReducerCombined = combineReducers(signupReducer);

const signupReducerBundle = {
  initialState: initialState,
  signupReducer: signupReducerCombined
};

export default signupReducerBundle