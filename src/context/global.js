import shuffleArray from "../utils/shuffle";

const card = [];

let i;
for (i = 0; i < 18; i += 1) {
  card.push({
    id: i,
    isRevealed: false,
  });
  card.push({
    id: i,
    isRevealed: false,
  });
}
shuffleArray(card);

export const initialState = {
  cards: card,
  step: "TO_PICK_FIRST_CARD",
  pick1: -1,
  pick2: -1,
  score: 0,
  tries: 0,
};

export const reducer = (draft, action) => {
  switch (action.type) {
    case "PICK_CARD":
      if (draft.step === "TO_PICK_FIRST_CARD") {
        draft.pick1 = action.payload;
        draft.cards[action.payload].isRevealed = true;
        draft.step = "TO_PICK_SECOND_CARD";
        return;
      } else if (draft.step === "TO_RESET_WINNER") {
        draft = initialState;
      } else if (draft.step === "TO_PICK_SECOND_CARD") {
        if (action.payload === draft.pick1) {
          return;
        } else {
          draft.pick2 = action.payload;
          draft.cards[action.payload].isRevealed = true;
          if (draft.cards[draft.pick1].id === draft.cards[draft.pick2].id) {
            draft.score++;
            draft.step = "TO_PICK_FIRST_CARD";
            if (draft.score === 18) {
              draft.step = "TO_RESET_WINNER";
            }
          } else {
            draft.step = "TO_RESET_MISMATCH";
          }
          draft.tries++;
          return;
        }
      } else if (draft.step === "TO_RESET_MISMATCH") {
        draft.cards[draft.pick1].isRevealed = false;
        draft.cards[draft.pick2].isRevealed = false;
        draft.step = "TO_PICK_FIRST_CARD";
        return;
      }
      break;
    default:
      return;
  }
};
