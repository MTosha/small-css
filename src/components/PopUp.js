import React from "react";
import styled from "styled-components";

const PopUpBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;

  .close {
    position: absolute;
    right: 18px;
    top: 12px;
    width: 24px;
    height: 24px;
    opacity: 0.3;
  }
  .close:hover {
    opacity: 1;
  }
  .close:before,
  .close:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 33px;
    width: 2px;
    background-color: #333;
  }
  .close:before {
    transform: rotate(45deg);
  }
  .close:after {
    transform: rotate(-45deg);
  }

  .dontKnowSize {
    position: absolute;
    right: 2px;
    top: 2px;
    width: 24px;
    height: 24px;
    opacity: 0.3;
  }

  .dontKnowSize:hover {
    opacity: 1;
  }
  .dontKnowSize:before,
  .dontKnowSize:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 14px;
    width: 2px;
    background-color: #333;
  }
  .dontKnowSize:before {
    transform: rotate(45deg);
  }
  .dontKnowSize:after {
    transform: rotate(-45deg);
  }

  .close .flex {
    position: relative;
  }
`;

const PopUpContent1 = styled.div`
  background: cornflowerblue;
  color: white;
  border-radius: 12px;
  width: 300px;
  height: 100px;
  padding: 20px;

  position: absolute;
  top: 50%;
  left: 50%;

  margin: -70px 0 0 -170px;
`;

const PopUpContent2 = styled.div`
  background: cornflowerblue;
  color: white;
  border-radius: 12px;
  padding: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const PopUpWrapper3 = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PopUpContent3 = styled.div`
  background: cornflowerblue;
  color: white;
  height: 100px;
  padding: 12px;
  border-radius: 5px;
  box-shadow: 0 0 10px #000;
  width: 300px;
  justify-content: space-between;
`;

const PopUp = ({ type, onClose, text }) => {
  return (
    <PopUpBackground>
      {type === 1 && <PopUpContent1>{text}</PopUpContent1>}
      {type === 2 && <PopUpContent2>{text}</PopUpContent2>}
      {type === 3 && (
        <PopUpWrapper3>
          <PopUpContent3>{text}</PopUpContent3>
        </PopUpWrapper3>
      )}
      <span className="close flex" onClick={() => onClose()} />
    </PopUpBackground>
  );
};

export default PopUp;
