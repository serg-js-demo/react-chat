import React from "react";
import Container from "ui/elements/Container";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const Link = styled(NavLink)`
  color: #333;
`;

const Home = () => {
  return <Container padding='20px'>
    Nothing interesting is here, please, take a look at <Link to="/trades">Trades</Link>
  </Container>;
};

export default React.memo(Home);
