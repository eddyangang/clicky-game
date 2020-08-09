import React from "react";
import "./style.css";

function Tile(props) {
  return (
    <div className="card" id = {props.id} onClick={() => props.check(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default Tile;
