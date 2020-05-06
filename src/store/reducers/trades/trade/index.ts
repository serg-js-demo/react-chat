import Reducer from "store/reducers/Reducer";
import TradeActions from "./actions";

const trade: Reducer<number | null, TradeActions> = (state = null, action) => {
  switch (action.type) {
    case TradeActions.SET_CURRENT:
      return action.payload.data;
    case TradeActions.DELETE_ITEM:
      return null;
    default:
      return state;
  }
};

export default trade;
