import styled from 'styled-components';

type Props = {
  background?: string;
  color?: string;
  height?: number;
  borderRadius?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  border?: string;
  fontSize?: number;
  width?: string;
  hoverBackground?: string;
  hoverColor?: string;
  custom_style?: object;
  isDisabled?: boolean;
  left? : string ;
};

export const Button = styled.div.attrs({ className: "customButton" })<Props>(
  ({ theme: { colors }, background, color, width,left, height, paddingVertical, paddingHorizontal, borderRadius, border, fontSize, hoverBackground, hoverColor, custom_style, isDisabled }) => `
    background-color: ${background || "gray"};
    color: ${color || "white"};
    height: ${height || "fit-content"};
    width: ${width || "40px"};
    left: ${left || "4px"};
    padding: ${paddingVertical !== undefined ? paddingVertical : 10}px ${paddingHorizontal !== undefined ? paddingHorizontal : 10}px;
    border-radius: ${borderRadius !== undefined ? borderRadius : 6}px; // Adjust border radius for smaller button
    border: ${border || `none`};
    font-weight: 400;
    font-size: ${fontSize !== undefined ? fontSize : 14}px; // Adjust font size for smaller button
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px;
    cursor: ${isDisabled ? "not-allowed" : "pointer"};
    pointer-events: ${isDisabled ? "none" : "all"};
    outline: none;
    aling-self: "center";
    background-position: center;
    opacity: ${isDisabled ? 0.2 : 1};
   
    line-height: 20px;
    text-align: center;
    display: inline;

    ${
      !isDisabled
        ? ` &:hover {
          opacity: 0.9;
          background-color: ${hoverBackground || "darkgray"};
          color: ${hoverColor || "white"};

          img {
            filter: invert(1);
          }
        }`
        : ` &:hover {
            cursor: initial;
        }`
    }

    &:active {
      background: ${hoverBackground || "darkgray"};
      transition: background 0s;
    }

    &[aria-disabled="true"] {
      pointer-events: none;s
      opacity: 0.7;
    }
  `
);
