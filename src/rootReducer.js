import { globalReducerBundle } from "./globalReducer";
import { homeReducerBundle } from "./routes/home/index";

export const initialState = {
  globalState: globalReducerBundle.initialState,
  homeState: homeReducerBundle.initialState
};

export const rootReducer = ({ globalState, homeState }, action) => ({
  globalState: globalReducerBundle.globalReducer(globalState, action),
  homeState: homeReducerBundle.homeReducer(homeState, action)
});
