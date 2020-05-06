import styled from "@emotion/styled";

const Cross = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  &:before, &:after {
    position: absolute;
    top: 2px;
    left: 9px;
    content: ' ';
    height: 15px;
    width: 2px;
    background-color: #eee;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export default Cross;
