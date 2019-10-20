import { combineReducers } from "../../lib/combineReducers";

const initialState = {
  institutionsData: {
    institutions: [],
    usersInstitutions: [],
    isLoading: true
  },
  institutionForm: {
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
  }
};

const institutionReducer = (state, action) => {
  switch (action.type) {
    case "INSTITUTION_LOADED":
      return {
        ...state,
        institutionsData: {
          ...state.institutionsData,
          institutions: action.payload,
          isLoading: false
        }
      };
    case "USER_INSTITUTION_LOADED":
      return {
        ...state,
        institutionsData: {
          ...state.institutionsData,
          userInstitutions: action.payload,
          isLoading: false
        }
      };
    default:
      return state;
  }
};

const institutionFormReducer = (state, action) => {
  switch (action.type) {
    case "INSTITUTION_FORM_SUBMIT":
      return {
        ...state,
        institutionForm: {
          stateSchema: action.payload,
          isSubmit: true,
          isSuccess: false,
          isFail: false
        }
      };
    case "INSTITUTION_FORM_SUCCESS":
      return {
        ...state,
        institutionForm: {
          ...state.institutionForm,
          isSubmit: false,
          isSuccess: true,
          isFail: false
        }
      };
    case "INSTITUTION_FORM_FAIL":
      return {
        ...state,
        institutionForm: {
          ...state.institutionForm,
          isSubmit: false,
          isSuccess: true,
          isFail: true
        }
      };
    default:
      return state;
  }
};

const institutionReducerCombined = combineReducers(
  institutionReducer,
  institutionFormReducer
);

const institutionReducerBundle = {
  initialState: initialState,
  institutionReducer: institutionReducerCombined
};

export default institutionReducerBundle;
