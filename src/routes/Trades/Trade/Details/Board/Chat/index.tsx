import React from "react";
import styled from "@emotion/styled";

import Header from "./Header";
import Messages from "./Messages";
import ChatInput from "./ChatInput";
import Delimiter from "ui/elements/Delimiter";
import Space from "ui/elements/Space";
import Container from "ui/elements/Container";
import { State } from "store/types";
import { useSelector } from "react-redux";

const MainContainer = styled.div`
  flex: 1;
  background-color: #f6f7fa;
  display: flex;
  flex-direction: column;
`;

type Props = {
  openTradeDetails: any;
};

const Chat: React.FC<Props> = ({ openTradeDetails }) => {
  const { trade, user } = useSelector(
    ({ users, trades: { byId, current } }: State) => {
      const trade = current ? byId[current] : null;
      const user = trade ? users[trade.traderId] : null;
      return {
        user,
        trade,
      };
    }
  );

  if (!trade || !user) {
    return null;
  }
  return (
    <MainContainer>
      <Container
        flex="1 1 auto"
        height="0"
        padding="0"
        display="flex"
        flexDirection="column"
      >
        <Header openTradeDetails={openTradeDetails} trade={trade} user={user} />
        <Space size={20} />
        <Delimiter />
        <Container
          flex="1 1 auto"
          height="0"
          overflowY="auto"
          padding="16px 0 0 0"
        >
          <Messages />
        </Container>
      </Container>
      <Container padding="8px">
        <ChatInput />
      </Container>
    </MainContainer>
  );
};

export default React.memo(Chat);
