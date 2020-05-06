import React from "react";
import Header from "components/Header";
import Menu from "components/Menu";
import Container from "ui/elements/Container";

const Layout: React.FC = ({ children }) => {
  return (
    <Container
      display="flex"
      flexDirection="column"
      height="100%"
    >
      <Header />
      <Menu />
      <Container flex="1">{children}</Container>
    </Container>
  );
};

export default Layout;
