enum TradeActions {
  SET_CURRENT = "SET_CURRENT_TRADE",
  SET_PAID = "SET_PAID",
  DELETE_ITEM = "DELETE_CURRENT_TRADE",
}

export const setCurrent = (data: number) => ({
  type: TradeActions.SET_CURRENT,
  payload: {
    data,
  },
});

export const setPaid = (data: number) => ({
  type: TradeActions.SET_PAID,
  payload: {
    data,
  },
});

export default TradeActions;
