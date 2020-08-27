import React from "react";
import { cardLogo } from "../../utils/cardDeck";
import Card from "../card";
import { DeckArray } from "./styles";
import { useEffect } from "react";

export default function CardArray({ state, dispatch }) {
  const handleCardClick = (idx) => {
    if (
      state.step === "TO_RESET_MISMATCH" ||
      state.step === "TO_RESET_WINNER"
    ) {
      dispatch({ type: "PICK_CARD", payload: idx });
    } else {
      if (!state.cards[idx].isRevealed) {
        dispatch({ type: "PICK_CARD", payload: idx });
      }
    }
  };

  useEffect(() => {
    document.title = `Pontuação: ${state.score}`;
  }, [state.score]);

  return (
    <DeckArray>
      {state.cards.map((card, idx) => (
        <Card
          imageURL={cardLogo[state.cards[idx].id]}
          isRevealed={state.cards[idx].isRevealed}
          onClick={() => handleCardClick(idx)}
        />
      ))}
    </DeckArray>
  );
}
