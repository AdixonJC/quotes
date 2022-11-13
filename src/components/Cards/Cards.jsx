import React from "react";
import "./styles.css";

const Cards = ({ phrase, author}) => {
  return (
    <div className="cardContainer">
      <h3 className="phrase">{phrase}</h3>
      <h4 className="author">
        <strong><b>Author:</b> <q>{author}</q></strong>
      </h4>
    </div>
  );
};

export default Cards;
