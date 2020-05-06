import React from "react";
import Title from "./Title";
import Details from "./Details";
import Avatar from "ui/elements/Avatar";
import Status from "./Status";
import Stack from "ui/elements/Stack";
import NavLinkContainer from "./styles/NavLinkContainer";
import DetailsContainer from "./styles/DetailsContainer";
import { useSelector } from "react-redux";
import { State, TradeItem } from "store/types";
import UnreadMessagesIndicator from "./UnreadMessagesIndicator";
import Container from "ui/elements/Container";

type Props = {
  trade: TradeItem;
};

const Trade: React.FC<Props> = ({ trade }) => {
  const { user } = useSelector((state: State) => ({
    user: state.users[trade.traderId],
  }));

  const { hasNewMessages } = trade;

  return (
    <NavLinkContainer to={`/trades/${trade.id}`}>
      <Container absolute top="10px" left="10px" hideOnDesktop>
        <UnreadMessagesIndicator hasNewMessages={hasNewMessages} />
      </Container>
      <DetailsContainer>
        <Stack gridTemplateColumns="10px auto">
          <UnreadMessagesIndicator hasNewMessages={hasNewMessages} />
          <Title user={user} isBuying={trade.isBuying} />
        </Stack>
        <Details trade={trade} />
      </DetailsContainer>
      <Stack relative>
        <Avatar src={user.imgUrl} />
        <Stack>
          <Status status={trade.status}>{trade.status}</Status>
        </Stack>
      </Stack>
    </NavLinkContainer>
  );
};

export default React.memo(Trade);
