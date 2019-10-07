import { combineReducers } from "../../lib/combineReducers";

const initialState = {
  accountsData: {
    accounts: [],
    isLoading: true
  },
  accountData: {
    account: null,
    isLoading: true
  },
  plaidLinkState: {
    publicToken: null,
    accessToken: null,
    institution: null
  }
};

const accountReducer = (state, action) => {
  switch (action.type) {
    case "ACCOUNT_LOADED":
      return {
        ...state,
        accountsData: {
          accounts: action.payload,
          isLoading: false
        }
      }
    default:
      return state;
  }
}

const plaidLinkReducer = (state, action) => {
  switch (action.type) {
    case "PLAID_SAVE_PUBLIC_TOKEN": 
      return {
        ...state,
        plaidLinkState: {
          ...state.plaidLinkState,
          publicToken: action.payload.publicToken,
          institution: action.payload.institution
        }
      }
    default:
      return state;
  }
}

const accountReducerCombined = combineReducers(accountReducer, plaidLinkReducer);

const accountReducerBundle = {
  initialState: initialState,
  accountReducer: accountReducerCombined
};

export default accountReducerBundle;
