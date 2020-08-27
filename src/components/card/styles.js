import styled from "styled-components";

export const CardFront = styled.div`
  margin: 4px;
  min-width: 100px;
  min-height: 100px;
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
  margin: 4px;
  min-width: 100px;
  min-height: 100px;
  display: flex;
  background-color: #e0e0e0;
  border: 1px solid #e0e0e0;
  cursor: pointer;
`;
