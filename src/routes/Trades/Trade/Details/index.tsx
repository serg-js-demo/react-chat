import React from "react";
import { useParams } from "react-router-dom";
import Board from "./Board";

const Details = () => {
  const { tradeId } = useParams();
  if (!tradeId) {
    return null;
  }
  return <Board tradeId={+tradeId} />;
};

export default React.memo(Details);
