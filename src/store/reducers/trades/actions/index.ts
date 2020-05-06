enum TradesActions {
  SET_LIST = "SET_LIST",
  DELETE_ITEM = "DELETE_ITEM",
}

export const deleteTrade = (id: number) => ({
  type: TradesActions.DELETE_ITEM,
  payload: {
    data: id,
  },
});

export default TradesActions;
