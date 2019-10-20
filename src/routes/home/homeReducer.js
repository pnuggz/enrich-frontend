import { combineReducers } from "../../lib/combineReducers";

const initialHomeState = {
  test: true
};

const homeReducer = combineReducers();

const homeReducerBundle = {
  initialHomeState: initialHomeState,
  homeReducer: homeReducer
};

export default homeReducerBundle;
//categoryReducer
// const sectionThreeReducer = (state, action) => {
//   switch (action.type) {
//     case "STORIES_LOADING":
//       return {
//         ...state,
//         isLoading: true,
//         offset: action.payload.offset,
//         categories: action.payload.categories
//       };

//     case "STORIES_UPDATE":
//       return {
//         ...state,
//         isLoading: false,
//         stories: action.payload.stories,
//         offset: action.payload.offset
//       };

//     default:
//       return state;
//   }
// };

// export default sectionThreeReducer;
