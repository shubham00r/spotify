import React from "react";
import Card4 from "./Card4";

function LikedSongs() {
  return (
    <div className="Like ">
      <div className="ml-64 pt-16 flex ">
        <Card4
          title=""
          color1="rgb(64, 17, 138)"
          color2="rgb(184, 151, 236)"
          width={230}
          height={240}
        />
        <i className="text-white text-8xl fa-solid fa-heart absolute top-48 left-80 "></i>
        <div className="flex-col">
          <h3 className="ml-8 pt-12 text-lg text-white font-bold">playlist</h3>
          <h1 className=" text-7xl pl-7 pt-5 text-white text-5xl  font-bold ">
            Liked Songs
          </h1>
        </div>
      </div>
      <div className="text-center">
        <p className="ml-64 pt-20  text-3xl font-bold text-white">
          Songs you like will appear here
        </p>
        <p className="text-center ml-52 text-white mt-5">
          Save songs by tapping the heart icon.
        </p>

        <button className="btn shadow-2xl  text-black font-bold ml-96 mt-8 bg-slate-100 mr-40 h-12 w-32 rounded-full ">
          Find Songs
        </button>
      </div>
      <div className="h-28  ml-2 "></div>
    </div>
  );
}

export default LikedSongs;
