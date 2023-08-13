import React from "react";
import styled from "styled-components";
import Header from "./Header";

const ContentListWrapper = styled.div`
  border-bottom: 1px solid cornflowerblue;
  cursor: pointer;

  a:active,
  a:hover,
  a {
    text-decoration: none;
  }
`;

const ContentList = () => {
  return (
    <ContentListWrapper>
      <a name="top">
        <Header text="Content" small />
      </a>
      <list>
        <p>
          <a href="#Tooltip">1. #Tooltip</a>
        </p>
        <p>
          <a href="#Pop-up">2. #Pop-up</a>
        </p>
      </list>
    </ContentListWrapper>
  );
};

export default ContentList;
