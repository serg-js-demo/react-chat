import styled from "@emotion/styled";
import Stack from "ui/elements/Stack";

const DetailsContainer = styled(Stack)`
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export default DetailsContainer;
