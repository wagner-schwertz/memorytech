import styled from "styled-components";

export const Window = styled.div`
  margin: 0px;
  padding: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  justify-content: center;
  align-items: center;
`;

export const Scoreboard = styled.div`
  margin: 0;
  padding: 0;
  background-color: #e0e0e0;
  display: flex;
  width: 200px;
  height: 100px;
  flex-direction: column;

  div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px;
    padding: 16px;
    font-size: 20px;
    color: gray;
  }
`;
