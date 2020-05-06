import React from "react";
import Container from "ui/elements/Container";

const Logo = () => {
  return <span>BITCOIN CHAT</span>;
};

const Header = () => {
  return (
    <Container
      padding="0 16px"
      height="40px"
      minHeight="40px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      background="rgb(90, 116, 148)"
      color="#eee"
    >
      <Logo />
    </Container>
  );
};

export default React.memo(Header);
