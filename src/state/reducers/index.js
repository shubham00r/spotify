import { combineReducers } from "redux";

const reducer = (
  state = {
    amount: 0,
    songName: "",
    songImage: "",
    isPlaying: false,
  },
  action
) => {
  if (action.type === "SET_SELECTED_SONG") {
    return {
      ...state,
      songName: action.payload.songName,
      songImage: action.payload.songImage,
      isPlaying: true,
    };
  } else if (action.type === "UPDATE_PROGRESS") {
    return {
      ...state,
      amount: action.payload,
    };
  } else if (action.type === "PAUSE_SELECTED_SONG") {
    return {
      ...state,
      isPlaying: false,
    };
  } else {
    return state;
  }
};

const reducers = combineReducers({
  state: reducer,
});

export default reducers;
