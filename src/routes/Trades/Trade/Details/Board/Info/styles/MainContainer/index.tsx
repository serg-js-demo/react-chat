import styled from "@emotion/styled";

type ContainerProps = {
  isHidden: boolean;
};

const MainContainer = styled.div<ContainerProps>`
  flex-basis: 300px;
  border-left: 1px solid #eee;
  display: block;
  background-color: white;
  height: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 200;
  @media only screen and (max-width: 1100px) {
    position: absolute;
    right: ${({ isHidden }) => (isHidden ? "-300px" : "0px")};
    transition: right 0.5s;
    width: 300px;
  }
`;

export default MainContainer;
