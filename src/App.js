import { CopyBlock, shadesOfPurple } from "react-code-blocks";
import Tooltip from "./components/Tooltip";
import styled from "styled-components";
import Header from "./components/Header";
import PopUp from "./components/PopUp";
import { useState } from "react";
import {
  cssCodePopUp1,
  cssCodePopUp2,
  cssCodePopUp3,
  cssCodePopUpBackground,
  hoverCodeText,
  tooltipCodeText,
  tooltipComponent,
} from "./components/CodesStrings";
import ContentList from "./components/ContentList";

const AppWrapper = styled.div`
  max-width: 800px;
  margin: 50px auto;
  font-family: "Lucida Console", "Courier New", monospace;
`;

const ShowPopUp = styled.span`
  color: darkorchid;
  cursor: pointer;
  font-weight: bold;
`;

const App = () => {
  const [showPopUp1, setShowPopUp1] = useState(false);
  const [showPopUp2, setShowPopUp2] = useState(false);
  const [showPopUp3, setShowPopUp3] = useState(false);

  return (
    <AppWrapper>
      <ContentList />
      <Header text="#Tooltip" anchor="Tooltip" />
      <p>To implement a tooltip I use this code block</p>
      <CopyBlock
        text={tooltipCodeText}
        language={"js"}
        showLineNumbers={true}
        theme={shadesOfPurple}
      />
      <p>To display the tooltip when the cursor hovers over the text I use</p>
      <CopyBlock
        text={hoverCodeText}
        language={"js"}
        showLineNumbers={true}
        theme={shadesOfPurple}
      />
      <p>Next, I'll show a few variations of the tooltips:</p>
      <p>
        Several display variations, one of them is a tooltip above the text, to
        do this{" "}
        <Tooltip
          tootliptText="Hover tooltip above text"
          text="hover over me"
          position="top"
        />
      </p>
      <p>
        The next tooltip will be to the right of the text, to do this{" "}
        <Tooltip
          tootliptText="Hover tooltip right text"
          text="hover over me"
          position="right"
        />
      </p>
      <p>
        The next variant will show the tooltip at the bottom of the text, to do
        this{" "}
        <Tooltip
          tootliptText="Hover tooltip under text"
          text="hover over me"
          position="under"
        />
      </p>
      <p>
        Another option when the tooltip is shown on click, to do this{" "}
        <Tooltip
          tootliptText="use mouse click for show/hiddetn tooltip"
          text="click me"
          position="onOff"
          type="click"
        />
      </p>
      <p>
        It is also possible to edit, for this you need to add the isEdit
        parameter
      </p>
      <CopyBlock
        text={tooltipComponent}
        language={"js"}
        showLineNumbers={true}
        theme={shadesOfPurple}
        highlight="6"
      />
      <p>
        After clicking on <b>Edit</b>, you will be able to use the input to
        enter text, where to save the new text of the tooltip you need to save
        by clicking on the save button, then the input for editing will
        disappear and you will see the text that the text has been saved.
      </p>
      <p>
        To test this feature for a tooltip where it is displayed on click, you
        need to{" "}
        <Tooltip
          tootliptText="use mouse click for show/hiddetn tooltip"
          text="click edit"
          position="onOff"
          type="click"
          isEdit
        />
      </p>
      <p>
        And here you can check out the same editing functionality for another
        type{" "}
        <Tooltip
          tootliptText="Hover tooltip right text"
          text="hover tooltip"
          position="right"
          isEdit
        />
      </p>
      <Header text="#Pop-up" anchor="Pop-up" />
      <p>
        Next, I'll show a few ways to center the block using the popup example.
      </p>
      <p>
        If the element has a fixed height and width, we can use an indentation
        with negative values equal to half the height and width of the element
        after absolute positioning has been prescribed for it at 50%/50% will
        center the element inside the parent.
      </p>
      <CopyBlock
        text={cssCodePopUp1}
        language={"js"}
        showLineNumbers={true}
        theme={shadesOfPurple}
        highlight="5-7,9-11,13"
      />
      <p>
        You can click on the show PopUp1{" "}
        <ShowPopUp onClick={() => setShowPopUp1(true)}>button</ShowPopUp> to
        display this popup.
      </p>
      <p>Use the cross in the upper right corner to close the popup.</p>
      <p>
        If you don't know the width or height, you can use the transform
        property and a negative translate value of 50% in both directions (it is
        calculated from the current width/height of the element) to center it:
      </p>
      <CopyBlock
        text={cssCodePopUp2}
        language={"js"}
        showLineNumbers={true}
        theme={shadesOfPurple}
        highlight="6-9"
      />
      <p>
        Press this{" "}
        <ShowPopUp onClick={() => setShowPopUp2(true)}>button</ShowPopUp> to
        display the second popup
      </p>
      <p>
        Another way to centering with flexbox, to do centering in both
        directions with flexbox, you need to use two centering properties:
      </p>
      <CopyBlock
        text={cssCodePopUp3}
        language={"js"}
        showLineNumbers={true}
        theme={shadesOfPurple}
        highlight="3-5"
      />
      Press this{" "}
      <ShowPopUp onClick={() => setShowPopUp3(true)}>button</ShowPopUp> to
      display the third popup
      <p>
        A popup is used to darken the background when the popup is activated:
      </p>
      <CopyBlock
        text={cssCodePopUpBackground}
        language={"js"}
        showLineNumbers={true}
        theme={shadesOfPurple}
        highlight="2-8"
      />
      <p>You can also use many third-party libraries for any of these tasks.</p>
      <Header text="Back to top" small />
      {showPopUp1 && (
        <PopUp type={1} text="some text" onClose={() => setShowPopUp1(false)} />
      )}
      {showPopUp2 && (
        <PopUp type={2} text="some text" onClose={() => setShowPopUp2(false)} />
      )}
      {showPopUp3 && (
        <PopUp type={3} text="some text" onClose={() => setShowPopUp3(false)} />
      )}
    </AppWrapper>
  );
};

export default App;
