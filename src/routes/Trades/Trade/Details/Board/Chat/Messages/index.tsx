import React from "react";
import { State } from "store/types";
import Stack from "ui/elements/Stack";
import Message from "./Message";
import Container from "ui/elements/Container";
import { useSelector } from "react-redux";

const Messages: React.FC = () => {
  const { items } = useSelector(({ messages, trades: { current } }: State) => ({
    items: current ? messages[current] || [] : [],
  }));

  const messages = items.map((item) => <Message key={item.id} item={item} />);
  return (<Container padding="10px">
    <Stack>{messages}</Stack>
  </Container>);
};

export default React.memo(Messages);
