import React from "react";
import Card3 from "./Card3";
const YourLibrary = () => {
  return (
    <div className="libary h-96 ml-56 ">
      <div className="pt-6 ml-6 text-2xl font-bold text-gray-50 ">
        <h1>Playlist</h1>
      </div>
      <div className=" flex">
        <Card3 title="Liked Songs" color1="#3333ff" color2="#4db8ff" />
        {/* <Card3
         
          titlee="my playlist #1"
          color1="rgb(30, 41, 59)"
          color2="rgb(30, 41, 59)"
          width={192}
        /> */}
        <Card3
          img="https://t3.ftcdn.net/jpg/01/32/96/74/360_F_132967475_uTllh8NUpns8AS3Kmsfl89lTOVXb52Sp.jpg"
          titlee="my playlist #2"
          color1="rgb(30, 41, 59)"
          color2="rgb(30, 41, 59)"
          width={200}
          height={240}
        />
        <Card3
          img="https://t3.ftcdn.net/jpg/01/32/96/74/360_F_132967475_uTllh8NUpns8AS3Kmsfl89lTOVXb52Sp.jpg"
          titlee="my playlist #3"
          color1="rgb(30, 41, 59)"
          color2="rgb(30, 41, 59)"
          width={200}
          height={240}
        />
        <Card3
          img="https://t3.ftcdn.net/jpg/01/32/96/74/360_F_132967475_uTllh8NUpns8AS3Kmsfl89lTOVXb52Sp.jpg"
          titlee="my playlist #3"
          color1="rgb(30, 41, 59)"
          color2="rgb(30, 41, 59)"
          width={200}
          height={240}
        />

        <div className="pop">
          <button className=" bg-lime-400 h-11 rounded-3xl absolute left-1/3 top-80">
            <i className=" px-4 text-lg text-black fa-solid fa-play"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default YourLibrary;
