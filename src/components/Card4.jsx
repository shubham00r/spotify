import React from "react";

function Card4(props) {
  return (
    <div
      style={{
        background: `linear-gradient(${props.color1}, ${props.color2})`,
        height: props.height,
        width: props.width,
      }}
      className="shadow-2xl rounded"
    >
      <div className=" ">
        <div className={props.title}></div>
      </div>
    </div>
  );
}

export default Card4;
