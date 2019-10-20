import { combineReducers } from "../../lib/combineReducers";

const initialState = {
  test: "TEST"
};

const dashboardReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_FORM_SUBMIT":
      return {
        ...state,
        stateSchema: action.payload,
        isSubmit: true
      };

    default:
      return state;
  }
};

const dashboardReducerCombined = combineReducers(dashboardReducer);

const dashboardReducerBundle = {
  initialState: initialState,
  dashboardReducer: dashboardReducerCombined
};

export default dashboardReducerBundle;
