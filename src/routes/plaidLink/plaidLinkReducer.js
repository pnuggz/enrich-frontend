import { combineReducers } from "../../lib/combineReducers";

const initialState = {
  linkState: {
    accessToken: null,
    linkSessionId: null,
    publicToken: null,
    institution: null
  },
  accountsData: {
    accounts: [],
    isLoading: true
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
          linkSessionId: action.payload.linkSessionId,
          institution: action.payload.institution
        },
        accountsData: {
          ...state.accountsData,
          isLoading: true
        }
      };
    case "PLAID_UPDATE_ACCOUNTS_DATA":
      return {
        ...state,
        accountsData: {
          accounts: state.accountsData.accounts.concat(action.payload),
          isLoading: false
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
