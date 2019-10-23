import { globalReducerBundle } from "./globalReducer";
import { homeReducerBundle } from "./routes/home";
import { signupReducerBundle } from "./routes/signup";
import { loginReducerBundle } from "./routes/login";
import { dashboardReducerBundle } from "./routes/dashboard"
import { accountReducerBundle } from "./routes/account"
import { institutionReducerBundle } from "./routes/institution"
import { notificationReducerBundle } from "./modules/notification"

export const initialState = {
  globalState: globalReducerBundle.initialState,
  homeState: homeReducerBundle.initialState,
  signupState: signupReducerBundle.initialState,
  loginState: loginReducerBundle.initialState,
  dashboardState: dashboardReducerBundle.initialState,
  accountState: accountReducerBundle.initialState,
  institutionState: institutionReducerBundle.initialState,
  notificationState: notificationReducerBundle.initialState
};

export const rootReducer = (
  { globalState, homeState, signupState, loginState, dashboardState, accountState, institutionState, notificationState },
  action
) => ({
  globalState: globalReducerBundle.globalReducer(globalState, action),
  homeState: homeReducerBundle.homeReducer(homeState, action),
  signupState: signupReducerBundle.signupReducer(signupState, action),
  loginState: loginReducerBundle.loginReducer(loginState, action),
  dashboardState: dashboardReducerBundle.dashboardReducer(dashboardState, action),
  accountState: accountReducerBundle.accountReducer(accountState, action),
  institutionState: institutionReducerBundle.institutionReducer(institutionState, action),
  notificationState: notificationReducerBundle.notificationReducer(notificationState, action)
});
