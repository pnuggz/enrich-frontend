import { combineReducers } from "../../lib/combineReducers";

const initialState = {
  accountsData: {
    accounts: [],
    isLoading: true
  },
  accountData: {
    account: null,
    isLoading: true
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

const accountReducerCombined = combineReducers(accountReducer);

const accountReducerBundle = {
  initialState: initialState,
  accountReducer: accountReducerCombined
};

export default accountReducerBundle;
