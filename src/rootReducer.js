import { globalReducerBundle } from "./globalReducer";
import { homeReducerBundle } from "./routes/home/index";
import { signupReducerBundle } from "./routes/signup/index";
import { loginReducerBundle } from "./routes/login/index";
import { dashboardReducerBundle } from "./routes/dashboard/index"
import { accountReducerBundle } from "./routes/account/index"

export const initialState = {
  globalState: globalReducerBundle.initialState,
  homeState: homeReducerBundle.initialState,
  signupState: signupReducerBundle.initialState,
  loginState: loginReducerBundle.initialState,
  dashboardState: dashboardReducerBundle.initialState,
  accountState: accountReducerBundle.initialState
};

export const rootReducer = (
  { globalState, homeState, signupState, loginState, dashboardState, accountState },
  action
) => ({
  globalState: globalReducerBundle.globalReducer(globalState, action),
  homeState: homeReducerBundle.homeReducer(homeState, action),
  signupState: signupReducerBundle.signupReducer(signupState, action),
  loginState: loginReducerBundle.loginReducer(loginState, action),
  dashboardState: dashboardReducerBundle.dashboardReducer(dashboardState, action),
  accountState: accountReducerBundle.accountReducer(accountState, action)
});
