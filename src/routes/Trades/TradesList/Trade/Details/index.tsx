import React from "react";
import BtcAmount from "components/BtcAmount";
import { TradeItem } from "store/types";

import Text from "ui/elements/Text";
import styled from "@emotion/styled";

type Props = {
  trade: TradeItem;
};

const Container = styled.div`
  fontSize: 14px;
  color: #bcbcbe;
  width: auto;
`;

const ElipContainer = styled.div`
  white-space: nowrap;
  width: auto; 
`;

const Details: React.FC<Props> = ({ trade }) => {
  return (
    <Container>
      <ElipContainer>
        <Text dark bold>{trade.paymentMethod}</Text>
      </ElipContainer>
      <ElipContainer>
        <Text>{trade.amount} USD (<BtcAmount amount={trade.amount} /> BTC)</Text>
      </ElipContainer>
    </Container>
  );
};

export default React.memo(Details);
