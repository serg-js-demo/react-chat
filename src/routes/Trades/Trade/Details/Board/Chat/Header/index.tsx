import React, { useCallback } from "react";
import Container from "ui/elements/Container";
import { User, TradeItem } from "store/types";
import Button from "ui/elements/Button";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTrade } from "store/reducers/trades/actions";
import Text from "ui/elements/Text";
import UserRating from "components/UserRating";
import Cross from "./styles/Cross";

type Props = {
  trade: TradeItem;
  user: User;
  openTradeDetails: () => void;
};

const Header: React.FC<Props> = ({ trade, user, openTradeDetails }) => {
  const dispatch = useDispatch();

  const { paymentMethod, id } = trade;
  const history = useHistory();
  const handleClick = useCallback(() => {
    dispatch(deleteTrade(id));
    history.push("/trades");
  }, [dispatch, history, id]);

  const handleRightClick = useCallback(() => {
    openTradeDetails();
  }, [openTradeDetails]);

  return (
    <Container relative textAlign="center">
      <Container absolute top="50%" left="20px">
        <Button round onClick={handleClick}>
          <Cross />
        </Button>
      </Container>
      <Container>
        <Container padding="20px 20px 5px 20px">
          <Text bold dark fontSize="22px">
            {paymentMethod}
          </Text>
        </Container>
        <Container display="flex" justifyContent="center">
          <Text bold dark>
            {user.userName}
          </Text>
          &nbsp;
          <UserRating user={user} />
        </Container>
      </Container>
      <Container absolute top="50%" right="20px" hideOnBig>
        <Button round onClick={handleRightClick}>
          <Text color="#eee" bold>?</Text>
        </Button>
      </Container>
    </Container>
  );
};

export default React.memo(Header);
