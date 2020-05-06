import { NewMessagePayload } from "store/reducers/messages/MessagePayload";

enum MessagesActions {
  NEW_MESSAGE = "NEW_MESSAGE",
}

export const sendMessage = (data: NewMessagePayload) => ({
  type: MessagesActions.NEW_MESSAGE,
  payload: {
    data
  }
});

export default MessagesActions;
