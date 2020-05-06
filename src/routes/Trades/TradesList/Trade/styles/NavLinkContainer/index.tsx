import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const NavLinkContainer = styled(NavLink)`
  display: grid;
  position: relative;
  grid-template-columns: auto 50px;
  @media only screen and (max-width: 700px) {
    grid-template-columns: auto;
    height: 100px;
  }
  height: 100px;
  align-items: center;
  padding: 0 12px 0 22px;
  border-bottom: 1px solid #f6f5f5;
  &.active,
  &:hover {
    background-color: #f6f7fa;
  }
  text-decoration: none;
`;

export default NavLinkContainer;
