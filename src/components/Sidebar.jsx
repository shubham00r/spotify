import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="fixed top-0 left-0 z-30 flex opacity-100 sidebar ">
      <div className="w-56 h-screen pt-1 bg-black ">
        <div className="mt-10"></div>
        <img
          className="h-12 ml-4"
          src="https://thumbs.dreamstime.com/b/vinnytsia-ukraine-may-spotify-logo-dark-mode-cool-music-service-offers-legal-streaming-music-spotify-logo-dark-mode-218033923.jpg"
          alt=""
        />
        <div className="px-2 m-2 text-gray-50  ">
          <ul className="m-5 list-none ">
            <li className="text-lg ">
              <Link to={"/"}>
                <i class="fa-solid fa-house  mr-5 "></i>
                <span className="text-sm ">HOME</span>
              </Link>
            </li>
            <li className="text-lg ">
              <Link to={"/search"}>
                <i class="fa-solid fa-magnifying-glass mt-5 mr-5 "></i>
                <span className="text-lg ">Search</span>
              </Link>
            </li>
            <li className="">
              <Link to={"/library"}>
                <i class="fa-solid fa-house mt-5 mr-4"> </i>

                <span className="text-lg "> Your Library</span>
              </Link>
            </li>

            <li className="mt-8 ">
              <a href="#">
                <span className="px-2 pb-1 mr-1 rounded bg-slate-300">
                  <i class="fa-solid fa-plus text-slate-800 text-xs"></i>
                </span>
                <span className=""> Create Playlist</span>
              </a>
            </li>
            <li className="mt-4 ">
              <Link to={"/likedSongs"}>
                <a href="#">
                  {" "}
                  <span className="px-1 pb-1 mr-1 rounded bg-slate-300">
                    <i class="fa-solid fa-heart mr-5  "></i>{" "}
                  </span>
                  <span className="">Liked Songs</span>
                </a>
              </Link>
            </li>
          </ul>
          <div className="w-full h-px ml-1 bg-slate-500"></div>
        </div>
        <li className="mt-3 ml-8 text-white list-none cursor-pointer ">
          <span className="font-bold">My Playlist #1</span>{" "}
        </li>
        <li className="mt-3 ml-8 text-white list-none cursor-pointer ">
          <span className="font-bold "> My Playlist #2</span>
        </li>
      </div>
    </div>
  );
}

export default Sidebar;
