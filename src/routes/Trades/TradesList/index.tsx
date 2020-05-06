import React from "react";
import styled from "@emotion/styled";
import Trade from "./Trade";
import { TradeItem } from "store/types";
import { useSelector } from "react-redux";
import { State } from "store/types";

const Container = styled.div`
  flex-basis: 300px;
  border-right: 0px solid #eee;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 100;
  @media only screen and (max-width: 900px) {
    flex-basis: 200px;
  }
  @media only screen and (max-width: 700px) {
    flex-basis: 50px;
  }
`;

const TradesList: React.FC = () => {
  const { trades } = useSelector(({ trades: { ids, byId } }: State) => ({
      trades: ids.map((id: number) => byId[id]).filter((item) => !item.dateDelete)
  }));

  const items = trades.map((trade: TradeItem) => <Trade key={trade.id} trade={trade} />);
  return <Container>{items}</Container>;
};

export default React.memo(TradesList);
