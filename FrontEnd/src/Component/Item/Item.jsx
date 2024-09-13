import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
const Item = (props) => {
  return (
    <div className="item" title={props.SP_TEN}>
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.SP_ANH} alt="" />
      </Link>
      <p className="text-truncate">{props.SP_TEN}</p>
      <div className="item-prices"></div>
    </div>
  );
};

export default Item;
