import React from "react";

const Bubble = (props) => {
  return (
    <div className="bubble" style={props.style}>
      {props.children}
    </div>
  );
};

export default Bubble;
