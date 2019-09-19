import { combineReducers } from "../../lib/combineReducers";

const initialState = {
  test: "TEST"
};

const plaidReducer = (state, action) => {
  switch (action.type) {
    case "PLAID_SAVE":
      return {
        ...state,
        stateSchema: action.payload,
        isSubmit: true
      };

    default:
      return state;
  }
};

const plaidReducerCombined = combineReducers(plaidReducer);

const plaidReducerBundle = {
  initialState: initialState,
  plaidReducer: plaidReducerCombined
};

export default plaidReducerBundle;
