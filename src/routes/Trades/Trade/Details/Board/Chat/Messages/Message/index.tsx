import React from "react";
import Avatar from "ui/elements/Avatar";
import { useSelector } from "react-redux";
import { State, MessageItem } from "store/types";
import Container from "./Container";

type Props = {
  item: MessageItem;
};

const Message: React.FC<Props> = ({ item }) => {
  const { isMyMessage, userImg } = useSelector(
    ({ users, currentUser: { id } }: State) => {
      const user = users[item.fromId];
      return {
        userImg: user.imgUrl,
        isMyMessage: user.id === id,
      };
    }
  );

  return (
    <Container isLeft={!isMyMessage}>
      <div className="img">
        <Avatar src={userImg} shadow />
      </div>
      <div className="content">{item.message}</div>
      <div className="space" />
    </Container>
  );
};

export default React.memo(Message);
