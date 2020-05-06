import Actions from "./actions";
import Reducer from "store/reducers/Reducer";
import { BPIInfo } from "store/types";
import getInitialState from "store/reducers/initialState";

const bpiResponse: Reducer<BPIInfo, Actions> = (
  state = getInitialState().bpiInfo,
  action
) => {
  switch (action.type) {
    case Actions.FETCH_START:
      return { ...state, loading: true };
    case Actions.FETCH_SUCCESS:
      return { ...state, loading: false, ...action.payload.data };
    case Actions.FETCH_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default bpiResponse;
