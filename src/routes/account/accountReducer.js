import { combineReducers } from "../../lib/combineReducers";

const initialState = {
  accountsData: {
    accounts: [],
    existingAccounts: [],
    isLoading: true
  },
  accountForm: {
    stateSchema: {
      login: { value: "", error: "" },
      password: { value: "", error: "" }
    },
    validationStateSchema: {
      login: {
        required: true
      },
      password: {
        required: true
      }
    },
    isSubmit: false,
    isSuccess: false,
    isFail: false,
  },
  accountInstitutions: []
};

const accountReducer = (state, action) => {
  switch (action.type) {
    case "ACCOUNT_LOADING":
      return {
        ...state,
        accountsData: {
          ...state.accountsData,
          isLoading: true
        }
      };
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

const accountLinkReducer = (state, action) => {
  switch (action.type) {
    case "ACCOUNT_FORM_SUBMIT":
      return {
        ...state,
        accountForm: {
          stateSchema: action.payload,
          isSubmit: true,
          isSuccess: false,
          isFail: false
        }
      };
    case "ACCOUNT_FORM_SUCCESS":
      return {
        ...state,
        accountForm: {
          ...state.accountForm,
          isSubmit: false,
          isSuccess: true,
          isFail: false
        }
      };
    case "ACCOUNT_FORM_FAIL":
      return {
        ...state,
        accountForm: {
          ...state.accountForm,
          isSubmit: false,
          isSuccess: true,
          isFail: true
        }
      };
    default:
      return state;
  }
};

const accountInstitutionsReducer = (state, action) => {
  switch (action.type) {
    case "ACCOUNT_INSTITUTIONS_UPDATE":
      return {
        ...state,
        accountInstitutions: action.payload
      };
    default:
      return state
  }
}

const accountReducerCombined = combineReducers(
  accountReducer,
  accountLinkReducer,
  accountInstitutionsReducer
);

const accountReducerBundle = {
  initialState: initialState,
  accountReducer: accountReducerCombined
};

export default accountReducerBundle;
