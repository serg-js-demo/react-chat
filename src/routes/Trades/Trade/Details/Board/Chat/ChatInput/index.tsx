import React from "react";
import Form from "ui/elements/Form";
import TextInput from "ui/elements/TextInput";
import Button from "ui/elements/Button";
import Container from "ui/elements/Container";
import { State } from "store/types";
import { useSelector } from "react-redux";
import FakeBuyerSwitcher from "./FakeBuyerSwitcher";
import useChatInput from "./hooks/useChatInput";

const ChatInput: React.FC = () => {
  const { currentUser, trade } = useSelector(
    ({ currentUser, trades: { current, byId } }: State) => {
      return {
        currentUser,
        trade: current ? byId[current] : null,
      };
    }
  );

  const { value, handleChange, submit } = useChatInput({
    currentUser,
    trade,
  });

  const { isFakeBuyer } = currentUser;

  return (
    <Form onSubmit={submit}>
      <Container
        display="flex"
        border="2px solid #e8e9ed"
        borderRadius="4px"
        fontSize="18px"
        bgColor="#fff"
        padding="10px"
      >
        <Container flex="1">
          <TextInput
            value={value}
            onChange={handleChange}
            placeholder={isFakeBuyer ? 'Type "PAID" to make this trade PAID' : 'Type message and press Enter...'}
          />
        </Container>
        <Container flexBasis="60px" textAlign="center" alignItems="center" justifyContent="center" display="flex">
          <Button type="submit" color="#008000" onClick={submit}>
            {isFakeBuyer ? "SEND AS BUYER" : "SEND"}
          </Button>
        </Container>
        <Container flexBasis="30px">
          <FakeBuyerSwitcher />
        </Container>
      </Container>
    </Form>
  );
};

export default React.memo(ChatInput);
