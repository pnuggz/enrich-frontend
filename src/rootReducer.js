import { globalReducerBundle } from "./globalReducer";
import { homeReducerBundle } from "./routes/home";
import { signupReducerBundle } from "./routes/signup";
import { dashboardReducerBundle } from "./routes/dashboard"
import { accountReducerBundle } from "./routes/account"
import { institutionReducerBundle } from "./routes/institution"

export const initialState = {
  globalState: globalReducerBundle.initialState,
  homeState: homeReducerBundle.initialState,
  signupState: signupReducerBundle.initialState,
  dashboardState: dashboardReducerBundle.initialState,
  accountState: accountReducerBundle.initialState,
  institutionState: institutionReducerBundle.initialState
};

export const rootReducer = (
  { globalState, homeState, signupState, dashboardState, accountState, institutionState },
  action
) => ({
  globalState: globalReducerBundle.globalReducer(globalState, action),
  homeState: homeReducerBundle.homeReducer(homeState, action),
  signupState: signupReducerBundle.signupReducer(signupState, action),
  dashboardState: dashboardReducerBundle.dashboardReducer(dashboardState, action),
  accountState: accountReducerBundle.accountReducer(accountState, action),
  institutionState: institutionReducerBundle.institutionReducer(institutionState, action)
});
