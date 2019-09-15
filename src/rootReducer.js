import { globalReducerBundle } from "./globalReducer";
import { homeReducerBundle } from "./routes/home/index";
import { signupReducerBundle } from "./routes/signup/index"

export const initialState = {
  globalState: globalReducerBundle.initialState,
  homeState: homeReducerBundle.initialState,
  signupState: signupReducerBundle.initialState
};

export const rootReducer = ({ globalState, homeState, signupState }, action) => ({
  globalState: globalReducerBundle.globalReducer(globalState, action),
  homeState: homeReducerBundle.homeReducer(homeState, action),
  signupState: signupReducerBundle.signupReducer(signupState, action)
});
