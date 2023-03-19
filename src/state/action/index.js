export const setSelectedSong = ({ songName, songImage }) => {
  return (dispatch) => {
    dispatch({
      type: "SET_SELECTED_SONG",
      payload: {
        songName,
        songImage,
      },
    });
  };
};

export const pauseSelectedSong = () => {
  return (dispatch) => {
    dispatch({
      type: "PAUSE_SELECTED_SONG",
      payload: {},
    });
  };
};

export const updateProgressBar = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "UPDATE_PROGRESS",
      payload: amount,
    });
  };
};
