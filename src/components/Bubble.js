import React from "react";

export default function Bubble(props) {
  return (
    <div className="bubble" style={props.style}>
      {props.children}
    </div>
  );
}
