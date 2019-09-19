import { globalReducerBundle } from "./globalReducer";
import { homeReducerBundle } from "./routes/home/index";
import { signupReducerBundle } from "./routes/signup/index";
import { loginReducerBundle } from "./routes/login/index";
import { dashboardReducerBundle } from "./routes/dashboard/index"
import { plaidLinkReducerBundle }from  "./routes/plaidLink/index"

export const initialState = {
  globalState: globalReducerBundle.initialState,
  homeState: homeReducerBundle.initialState,
  signupState: signupReducerBundle.initialState,
  loginState: loginReducerBundle.initialState,
  dashboardState: dashboardReducerBundle.initialState,
  plaidState: plaidLinkReducerBundle.initialState
};

export const rootReducer = (
  { globalState, homeState, signupState, loginState, dashboardState, plaidState },
  action
) => ({
  globalState: globalReducerBundle.globalReducer(globalState, action),
  homeState: homeReducerBundle.homeReducer(homeState, action),
  signupState: signupReducerBundle.signupReducer(signupState, action),
  loginState: loginReducerBundle.loginReducer(loginState, action),
  dashboardState: dashboardReducerBundle.dashboardReducer(dashboardState, action),
  plaidState: plaidLinkReducerBundle.plaidReducer(plaidState, action)
});
