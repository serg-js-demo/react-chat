import React from "react";
import Container from "ui/elements/Container";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const MenuLink = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 16px;
  border-right: 1px solid #eee;
  text-decoration: none;
  color: #aaa;
  &:hover {
    background-color: #f7f8fb;
  }
  &:last-of-type {
    border-right: none;
  }
  &.active {
    color: #555;
    background-color: #f7f8fb;
  }
`;

const Menu = () => {
  return (
    <Container
      display="flex"
      backgroundColor="#fefefe"
      borderBottom="1px solid #ddd"
    >
      <MenuLink to="/" exact>
        Overview
      </MenuLink>
      <MenuLink to="/trades">Trades</MenuLink>
      <MenuLink to="/disputs">Disputs</MenuLink>
      <MenuLink to="/offers">Offers</MenuLink>
    </Container>
  );
};

export default React.memo(Menu);
