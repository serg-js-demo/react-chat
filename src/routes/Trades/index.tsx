import React from "react";
import Container from "ui/elements/Container";
import TradesList from "./TradesList";
import Trade from "./Trade";
import useRefreshBpiData from "hooks/useRefreshBpiData";

const Trades = () => {
  useRefreshBpiData();
  return (
    <Container display="flex" height="100%" overflowX="hidden">
      <TradesList />
      <Trade />
    </Container>
  );
};

export default React.memo(Trades);
