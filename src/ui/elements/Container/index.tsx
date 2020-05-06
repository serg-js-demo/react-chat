import styled from "@emotion/styled";

type Props = {
  relative?: boolean;
  height?: string;
  minHeight?: string;
  display?: string;
  overflowY?: string;
  overflowX?: string;
  absolute?: boolean;
  textAlign?: string;
  left?: string;
  right?: string;
  top?: string;
  padding?: string;
  margin?: string;
  color?: string;
  bgColor?: string;
  flex?: string;
  flexBasis?: string;
  flexWrap?: string;
  hideOnBig?: boolean;
  hideOnDesktop?: boolean;
  flexDirection?: string;
  backgroundColor?: string;
  background?: string;
  border?: string;
  borderBottom?: string;
  justifyContent?: string;
  borderRadius?: string;
  alignItems?: string;
  alignSelf?: string;
  fontSize?: string;
};

const Container = styled.div<Props>`
  ${({ relative }) => relative && "position: relative;"}
  ${({ absolute }) => absolute && "position: absolute;"}
  ${({ display }) => display && `display: ${display};`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `right: ${right};`}
  ${({ top }) => top && `top: ${top};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ color }) => color && `color: ${color};`}
  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}
  ${({ flex }) => flex && `flex: ${flex};`}
  ${({ flexBasis }) => flexBasis && `flex-basis: ${flexBasis};`}
  ${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ minHeight }) => minHeight && `min-height: ${minHeight};`}
  ${({ overflowY }) => overflowY && `overflow-y: ${overflowY};`}
  ${({ overflowX }) => overflowX && `overflow-x: ${overflowX};`}
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor};`}
  ${({ background }) => background && `background: ${background};`}
  ${({ border }) => border && `border: ${border};`}
  ${({ borderBottom }) => borderBottom && `border-bottom: ${borderBottom};`}
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius};`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf};`}
  ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}

  ${({ hideOnBig }) =>
    hideOnBig && "@media only screen and (min-width: 1100px) {display: none;}"};
  ${({ hideOnDesktop }) =>
    hideOnDesktop &&
    `
    @media only screen and (min-width: 700px) {
      display: none;
    }
  `};
`;

export default Container;
