import styled from "styled-components";

export const CardFront = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #e0e0e0;
  border: 1px solid #e0e0e0;
  background-image: url(${(props) => props.imageURL});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
`;

export const CardBack = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #e0e0e0;
  border: 1px solid #e0e0e0;
  cursor: pointer;
`;
