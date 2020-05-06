import React from "react";
import Container from "ui/elements/Container";

const EmptyTrade = () => {
  return <Container padding='20px'>Please, choose a trade from the list...</Container>;
};

export default React.memo(EmptyTrade);
