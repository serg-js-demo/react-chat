import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import Chat from "./Chat";
import Info from "./Info";
import Container from "ui/elements/Container";
import { State } from "store/types";
import { setCurrent } from "store/reducers/trades/trade/actions";
import { useDispatch, useSelector } from "react-redux";
import useShowClose from "hooks/useShowClose";

type OwnProps = {
  tradeId: number;
};

const Board: React.FC<OwnProps> = ({ tradeId }) => {
  const dispatch = useDispatch();
  const { trade } = useSelector(({ trades: { byId } }: State) => ({
    trade: byId[tradeId] || null,
  }));

  useEffect(() => {
    dispatch(setCurrent(tradeId));
  }, [dispatch, tradeId]);

  const { show, close, isHidden } = useShowClose();

  if (!trade || trade.dateDelete) {
    return <Redirect to="/404" />;
  }

  return (
    <Container display="flex" flex="1" relative>
      <Chat openTradeDetails={show} />
      <Info isHidden={isHidden} close={close} />
    </Container>
  );
};

export default React.memo(Board);
