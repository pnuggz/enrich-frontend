import { combineReducers } from "../../lib/combineReducers";

const initialState = {
  signupValue: "This is an initial value from the global state",
  stateSchema: {
    username: { value: "", error: "" },
    email: { value: "", error: "" },
    password: { value: "", error: "" }
  },
  validationStateSchema: {
    username: {
      required: true
    },
    email: {
      required: true,
      regEx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      error: "Invalid email format."
    },
    password: {
      required: true,
      regEx: /^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z0-9!@#$%^&*()~¥=_+}{":;'?/>.<,`\-\|\[\]]{6,50}$/,
      error:
        "Invalid password. Requires minimum 6 characters, and must contain 1 letter and 1 number."
    }
  }
};

const signupReducer = (state, action) => {
  switch (action.type) {
    case "GLOBAL_UPDATE":
      return {
        ...state,
        globalValue: action.payload
      };

    default:
      return state;
  }
};

const signupReducerCombined = combineReducers(signupReducer);

const signupReducerBundle = {
  initialState: initialState,
  signupReducer: signupReducerCombined
};

export default signupReducerBundle;
