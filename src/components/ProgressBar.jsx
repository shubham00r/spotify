import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSong, pauseSelectedSong } from "../state/action";

function ProgressBar(props) {
  const dispatch = useDispatch();
  const [showButton, setShowButton] = useState(false);

  const { amount, songName, songImage, isPlaying } = useSelector(
    (state) => state.state
  );

  const playPauseSound = () => {
    const audio = document.getElementById(songName);
    if (isPlaying) {
      dispatch(pauseSelectedSong());
      audio.pause();
    } else {
      dispatch(setSelectedSong({ songName, songImage }));
      audio.play();
    }
  };

  return (
    <div className="fixed bottom-0 z-50 w-full h-24 px-4 bg-black">
      <div className="flex items-center justify-between h-full">
        <div className="flex flex-[1] items-center m ">
          <span className="">
            <img
              className={
                isPlaying
                  ? "rounded-full w-16 h-16 App"
                  : "rounded-full w-16 h-16"
              }
              src={songImage}
              alt=""
            />
          </span>
          <h1 className="px-2 pt-2 ml-2 text-white">{songName}</h1>
          <span className="gap-4 px-3 ">
            <i className="text-white fa-solid fa-heart"></i>
          </span>
          <span className="">
            <i className="text-white fa-solid fa-image"></i>
          </span>
        </div>

        <div className="flex flex-[2] flex-col items-center justify-center">
          <div className="flex items-center gap-9">
            <span>
              <i className="text-white fa-solid fa-chess-queen"></i>
            </span>

            <i className="text-2xl text-white fa-solid fa-backward-step"></i>

            <button onClick={playPauseSound}>
              {isPlaying && (
                <i className="text-2xl text-white fa-solid fa-pause"></i>
              )}
              {!isPlaying && (
                <i className="text-2xl text-white fa-solid fa-play"></i>
              )}
            </button>
            <button>
              {" "}
              <i className="text-2xl text-white fa-solid fa-forward-step"></i>
            </button>
            <span>
              <i className="text-white fa-solid fa-chess-queen"></i>
            </span>
          </div>
          <div className="flex items-center w-3/4 mt-3">
            <h1 className="mr-2 text-xs text-slate-400 ">0:00</h1>
            <div className="flex w-full h-1 rounded-md bg-slate-400">
              <div
                style={{ width: amount }}
                className="h-1 bg-white hover:bg-green-500 rounded-3xl"
              ></div>
              {/* <div className="h-20 text-slate-400 w-14"></div> */}
            </div>
            <h1 className="ml-2 text-xs text-slate-400 ">0:00</h1>
          </div>
        </div>

        <div className="flex-[1] flex items-center justify-end ">
          <span>
            <i className="mr-4 text-white fa-solid fa-chess-queen"></i>
          </span>
          <span>
            <i className="mr-4 text-white fa-solid fa-chess-queen"></i>
          </span>
          <span>
            <i className="mr-4 text-white fa-solid fa-chess-queen"></i>
          </span>
          <div className="flex w-20 h-1 rounded-md bg-slate-400">
            <div className="w-20 bg-white hover:bg-green-500 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
