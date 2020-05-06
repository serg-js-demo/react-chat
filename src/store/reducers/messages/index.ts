import MessagesActions from "./actions";
import { Reducer } from "store/reducers/Reducer";
import { Messages, MessageItem } from "store/types";
import getInitialState from "store/reducers/initialState";

const getFakeId = (items: MessageItem[]) => items[items.length - 1].id + 1;

const messages: Reducer<Messages, MessagesActions> = (
  state = getInitialState().messages,
  action
) => {
  switch (action.type) {
    case MessagesActions.NEW_MESSAGE:
      const data: any = action.payload.data;
      const { tradeId } = data;
      const msg = {
        id: getFakeId(state[tradeId]),
        time: new Date().toLocaleDateString(),
        ...data,
      };
      return {
        ...state,
        [tradeId]: [...state[tradeId], msg],
      };
    default:
      return state;
  }
};

export default messages;
