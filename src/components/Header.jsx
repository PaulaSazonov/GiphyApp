import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderWrapper>
      <Red>Gimme</Red>
      <Yellow>a</Yellow>
      <Blue>gif</Blue>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  font-family: "Monoton", cursive;
  font-size: 80px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 25rem;
  width: 100%;
  text-align: center;
  background-color: #f4f2f2;
`;

const Red = styled.div`
  color: #f14e28;
  display: inline;
`;

const Yellow = styled.div`
  color: #fed41d;
  display: inline;
  padding: 0 .5rem;
`;

const Blue = styled.div`
  color: #009ddc;
  display: inline;
`;
