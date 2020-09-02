import React from "react";
import CardArray from "../../components/cardArray";
import { Scoreboard, Window } from "./styles";
import { useImmerReducer } from "use-immer";
import { initialState, reducer } from "../../context/global";

export default function Main() {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  return (
    <>
      <Window>
        <CardArray state={state} dispatch={dispatch} />
        <Scoreboard>{`Jogadas: ${state.tries}`}</Scoreboard>
      </Window>
    </>
  );
}
