import { combineReducers } from "../../lib/combineReducers";

const initialState = {
  linkState: {
    accessToken: null,
    linkSessionId: null,
    publicToken: null
  }
};

const plaidReducer = (state, action) => {
  switch (action.type) {
    case "PLAID_SAVE_PUBLIC_TOKEN":
      return {
        ...state,
        linkState: {
          ...state.linkState,
          publicToken: action.payload.publicToken,
          linkSessionId: action.payload.linkSessionId
        }
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
