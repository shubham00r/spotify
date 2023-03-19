import React from "react";

function card2(props) {
  return (
    <div>
      <div
        style={{
          background: `linear-gradient(${props.color1}, ${props.color2})`,
        }}
        className="card ml-5 mt-5 z-50 "
      >
        <h1 className="ml-4  pt-2 text-2xl text-white font-bold ">
          {props.title}
        </h1>
        <img className="img h-28 ml-10 mt-4" src={props.imgsrc} alt="" />
      </div>
    </div>
  );
}

export default card2;
