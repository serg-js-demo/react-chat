import styled from "@emotion/styled";
import Container from "ui/elements/Container";

type Props = {
  gap?: number;
  justifyContent?: string;
  gridTemplateColumns?: string;
};

const Stack = styled(Container)<Props>`
  display: grid;
  grid-gap: ${({ gap }) => gap || 8}px;
  ${({ gridTemplateColumns }) =>
    gridTemplateColumns && `grid-template-columns: ${gridTemplateColumns};`
  };  
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`}
`;

export default Stack;
