import React from "react";

function Card3(props) {
  return (
    <div
      style={{
        background: `linear-gradient(${props.color1},${props.color2})`,
        height: props.height,
        width: props.width,
      }}
      className="h-64 ml-4 rounded w-96 mt-7 "
    >
      <div>
        <div className="">
          {props.img && (
            <div className=" h-40 mt-5 ml-6 bg-black rounded-md w-36">
              {" "}
              <span>
                <i className="pl-8 pt-10 text-7xl text-white fa-solid fa-music"></i>
              </span>
            </div>
          )}

          <h1 className=" pt-48 ml-5 text-3xl font-bold text-black ">
            {props.title && (
              <span className="absolute top-80">{props.title}</span>
            )}
          </h1>
          <h2 className="pt-52 ml-7 mt-8 text-lg font-bold text-white ">
            <span className="absolute  top-80">{props.titlee}</span>
          </h2>
          <h2 className="pt-48 ml-12 mt-8 text-lg font-bold text-white ">
            {props.Heading}
          </h2>
        </div>
        {/* <button className="bg-lime-400 h-12 rounded-3xl absolute top-8">
          <i className="px-4 text-lg text-black fa-solid fa-play"></i>
        </button> */}
      </div>
    </div>
  );
}

export default Card3;
