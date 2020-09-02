import styled from "styled-components";

export const Window = styled.div`
  margin: auto;
  margin-top: calc((100vh - min(100vw, 100vh)) / 2);
  width: min(100vw, 100vh);
  height: min(100vw, 100vh);
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  justify-content: center;
  align-items: center;
`;

export const Scoreboard = styled.div`
  margin-top: 4px;
  padding: 0;
  background-color: #e0e0e0;
  display: flex;
  width: 200px;
  height: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
