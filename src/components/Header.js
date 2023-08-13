import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.h1`
  a:active,
  a:hover,
  a {
    text-decoration: none;
    background-image: linear-gradient(to left, #553c9a, #b393d3);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
`;

const Header = ({ text, small = false, anchor = "", href = "#top" }) => {
  return (
    <HeaderWrapper style={small ? { fontSize: "35px" } : { fontSize: "70px" }}>
      <a name={anchor} href={href}>
        {text}
      </a>
    </HeaderWrapper>
  );
};

export default Header;
