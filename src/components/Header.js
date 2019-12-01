import React from "react";
import styled from "styled-components";

export default function Header() {
  return <HeaderWrapper>Gimme a gif</HeaderWrapper>;
}

const HeaderWrapper = styled.div`
  font-family: "Monoton", cursive;
  font-size: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 25rem;
  width: 100%;
  text-align: center;
  box-shadow: 0 1.5rem 2rem rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  background: linear-gradient(to right bottom, #66c4ea, #009ddc)
`;
