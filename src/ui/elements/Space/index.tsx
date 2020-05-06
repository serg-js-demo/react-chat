import styled from "@emotion/styled";

type Props = {
  size: number;
};

const Space = styled.div<Props>`
  height: ${({ size }) => size || 10}px;
`;

export default Space;
