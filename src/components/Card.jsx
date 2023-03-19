import React, { useEffect, useState } from "react";
import Button from "./Button";
import ProgressBar from "./ProgressBar";

function Card(props) {
  const [showButton, setShowButton] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [Sound] = useState(new Audio(`/${props.title}.mp3`));

  useEffect(() => {
    Sound.addEventListener("timeupdate", (a) => {
      console.log((Sound.currentTime / Sound.duration) * 100);
    });
  }, [Sound]);

  const playSound = () => {
    console.log(props.title);
    if (isPlaying) {
      Sound.pause();
      setIsPlaying(false);
    } else {
      Sound.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      onMouseEnter={(e) => setShowButton(true)}
      onMouseLeave={(e) => setShowButton(false)}
      className="relative w-48 h-64 pt-6 mt-5 ml-5 rounded-md bg-slate-800"
    >
      <img className="h-40 ml-4 rounded-md " src={props.imgsrc} alt="" />
      {/* <div className="absolute pt-2 ml-10 top-64 left-80 bg-lime-500 h-11 rounded-3xl w-11">
        <audio src="/sound.mp3"></audio>
        <button id="bt" onClick={playSound}>
          <i className="px-4 text-lg text-black fa-solid fa-play"></i>
        </button>
      </div> */}
      <audio id={props.title} src={`${props.title}.mp3`}></audio>
      <p className="mt-2 font-bold text-center text-zinc-50 ">{props.title}</p>
      <h5 className="mt-2 text-center text-slate-200 ">{props.Heading}</h5>
      {showButton && (
        <Button
          playSound={playSound}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          image={props.imgsrc}
          name={props.title}
        />
      )}
    </div>
  );
}

export default Card;
