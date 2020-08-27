import React from "react";
import CardFlip from "react-card-flip";
import { CardFront, CardBack } from "./styles";

export default function Card(props) {
  return (
    <CardFlip isFlipped={props.isRevealed} flipDirection="vertical">
      <CardBack onClick={props.onClick}></CardBack>
      <CardFront onClick={props.onClick} imageURL={props.imageURL}></CardFront>
    </CardFlip>
  );
}
