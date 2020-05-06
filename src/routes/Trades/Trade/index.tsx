import React from "react";
import Container from "ui/elements/Container";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import EmptyTrade from "./EmptyTrade";
import Details from "./Details";

const Trade = () => {
  const { path } = useRouteMatch();
  return (
    <Container display="flex" relative flex="1">
      <Switch>
        <Route path={path} exact component={EmptyTrade} />
        <Route path={`${path}/:tradeId`} component={Details} />
      </Switch>
    </Container>
  );
};

export default Trade;
