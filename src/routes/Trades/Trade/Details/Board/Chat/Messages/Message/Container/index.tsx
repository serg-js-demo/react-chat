import styled from "@emotion/styled";

type Props = {
  isLeft: boolean;
};

const Container = styled.div<Props>`
  display: grid;
  grid-column-gap: 8px;
  grid-auto-flow: column;
  ${({ isLeft }) =>
    isLeft ? "justify-self: flex-start;" : "justify-self: flex-end;"}
  & > .img {
    order: ${({ isLeft }) => (isLeft ? 1 : 3)};
  }
  & > .content {
    order: ${({ isLeft }) => (isLeft ? 2 : 2)};
    background-color: ${({ isLeft }) =>
      isLeft ? "rgb(90, 116, 148)" : "white"};
    color: ${({ isLeft }) => (isLeft ? "white" : "")};
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    ${ 
      true && "box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.09);" 
    }
  }
  & > .space {
    width: 40px;
    height: 40px;
    order: ${({ isLeft }) => (isLeft ? 3 : 1)};
  }
`;

export default Container;
