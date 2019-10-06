import { combineReducers } from "../../lib/combineReducers";

const initialState = {
  stateSchema: {
    uniqueLogin: { value: "", error: "" },
    password: { value: "", error: "" }
  },
  validationStateSchema: {
    uniqueLogin: {
      required: true
    },
    password: {
      required: true
    }
  },
  isSubmit: false,
  isSuccess: false,
  isFail: false,
};

const loginReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_FORM_SUBMIT":
      return {
        ...state,
        stateSchema: action.payload,
        isSubmit: true,
        isSuccess: false,
        isFail: false
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isSubmit: false,
        isSuccess: true,
        isFail: false,
      };
    case "LOGIN_FAIL":
      return {
        ...state,
        isSubmit: false,
        isSuccess: true,
        isFail: true,
      };
    default:
      return state;
  }
};

const loginReducerCombined = combineReducers(loginReducer);

const loginReducerBundle = {
  initialState: initialState,
  loginReducer: loginReducerCombined
};

export default loginReducerBundle;
