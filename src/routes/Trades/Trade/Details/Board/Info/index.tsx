import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { State } from "store/types";
import Container from "ui/elements/Container";
import Button from "ui/elements/Button";
import Avatar from "ui/elements/Avatar";
import moment from 'moment';
import UserRating from "components/UserRating";
import { setPaid } from "store/reducers/trades/trade/actions";
import Text from "ui/elements/Text";
import Stack from "ui/elements/Stack";
import BtcAmount from "components/BtcAmount";
import MainContainer from "./styles/MainContainer";
import Widget from "./styles/Widget";
import Arrow from "./styles/Arrow";

type Props = {
  isHidden: boolean;
  close: any;
};

const Info: React.FC<Props> = ({ isHidden, close }) => {
  const { user, trade } = useSelector(({ users, trades: { byId, current } }: State) => {
    const trade = current ? byId[current] : null;
    const user = trade ? users[trade.traderId]: null
    return {
      trade,
      user
    };
  });
  const dispatch = useDispatch();
  const handleSetPaid = useCallback(() => {
    if (!trade) {
      return;
    }
    dispatch(setPaid(trade.id));
  }, [dispatch, trade])

  if (!trade) {
    return null;
  }

  return <MainContainer isHidden={isHidden}>
    <Container margin="20px">
      <Container display="flex" hideOnBig padding="0px 10px 20px 0px" textAlign="center" onClick={close}>
        <Button round><Arrow /></Button>
      </Container>
      <Container textAlign="center">
        <Stack padding="10px">
          <Text dark fontSize="16px">You are trading with <strong>{ user?.userName }</strong></Text>
          <Text>Started { moment(trade.startTime, "YYYY-MM-DD HH:mm:ss").fromNow() }</Text>
        </Stack>
        <Container padding="10px">
          <Button disabled={trade.status !== 'PAID'}
                  round
                  width="100%"
                  bgColor={"green"}
                  height="35px"
                  onClick={handleSetPaid}>
            Release bitcoins
          </Button>
        </Container>
        <Container display="flex" flexWrap="wrap">
          <Widget>
            {user && <>
              <Avatar src={user.imgUrl} />
              <UserRating user={user} />
            </>}
          </Widget>
          <Widget>
              <Text bold>STATUS</Text>
              <Text bold dark>{trade.status}</Text>
          </Widget>
          <Widget>
            <Text bold>TRADE AMOUNT</Text>
            <Text bold dark>{trade.amount} USD</Text>
          </Widget>
          <Widget>
            <Text bold>BTC AMOUNT</Text>
            <Text bold dark><BtcAmount amount={trade.amount} /></Text>
          </Widget>
        </Container>
      </Container>
    </Container>
  </MainContainer>;
};

export default React.memo(Info);
