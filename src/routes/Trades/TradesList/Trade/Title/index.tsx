import React from "react";
import { User } from "store/types";
import styled from "@emotion/styled";

const Container = styled.div`
  font-size: 13px;
  color: #b7b9bb;
`;

type Props = {
  user: User;
  isBuying: boolean;
};

const Title: React.FC<Props> = ({ user, isBuying }) => {
  return (
    <Container>
      {user.userName} <strong>is {isBuying ? "buying" : "selling"}</strong>
    </Container>
  );
};

export default React.memo(Title);
