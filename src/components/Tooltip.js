import React, { useState } from "react";
import styled from "styled-components";

const TooltipWrapper = styled.span`
  margin-top: 30px;

  .tooltip {
    position: relative;
    display: inline-block;
    color: cadetblue;
    border-bottom: 1px dotted black;

    i {
      color: darkorchid;
      cursor: pointer;
    }
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: max-content;
    max-width: 250px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px;
    border-radius: 6px;
    opacity: 0;
    transition: opacity 1s;
    position: absolute;
    z-index: 1;
  }

  .top {
    bottom: 100%;
    left: 50%;
    margin-left: -60px;
  }

  .right {
    bottom: 5%;
    left: 105%;
  }

  .under {
    top: 100%;
    left: 50%;
    margin-left: -60px;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }

  .tooltip .onOff {
    visibility: visible;
    width: max-content;
    max-width: 250px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px;
    border-radius: 6px;
    opacity: 1;
    transition: opacity 1s;
    position: absolute;
    z-index: 1;
  }
`;

const EditWrapper = styled.span`
  .editBtn {
    color: darkorchid;
    cursor: pointer;
  }
  span {
    padding: 5px;
    font-size: 14px;
  }

  @keyframes fade {
    from {
      opacity: 1;
      visibility: visible;
    }
    to {
      opacity: 0;
      visibility: hidden;
    }
  }

  .saved {
    animation: fade 3s ease forwards;
    width: 50px;
    height: 50px;
    color: wheat;
    background: green;
    border-radius: 10px;
  }
`;

const Tooltip = ({
  tootliptText = "tooltip",
  text = "text",
  type = "hover",
  position = "top",
  isEdit = false,
  click = false,
}) => {
  const [show, setShow] = useState(false);
  const [textForTooltip, setTooltipText] = useState(tootliptText);
  const [edit, setEdit] = useState(false);
  const [changeText, setChangeText] = useState("");
  const [save, setSave] = useState(false);

  return (
    <TooltipWrapper>
      {type === "click" ? (
        <span className="tooltip" onClick={() => setShow(!show)}>
          {text} <i>{show ? "(hidden)" : "(show)"}</i>
          {show && (
            <span className={`${position} ${type}`}>{textForTooltip}</span>
          )}
        </span>
      ) : (
        <span className="tooltip">
          {text}
          <span className={`tooltiptext ${position}`}>{textForTooltip}</span>
        </span>
      )}
      {isEdit && (
        <EditWrapper>
          <span
            className="editBtn"
            onClick={() => {
              setEdit(!edit);
              setSave(false);
            }}
          >
            {edit ? "Cancel" : "Edit"}
          </span>
          {edit && (
            <>
              <input onChange={(e) => setChangeText(e.target.value)} />
              <button
                onClick={() => {
                  setTooltipText(changeText);
                  setEdit(!edit);
                  setSave(true);
                }}
              >
                save
              </button>
            </>
          )}
          {<>{save && <span className="saved">SAVED</span>}</>}
        </EditWrapper>
      )}
    </TooltipWrapper>
  );
};

export default Tooltip;
