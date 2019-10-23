import { combineReducers } from "../../lib/combineReducers";

const initialState = {
  notifications: []
};

const resetReducer = (state, action) => {
  switch (action.type) {
    case "NOTIFICATION_RESET":
      return initialState;
    default:
      return state;
  }
};

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "NOTIFICATION_UPDATE":
      return {
        ...state,
        notifications: action.payload
      };
    default:
      return state;
  }
};

const notificationReducerCombined = combineReducers(
  resetReducer,
  notificationReducer
);

const notificationReducerBundle = {
  initialState: initialState,
  notificationReducer: notificationReducerCombined,
};

export default notificationReducerBundle;
