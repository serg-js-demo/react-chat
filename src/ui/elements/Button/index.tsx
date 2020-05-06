import styled from "@emotion/styled";

type Props = {
  round?: boolean;
  width?: string;
  height?: string;
  bgColor?: string;
  hoverBgColor?: string;
  color?: string;
};

const Button = styled.button<Props>`
  border: none;
  margin: 0;
  padding: 0;

  width: auto;
  overflow: visible;
  color: ${({ color }) => color || "#fff"};
  height: ${({ height }) => height || "24px"};
  background-color: ${({ bgColor, color }) =>
    bgColor ? bgColor : color ? "transparent" : "#b4bcc6"};
  color: ${({ color }) => color || "#fff"};
  cursor: pointer;
  &:hover:enabled {
    background-color: ${({ hoverBgColor, color }) =>
      hoverBgColor ? hoverBgColor : color ? "transparent" : "#aaa"};
  }
  &:disabled {
    background-color: #aaa;
  }
  ${({ round, width }) =>
    round &&
    `
    font-size: 14px;
    line-height: 12px;    
    width: ${width ? width : "24px"};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
  `}
`;

export default Button;
