import styled from "styled-components";

export const DeckArray = styled.div`
  display: grid;
  height: 99%;
  width: 99%;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  justify-content: stretch;
  grid-gap: 4px;
`;
