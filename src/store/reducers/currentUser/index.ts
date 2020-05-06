import CurrentUserActions from "./actions";
import Reducer from "store/reducers/Reducer";
import { CurrentUser } from "store/types";
import getInitialState from "store/reducers/initialState";

type State = CurrentUser | null;

const currentUser: Reducer<State, CurrentUserActions> = (
  state = getInitialState().currentUser,
  action
) => {
  switch (action.type) {
    case CurrentUserActions.SET_USER:
      return action.payload.data;
    case CurrentUserActions.SET_IS_FAKE_BUYER:
      return {
        ...state,
        isFakeBuyer: action.payload.data,
      };
    default:
      return state;
  }
};

export default currentUser;
