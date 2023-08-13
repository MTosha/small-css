export const tooltipCodeText = `.tooltip {
    position: relative;
    display: inline-block;
    color: cadetblue;
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
`;

export const hoverCodeText = `  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }`;

export const tooltipComponent = `<Tooltip
  tootliptText='use click'
  text='Click me'
  position='onOff'
  type='click'
  isEdit
/>`;

export const cssCodePopUp1 = `const PopUpContent1 = styled.div\`
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
\`;`;

export const cssCodePopUp2 = `const PopUpContent2 = styled.div\`
  background: cornflowerblue;
  color: white;
  border-radius: 12px;
  padding: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
\`;`;

export const cssCodePopUp3 = `const PopUpWrapper3 = styled.div\`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
\`;`;

export const cssCodePopUpBackground = `const PopUpBackground = styled.div\`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  \``;
