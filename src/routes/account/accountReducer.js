import { combineReducers } from "../../lib/combineReducers";

const initialState = {
  accountsData: {
    accounts: [],
    existingAccounts: [],
    isLoading: true
  },
  accountData: {
    account: null,
    isLoading: true
  },
  plaidLinkState: {
    publicToken: null,
    accessToken: null,
    institution: null,
    itemId: null
  },
  addAccountData: {
    formSchema: {
      selectedAccounts: []
    },
    isSubmit: false,
    isSuccess: false,
    isFail: false
  }
};

const accountReducer = (state, action) => {
  switch (action.type) {
    case "ACCOUNT_LOADED":
      return {
        ...state,
        accountsData: {
          ...state.accountsData,
          accounts: action.payload,
          isLoading: false
        }
      };
    default:
      return state;
  }
};

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
      };
    case "PLAID_SAVE_ACCESS_TOKEN":
      return {
        ...state,
        plaidLinkState: {
          ...state.plaidLinkState,
          accessToken: action.payload.accessToken,
          itemId: action.payload.itemId
        }
      };
    default:
      return state;
  }
};

const addAccountReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ACCOUNT_LOADED":
      return {
        ...state,
        accountsData: {
          accounts: action.payload.accounts,
          existingAccounts: action.payload.existingAccounts,
          isLoading: false
        }
      };
    case "ACCOUNT_MODAL_SUBMIT":
      return {
        ...state,
        addAccountData: {
          formSchema: {
            selectedAccounts: action.payload
          },
          isSubmit: true,
          isSuccess: false,
          isFail: false
        }
      };
    case "ACCOUNT_MODAL_SUCCESS":
      return {
        ...state,
        addAccountData: {
          ...state.addAccountData,
          isSubmit: false,
          isSuccess: true,
          isFail: false
        }
      };
    case "ACCOUNT_MODAL_FAIL":
      return {
        ...state,
        addAccountData: {
          ...state.addAccountData,
          isSubmit: false,
          isSuccess: true,
          isFail: false
        }
      };
    default:
      return state;
  }
};

const accountReducerCombined = combineReducers(
  accountReducer,
  plaidLinkReducer,
  addAccountReducer
);

const accountReducerBundle = {
  initialState: initialState,
  accountReducer: accountReducerCombined
};

export default accountReducerBundle;
