import React from "react";
import { useSelector } from "react-redux";
import { State } from "store/types";

type Props = {
  amount: number;
};

const BtcAmount: React.FC<Props> = ({ amount }) => {
  const { bpiInfo } = useSelector(({ bpiInfo }: State) => ({ bpiInfo }));
  try {
    const value = (amount / bpiInfo.response.data.USD.rate_float).toFixed(8);
    return <span>{value}</span>;
  } catch (e) {
    return <span>{0}</span>;
  }

};

export default React.memo(BtcAmount);
