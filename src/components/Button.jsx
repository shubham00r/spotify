import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedSong,
  pauseSelectedSong,
  updateProgressBar,
} from "../state/action";

function Button(props) {
  const { isPlaying } = useSelector((state) => state.state);
  const dispatch = useDispatch();

  useEffect(() => {
    const audio = document.getElementById(props.name);
    audio.currentTime = 100;
    audio.addEventListener("timeupdate", audioListener);

    return () => {
      audio.removeEventListener("timeupdate", audioListener);
    };
  }, []);

  const audioListener = () => {
    const audio = document.getElementById(props.name);
    dispatch(updateProgressBar((audio.currentTime / audio.duration) * 100));
  };

  const playSong = () => {
    if (isPlaying) {
      const audio = document.getElementById(props.name);
      console.warn("pause");
      dispatch(pauseSelectedSong());
      audio.pause();
    } else {
      dispatch(
        setSelectedSong({ songImage: props.image, songName: props.name })
      );
      const audio = document.getElementById(props.name);

      audio.play();
    }
  };
  return (
    <div>
      <div className="absolute pt-2 right-6 bottom-20 bg-lime-500 h-11 rounded-3xl w-11">
        <button id="bt" onClick={playSong}>
          {isPlaying && (
            <i className="px-4 text-lg text-black fa-solid fa-pause"></i>
          )}
          {!isPlaying && (
            <i className="px-4 text-lg text-black fa-solid fa-play"></i>
          )}
        </button>
      </div>
      {/* <button onClick={pausedSound}>
        <i className="px-4 text-lg text-white fa-solid fa-play"></i>Pause
      </button> */}
    </div>
  );
}

export default Button;
