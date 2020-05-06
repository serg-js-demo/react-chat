import { combineReducers } from "redux";
import { TradesById, TradeItemStatus } from "store/types";
import TradesActions from "./actions";
import TradeActions from "./trade/actions";
import getInitialState from "../initialState";
import Reducer from "store/reducers/Reducer";
import trade from "./trade";
import MessagesActions from "store/reducers/messages/actions";
import { NewMessagePayload } from "store/reducers/messages/MessagePayload";

const handleSetCurrentTrade = (state: TradesById, tradeId: number) => {
  return {
    ...state,
    [tradeId]: {
      ...state[tradeId],
      hasNewMessages: false,
    },
  };
};

const handleNewMessage = (state: TradesById, data: NewMessagePayload) => {
  const { tradeId, fromId } = data;
  const trade = state[tradeId];
  if (trade.traderId !== fromId) {
    return state;
  }
  return {
    ...state,
    [tradeId]: {
      ...state[tradeId],
      hasNewMessages: true,
    },
  };
};

const handleSetPaidTrade = (state: TradesById, tradeId: number) => {
  return {
    ...state,
    [tradeId]: {
      ...state[tradeId],
      status: "PAID" as TradeItemStatus,
    },
  };
};

const byId: Reducer<
  TradesById,
  TradesActions | TradeActions | MessagesActions
> = (state = getInitialState().trades.byId, action) => {
  switch (action.type) {
    case TradesActions.DELETE_ITEM:
      const tradeId: any = action.payload.data;
      return {
        ...state,
        [tradeId]: {
          ...state[tradeId],
          dateDelete: new Date().toLocaleString(),
        },
      };
    case TradeActions.SET_CURRENT:
      return handleSetCurrentTrade(state, action.payload.data);
    case TradeActions.SET_PAID:
      return handleSetPaidTrade(state, action.payload.data);
    case MessagesActions.NEW_MESSAGE:
      return handleNewMessage(state, action.payload.data);
    default:
      return state;
  }
};

const ids: Reducer<number[], TradesActions> = (
  state = getInitialState().trades.ids
) => {
  return state;
};

const trades = combineReducers({
  byId,
  ids,
  current: trade,
});

export default trades;
