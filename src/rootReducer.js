import { globalReducerBundle } from "./globalReducer";
import { homeReducerBundle } from "./routes/home/index";
import { signupReducerBundle } from "./routes/signup/index";
import { loginReducerBundle } from "./routes/login/index";

export const initialState = {
  globalState: globalReducerBundle.initialState,
  homeState: homeReducerBundle.initialState,
  signupState: signupReducerBundle.initialState,
  loginState: loginReducerBundle.initialState
};

export const rootReducer = (
  { globalState, homeState, signupState, loginState },
  action
) => ({
  globalState: globalReducerBundle.globalReducer(globalState, action),
  homeState: homeReducerBundle.homeReducer(homeState, action),
  signupState: signupReducerBundle.signupReducer(signupState, action),
  loginState: loginReducerBundle.loginReducer(loginState, action)
});
